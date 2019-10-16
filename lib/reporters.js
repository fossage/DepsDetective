const Table = require('cli-table3')
const chalk = require('chalk')

function cliTableReporter(dep, changes) {
  const rows = []
  const headings = ['Date', 'Version', 'Commit', 'Author']
  const colWidths = headings.map(heading => heading.length + 2)

  changes.forEach(({ date, version, commit, authorEmail }) => {
    const d = date.match(/^\w+,\s\d+\s\w+\s\d{4}/)[0]
    const row = [d, version, commit, authorEmail]
    row.forEach((rowData, i) => {
      if (rowData.length + 2 > colWidths[i]) colWidths[i] = rowData.length + 2
    })

    rows.push(row)
  })

  const table = new Table({
    head: headings.map(heading => chalk.green(heading)),
    colWidths,
  })

  rows.forEach(row => table.push(row))

  const tableWidth = colWidths.reduce((out, next) => out + next, 0)
  const headingBarWidth = Math.round(tableWidth / 2 - (dep.length + 2) / 2)
  const headingBar = new Array(headingBarWidth).fill('=').join('')
  const heading = `\n${headingBar}  ${dep}  ${headingBar}`

  console.log(heading)
  console.log(table.toString())
}

module.exports = { cliTableReporter }
