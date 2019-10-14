const { parsePackageJSONChange } = require('../lib/dep-file-parsers')

describe('the parsePackageJSONChange parser', () => {
  const noChangeDiff = {
    message: '\nenhanced animations, layout and systematic structure\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 6ca32cc25..e85a5ec02 100644\n--- a/package.json\n+++ b/package.json\n@@ -10,6 +10,8 @@\n     "react-native": "^0.22.2",\n     "react-native-cookies": "0.0.3",\n     "react-native-simple-events": "^1.0.1",\n-    "react-native-toggle": "^1.0.3"\n+    "react-native-swiper": "^1.4.3",\n+    "react-native-toggle": "^1.0.3",\n+    "react-timer-mixin": "^0.13.3"\n   }\n }\n\n',
    commit: '8a4f3dbb437e2c4c7f74dbde552f65e38ad707c0',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Thu, 24 Mar 2016 18:02:16 -0700',
    additions: [
      '    "react-native-swiper": "^1.4.3",',
      '    "react-native-toggle": "^1.0.3",',
      '    "react-timer-mixin": "^0.13.3"',
    ],
    deletions: ['    "react-native-toggle": "^1.0.3"'],
  }

  const changeDiff = {
    message: '\nUpdated project to use newest version of react native\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 1ffd13746..c5764cf02 100644\n--- a/package.json\n+++ b/package.json\n@@ -13,9 +13,9 @@\n     "base-64": "^0.1.0",\n     "lodash": "^4.16.6",\n     "moment": "^2.15.2",\n-    "react": "15.2.1",\n+    "react": "^15.3.2",\n     "react-mixin": "^2.0.2",\n-    "react-native": "^0.31.0",\n+    "react-native": "^0.37.0",\n     "react-native-code-push": "^1.15.1-beta",\n     "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n\n',
    commit: '676f445262de5068071ae678c99d4b39df5e5739',
    authorName: 'Justin Foss',
    authorEmail: 'justin@example.com',
    date: 'Wed, 16 Nov 2016 11:14:27 -0800',
    additions: ['    "react": "^15.3.2",', '    "react-native": "^0.37.0",'],
    deletions: ['    "react": "15.2.1",', '    "react-native": "^0.31.0",'],
  }

  it(`will find all of the diffs where a given dependency changed versions`, () => {
    const { message, diff, date, authorEmail, authorName, commit } = changeDiff
    expect(parsePackageJSONChange(changeDiff, 'react-native')).toEqual({
      name: 'react-native',
      version: '^0.37.0',
      message,
      diff,
      date,
      authorEmail,
      authorName,
      commit,
    })
  })

  it(`will return null if a dependency moved lines but did not change`, () => {
    expect(parsePackageJSONChange(noChangeDiff, 'react-native-toggle')).toBe(
      null
    )
  })

  it(`will return null if the dependency is not found`, () => {
    expect(parsePackageJSONChange(changeDiff, 'foo-bar')).toBe(null)
  })
})
