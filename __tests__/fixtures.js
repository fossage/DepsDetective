const packageJSONDiffLogs = `0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
676f445262de5068071ae678c99d4b39df5e5739
Justin Foss
justin@example.com
Wed, 16 Nov 2016 11:14:27 -0800
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
Updated project to use newest version of react native

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 1ffd13746..c5764cf02 100644
--- a/package.json
+++ b/package.json
@@ -13,9 +13,9 @@
     "base-64": "^0.1.0",
     "lodash": "^4.16.6",
     "moment": "^2.15.2",
-    "react": "15.2.1",
+    "react": "^15.3.2",
     "react-mixin": "^2.0.2",
-    "react-native": "^0.31.0",
+    "react-native": "^0.37.0",
     "react-native-code-push": "^1.15.1-beta",
     "react-native-cookiemanager": "0.0.1",
     "react-native-cookies": "0.0.3",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
878d4f8933bbc9db5bbc0433a269f54367e0467d
Justin Foss
justin@example.com
Tue, 15 Nov 2016 21:07:05 -0800
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
Added yarn.lock file and updated package.json to ensure we use correct version of react

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index e1a67c08d..1ffd13746 100644
--- a/package.json
+++ b/package.json
@@ -13,7 +13,7 @@
     "base-64": "^0.1.0",
     "lodash": "^4.16.6",
     "moment": "^2.15.2",
-    "react": "^15.2.1",
+    "react": "15.2.1",
     "react-mixin": "^2.0.2",
     "react-native": "^0.31.0",
     "react-native-code-push": "^1.15.1-beta",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
d7bae2433b7ef985f33aa3c1086bccc2d9f3b8ca
Justin Foss
justin@example.com
Mon, 14 Nov 2016 11:23:55 -0800
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
PRODDEV-1170: Improved scrolling performance on home screen

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index ec1a502a7..e1a67c08d 100644
--- a/package.json
+++ b/package.json
@@ -14,6 +14,7 @@
     "lodash": "^4.16.6",
     "moment": "^2.15.2",
     "react": "^15.2.1",
+    "react-mixin": "^2.0.2",
     "react-native": "^0.31.0",
     "react-native-code-push": "^1.15.1-beta",
     "react-native-cookiemanager": "0.0.1",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
707cdc671a3517cb27d2479829c9f719f4bfb75e
Michael Doe
michael@example.com
Tue, 23 Aug 2016 13:45:54 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
Advanced release to latest react native

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 3a1ac89b8..0c853dc2d 100644
--- a/package.json
+++ b/package.json
@@ -6,8 +6,8 @@
     "start": "node node_modules/react-native/local-cli/cli.js start"
   },
   "dependencies": {
-    "react": "^15.1.0",
-    "react-native": "^0.27.0-rc1",
+    "react": "^15.2.1",
+    "react-native": "^0.31.0",
     "react-native-cookiemanager": "0.0.1",
     "react-native-cookies": "0.0.3",
     "react-native-fs": "^1.4.0",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
a89b89f675b3ddb08dfd716fe1475a6cd51d4ee2
Michael Doe
michael@example.com
Mon, 13 Jun 2016 17:29:39 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
Android Release canidate 1

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 9a4bc3965..3a1ac89b8 100644
--- a/package.json
+++ b/package.json
@@ -6,10 +6,11 @@
     "start": "node node_modules/react-native/local-cli/cli.js start"
   },
   "dependencies": {
-    "react": "^0.14.7",
-    "react-native": "^0.25.0-rc",
+    "react": "^15.1.0",
+    "react-native": "^0.27.0-rc1",
     "react-native-cookiemanager": "0.0.1",
     "react-native-cookies": "0.0.3",
+    "react-native-fs": "^1.4.0",
     "react-native-simple-events": "^1.0.1",
     "react-native-swiper": "^1.4.3",
     "react-native-toggle": "^1.0.3",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
d18cd3236dd3a2ea4e55570b5eda2a2966442a0f
Michael Doe
michael@example.com
Thu, 21 Apr 2016 17:15:32 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
further enhancements to android app; now injects code to ensure that proper VH workaround is activated, added icons, updated title

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 46fa48322..9a4bc3965 100644
--- a/package.json
+++ b/package.json
@@ -7,7 +7,7 @@
   },
   "dependencies": {
     "react": "^0.14.7",
-    "react-native": "^0.23.1",
+    "react-native": "^0.25.0-rc",
     "react-native-cookiemanager": "0.0.1",
     "react-native-cookies": "0.0.3",
     "react-native-simple-events": "^1.0.1",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
80c7918e9654899e1ef51721707cf345de87e4ce
Michael
michael@example.com
Tue, 19 Apr 2016 17:11:54 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
implemented initial working android app

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index e85a5ec02..46fa48322 100644
--- a/package.json
+++ b/package.json
@@ -7,7 +7,8 @@
   },
   "dependencies": {
     "react": "^0.14.7",
-    "react-native": "^0.22.2",
+    "react-native": "^0.23.1",
+    "react-native-cookiemanager": "0.0.1",
     "react-native-cookies": "0.0.3",
     "react-native-simple-events": "^1.0.1",
     "react-native-swiper": "^1.4.3",

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
8a4f3dbb437e2c4c7f74dbde552f65e38ad707c0
Michael Doe
michael@example.com
Thu, 24 Mar 2016 18:02:16 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
enhanced animations, layout and systematic structure

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 6ca32cc25..e85a5ec02 100644
--- a/package.json
+++ b/package.json
@@ -10,6 +10,8 @@
     "react-native": "^0.22.2",
     "react-native-cookies": "0.0.3",
     "react-native-simple-events": "^1.0.1",
-    "react-native-toggle": "^1.0.3"
+    "react-native-swiper": "^1.4.3",
+    "react-native-toggle": "^1.0.3",
+    "react-timer-mixin": "^0.13.3"
   }
 }

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
94e764bbac2972c69a8992a8c165b813b43cca41
Michael Doe
michael@example.com
Wed, 23 Mar 2016 16:57:47 -0700
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
WIP for hybrid app

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index 8f119b93e..6ca32cc25 100644
--- a/package.json
+++ b/package.json
@@ -6,7 +6,8 @@
     "start": "node node_modules/react-native/local-cli/cli.js start"
   },
   "dependencies": {
-    "react-native": "^0.19.0",
+    "react": "^0.14.7",
+    "react-native": "^0.22.2",
     "react-native-cookies": "0.0.3",
     "react-native-simple-events": "^1.0.1",
     "react-native-toggle": "^1.0.3"

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
a13110f30d4f5a4cbdf132051bc3746b119c3535
Michael Doe
michael@example.com
Thu, 4 Feb 2016 11:25:50 -0800
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
Finishing touch on login in screen, recover password flow, rememeber me. Requires a minor server side change to support seemless sign on with the wrapped webview

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
index c3593a74f..8f119b93e 100644
--- a/package.json
+++ b/package.json
@@ -8,6 +8,7 @@
   "dependencies": {
     "react-native": "^0.19.0",
     "react-native-cookies": "0.0.3",
-    "react-native-simple-events": "^1.0.1"
+    "react-native-simple-events": "^1.0.1",
+    "react-native-toggle": "^1.0.3"
   }
 }

0.31_DEPS_DETECTIVE_COMMIT_DELIMETER
ddbd87e7e7acee7f07ca221a87b14f3f7b66a18b
Michael Doe
michael@example.com
Tue, 2 Feb 2016 18:23:10 -0800
0.31_DEPS_DETECTIVE_SECTION_DELIMETER
IOS Wrapper initial commit

0.31_DEPS_DETECTIVE_SECTION_DELIMETER
diff --git a/package.json b/package.json
new file mode 100644
index 000000000..c3593a74f
--- /dev/null
+++ b/package.json
@@ -0,0 +1,13 @@
+{
+  "name": "IOSReact",
+  "version": "0.0.1",
+  "private": true,
+  "scripts": {
+    "start": "node node_modules/react-native/local-cli/cli.js start"
+  },
+  "dependencies": {
+    "react-native": "^0.19.0",
+    "react-native-cookies": "0.0.3",
+    "react-native-simple-events": "^1.0.1"
+  }
+}`

