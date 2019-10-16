/*============================================================
                       IMPORTS / SETUP
============================================================*/
const semver = require('semver')

/*============================================================
                          PACKAGE.JSON 
============================================================*/
function parsePackageJSONChange(parsedDiff, depName) {
  return _findChanged(parsedDiff, depName, _doPackageJSONParse)
}

function _doPackageJSONParse(line, depName) {
  const depNameRE = new RegExp(`^\\s*"${depName}"\\s*(?=:)`)
  const splitRE = new RegExp(`(?<=${depNameRE.source})\s*:\s*`)

  const sections = line.split(splitRE).map((section, i) => {
    const cleanedSection = section.trim()
    if (cleanedSection[0] === '"') {
      const lastIndex = cleanedSection.length - 1
      if (cleanedSection[lastIndex] === '"') {
        return cleanedSection.slice(1, cleanedSection.length - 1)
      } else if (cleanedSection[lastIndex] === ',' && i) {
        return cleanedSection.slice(1, cleanedSection.length - 2)
      }
    }

    return section
  })

  const [name, version] = sections
  if (!name || !version) return
  if (!semver.valid(version) && !semver.validRange(version)) return
  return version
}

/*============================================================
                            PODFILE
============================================================*/
function parsePodfileChange(parsedDiff, depName) {
  return _findChanged(parsedDiff, depName, _doPodfileParse)
}

function _doPodfileParse(line, depName) {
  const depNameRE = new RegExp('(?<=^\\s*pod\\s+["\'])' + depName + '(?=["\'])')

  const symbolRE = /(?<=["'])(?:(?<!~)[=<>](?!=)|(?:>=)?|(?:<=)?|(?:~>)?\s)?/
  const versionRE = /[0-9]+(?:\.[0-9a-zA-Z]+)*(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?/ //taken from https://github.com/rubygems/rubygems/blob/v2.7.10/lib/rubygems/version.rb#L157
  const versionWithSymbolRE = new RegExp(symbolRE.source + versionRE.source)
  if (!depNameRE.test(line)) return
  const versions = line.match(versionWithSymbolRE)
  if (!versions) return
  const version = versions.join(', ')
  return version
}

/*============================================================
                            HELPERS
============================================================*/
function _findChanged({ additions, deletions, ...rest }, depName, parser) {
  const addChanges = additions
    .map(addition => parser(addition, depName))
    .filter(Boolean)

  const deleteChanges = deletions
    .map(del => parser(del, depName))
    .filter(Boolean)

  if (!addChanges.length) return null
  if (!deleteChanges.length) return { version: addChanges[0], ...rest }

  const change = addChanges.find(addVersion =>
    deleteChanges.some(delVersion => delVersion !== addVersion)
  )

  return !!change ? { version: change, name: depName, ...rest } : null
}

/*============================================================
                            EXPORTS
============================================================*/
module.exports = { parsePackageJSONChange, parsePodfileChange }
