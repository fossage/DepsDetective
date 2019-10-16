const path = require('path')
const program = require('commander')

const { fetchAndParseGitLogs } = require('./lib/git-parsers')
const { parsePackageJSONChange } = require('./lib/dep-file-parsers')
const { cliTableReporter } = require('./lib/reporters')

const changeDetectors = {
  'package.json': parsePackageJSONChange,
}

async function main() {
  program
    .option(
      '-d, --dep [name]',
      'The name of the dependency you want to investigate'
    )
    .option(
      '-p, --path [path]',
      'The path to the dependency file you want to investigate'
    )
    .parse(process.argv)

  const depFile = path.basename(program.path)
  const depFileParser = changeDetectors[depFile]
  const logs = await fetchAndParseGitLogs(program.path)
  const changes = logs
    .map(log => depFileParser(log, program.dep))
    .filter(Boolean)

  cliTableReporter(program.dep, changes)
}

main()