const parsedPackageJSONDiffs = [
  {
    message: '\nUpdated project to use newest version of react native\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 1ffd13746..c5764cf02 100644\n--- a/package.json\n+++ b/package.json\n@@ -13,9 +13,9 @@\n     "base-64": "^0.1.0",\n     "lodash": "^4.16.6",\n     "moment": "^2.15.2",\n-    "react": "15.2.1",\n+    "react": "^15.3.2",\n     "react-mixin": "^2.0.2",\n-    "react-native": "^0.31.0",\n+    "react-native": "^0.37.0",\n     "react-native-code-push": "^1.15.1-beta",\n     "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n\n',
    commit: '676f445262de5068071ae678c99d4b39df5e5739',
    authorName: 'Justin Foss',
    authorEmail: 'justin@example.com',
    date: 'Wed, 16 Nov 2016 11:14:27 -0800',
    additions: ['    "react": "^15.3.2",', '    "react-native": "^0.37.0",'],
    deletions: ['    "react": "15.2.1",', '    "react-native": "^0.31.0",'],
  },
  {
    message:
      '\nAdded yarn.lock file and updated package.json to ensure we use correct version of react\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex e1a67c08d..1ffd13746 100644\n--- a/package.json\n+++ b/package.json\n@@ -13,7 +13,7 @@\n     "base-64": "^0.1.0",\n     "lodash": "^4.16.6",\n     "moment": "^2.15.2",\n-    "react": "^15.2.1",\n+    "react": "15.2.1",\n     "react-mixin": "^2.0.2",\n     "react-native": "^0.31.0",\n     "react-native-code-push": "^1.15.1-beta",\n\n',
    commit: '878d4f8933bbc9db5bbc0433a269f54367e0467d',
    authorName: 'Justin Foss',
    authorEmail: 'justin@example.com',
    date: 'Tue, 15 Nov 2016 21:07:05 -0800',
    additions: ['    "react": "15.2.1",'],
    deletions: ['    "react": "^15.2.1",'],
  },
  {
    message:
      '\nPRODDEV-1170: Improved scrolling performance on home screen\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex ec1a502a7..e1a67c08d 100644\n--- a/package.json\n+++ b/package.json\n@@ -14,6 +14,7 @@\n     "lodash": "^4.16.6",\n     "moment": "^2.15.2",\n     "react": "^15.2.1",\n+    "react-mixin": "^2.0.2",\n     "react-native": "^0.31.0",\n     "react-native-code-push": "^1.15.1-beta",\n     "react-native-cookiemanager": "0.0.1",\n\n',
    commit: 'd7bae2433b7ef985f33aa3c1086bccc2d9f3b8ca',
    authorName: 'Justin Foss',
    authorEmail: 'justin@example.com',
    date: 'Mon, 14 Nov 2016 11:23:55 -0800',
    additions: ['    "react-mixin": "^2.0.2",'],
    deletions: [],
  },
  {
    message: '\nAdvanced release to latest react native\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 3a1ac89b8..0c853dc2d 100644\n--- a/package.json\n+++ b/package.json\n@@ -6,8 +6,8 @@\n     "start": "node node_modules/react-native/local-cli/cli.js start"\n   },\n   "dependencies": {\n-    "react": "^15.1.0",\n-    "react-native": "^0.27.0-rc1",\n+    "react": "^15.2.1",\n+    "react-native": "^0.31.0",\n     "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n     "react-native-fs": "^1.4.0",\n\n',
    commit: '707cdc671a3517cb27d2479829c9f719f4bfb75e',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Tue, 23 Aug 2016 13:45:54 -0700',
    additions: ['    "react": "^15.2.1",', '    "react-native": "^0.31.0",'],
    deletions: [
      '    "react": "^15.1.0",',
      '    "react-native": "^0.27.0-rc1",',
    ],
  },
  {
    message: '\nAndroid Release canidate 1\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 9a4bc3965..3a1ac89b8 100644\n--- a/package.json\n+++ b/package.json\n@@ -6,10 +6,11 @@\n     "start": "node node_modules/react-native/local-cli/cli.js start"\n   },\n   "dependencies": {\n-    "react": "^0.14.7",\n-    "react-native": "^0.25.0-rc",\n+    "react": "^15.1.0",\n+    "react-native": "^0.27.0-rc1",\n     "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n+    "react-native-fs": "^1.4.0",\n     "react-native-simple-events": "^1.0.1",\n     "react-native-swiper": "^1.4.3",\n     "react-native-toggle": "^1.0.3",\n\n',
    commit: 'a89b89f675b3ddb08dfd716fe1475a6cd51d4ee2',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Mon, 13 Jun 2016 17:29:39 -0700',
    additions: [
      '    "react": "^15.1.0",',
      '    "react-native": "^0.27.0-rc1",',
      '    "react-native-fs": "^1.4.0",',
    ],
    deletions: ['    "react": "^0.14.7",', '    "react-native": "^0.25.0-rc",'],
  },
  {
    message:
      '\nfurther enhancements to android app; now injects code to ensure that proper VH workaround is activated, added icons, updated title\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 46fa48322..9a4bc3965 100644\n--- a/package.json\n+++ b/package.json\n@@ -7,7 +7,7 @@\n   },\n   "dependencies": {\n     "react": "^0.14.7",\n-    "react-native": "^0.23.1",\n+    "react-native": "^0.25.0-rc",\n     "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n     "react-native-simple-events": "^1.0.1",\n\n',
    commit: 'd18cd3236dd3a2ea4e55570b5eda2a2966442a0f',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Thu, 21 Apr 2016 17:15:32 -0700',
    additions: ['    "react-native": "^0.25.0-rc",'],
    deletions: ['    "react-native": "^0.23.1",'],
  },
  {
    message: '\nimplemented initial working android app\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex e85a5ec02..46fa48322 100644\n--- a/package.json\n+++ b/package.json\n@@ -7,7 +7,8 @@\n   },\n   "dependencies": {\n     "react": "^0.14.7",\n-    "react-native": "^0.22.2",\n+    "react-native": "^0.23.1",\n+    "react-native-cookiemanager": "0.0.1",\n     "react-native-cookies": "0.0.3",\n     "react-native-simple-events": "^1.0.1",\n     "react-native-swiper": "^1.4.3",\n\n',
    commit: '80c7918e9654899e1ef51721707cf345de87e4ce',
    authorName: 'Michael',
    authorEmail: 'michael@example.com',
    date: 'Tue, 19 Apr 2016 17:11:54 -0700',
    additions: [
      '    "react-native": "^0.23.1",',
      '    "react-native-cookiemanager": "0.0.1",',
    ],
    deletions: ['    "react-native": "^0.22.2",'],
  },
  {
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
  },
  {
    message: '\nWIP for hybrid app\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex 8f119b93e..6ca32cc25 100644\n--- a/package.json\n+++ b/package.json\n@@ -6,7 +6,8 @@\n     "start": "node node_modules/react-native/local-cli/cli.js start"\n   },\n   "dependencies": {\n-    "react-native": "^0.19.0",\n+    "react": "^0.14.7",\n+    "react-native": "^0.22.2",\n     "react-native-cookies": "0.0.3",\n     "react-native-simple-events": "^1.0.1",\n     "react-native-toggle": "^1.0.3"\n\n',
    commit: '94e764bbac2972c69a8992a8c165b813b43cca41',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Wed, 23 Mar 2016 16:57:47 -0700',
    additions: ['    "react": "^0.14.7",', '    "react-native": "^0.22.2",'],
    deletions: ['    "react-native": "^0.19.0",'],
  },
  {
    message:
      '\nFinishing touch on login in screen, recover password flow, rememeber me. Requires a minor server side change to support seemless sign on with the wrapped webview\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nindex c3593a74f..8f119b93e 100644\n--- a/package.json\n+++ b/package.json\n@@ -8,6 +8,7 @@\n   "dependencies": {\n     "react-native": "^0.19.0",\n     "react-native-cookies": "0.0.3",\n-    "react-native-simple-events": "^1.0.1"\n+    "react-native-simple-events": "^1.0.1",\n+    "react-native-toggle": "^1.0.3"\n   }\n }\n\n',
    commit: 'a13110f30d4f5a4cbdf132051bc3746b119c3535',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Thu, 4 Feb 2016 11:25:50 -0800',
    additions: [
      '    "react-native-simple-events": "^1.0.1",',
      '    "react-native-toggle": "^1.0.3"',
    ],
    deletions: ['    "react-native-simple-events": "^1.0.1"'],
  },
  {
    message: '\nIOS Wrapper initial commit\n\n',
    diff:
      '\ndiff --git a/package.json b/package.json\nnew file mode 100644\nindex 000000000..c3593a74f\n--- /dev/null\n+++ b/package.json\n@@ -0,0 +1,13 @@\n+{\n+  "name": "IOSReact",\n+  "version": "0.0.1",\n+  "private": true,\n+  "scripts": {\n+    "start": "node node_modules/react-native/local-cli/cli.js start"\n+  },\n+  "dependencies": {\n+    "react-native": "^0.19.0",\n+    "react-native-cookies": "0.0.3",\n+    "react-native-simple-events": "^1.0.1"\n+  }\n+}',
    commit: 'ddbd87e7e7acee7f07ca221a87b14f3f7b66a18b',
    authorName: 'Michael Doe',
    authorEmail: 'michael@example.com',
    date: 'Tue, 2 Feb 2016 18:23:10 -0800',
    additions: [
      '{',
      '  "name": "IOSReact",',
      '  "version": "0.0.1",',
      '  "private": true,',
      '  "scripts": {',
      '    "start": "node node_modules/react-native/local-cli/cli.js start"',
      '  },',
      '  "dependencies": {',
      '    "react-native": "^0.19.0",',
      '    "react-native-cookies": "0.0.3",',
      '    "react-native-simple-events": "^1.0.1"',
      '  }',
      '}',
    ],
    deletions: [],
  },
]

function buildParsedDiff(overrides = {}) {
  return {
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
    ...overrides,
  }
}

const noChangeParsedDiff = {
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

const changedParedDiff = {
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

module.exports = {
  packageJSONDiffLogs,
  parsedPackageJSONDiffs,
  buildParsedDiff,
  noChangeParsedDiff,
  changedParedDiff,
}
