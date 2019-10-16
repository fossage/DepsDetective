const path = require('path')
const { execute } = require('./utils')

const gitLogSectionDelimeter = `${Math.random()}_DEPS_DETECTIVE_SECTION_DELIMETER`
const gitLogCommitDelimeter = `${Math.random()}_DEPS_DETECTIVE_COMMIT_DELIMETER`
const gitLogFormatString = `${gitLogCommitDelimeter}%n%H%n%an%n%ae%n%aD%n${gitLogSectionDelimeter}%n%B%n${gitLogSectionDelimeter}`

async function fetchGitLogs(pathToDepsFile) {
  try {
    const targetDir = path.dirname(path.resolve(pathToDepsFile))
    const logs = await execute(
      `git --no-pager log -p --pretty=format:${gitLogFormatString} ./${path.basename(
        pathToDepsFile
      )}`,
      { cwd: targetDir }
    )

    return logs
  } catch (e) {
    process.stderr.write(e.message)
    process.exit(1)
  }
}

function parseGitLogs(gitLogs) {
  const out = []
  const logArray = gitLogs.split(gitLogCommitDelimeter)

  for (const log of logArray) {
    if (!log) continue

    const [rawMetaData, message, diff] = log.split(gitLogSectionDelimeter)

    const changedLines = diff
      .split('\n')
      .filter(line => line.match(/^(\+(?!\+{2}\s)|-(?!-{2}\s))/))
      .reduce(
        (out, line) => {
          const key = line[0] === '+' ? 'additions' : 'deletions'
          out[key].push(line.slice(1))
          return out
        },
        { additions: [], deletions: [] }
      )

    out.push({
      message,
      diff,
      ...parseMetaData(rawMetaData),
      ...changedLines,
    })
  }

  return out
}

function parseMetaData(metaData) {
  const [, commit, authorName, authorEmail, date] = metaData.split('\n')

  return {
    commit,
    authorName,
    authorEmail,
    date,
  }
}

async function fetchAndParseGitLogs(path) {
  const logs = await fetchGitLogs(path)
  if (!logs || !logs.length) return null
  return parseGitLogs(logs)
}

module.exports = { fetchAndParseGitLogs }
