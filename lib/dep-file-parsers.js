const semver = require('semver')

function parsePackageJSONChange({ additions, deletions, ...rest }, depInput) {
  const addChanges = additions
    .map(addition => _parseDependencyChange(addition, depInput))
    .filter(Boolean)

  const deleteChanges = deletions
    .map(del => _parseDependencyChange(del, depInput))
    .filter(Boolean)

  if (!addChanges.length) return null
  if (!deleteChanges.length) return { ...addChanges[0], ...rest }

  const change = addChanges.find(({ name, version }) =>
    deleteChanges.some(
      delChange => delChange.name === name && delChange.version !== version
    )
  )

  return !!change ? { ...change, ...rest } : null
}

function _parseDependencyChange(line, depInput) {
  const depNameRE = /^\s*"[^\._\s"]+"\s*(?=:)/
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
  if (name !== depInput) return
  if (!semver.valid(version) && !semver.validRange(version)) return
  return { name, version }
}

module.exports = { parsePackageJSONChange }
