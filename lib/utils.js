/*=========================================
             IMPORTS / SET UP
==========================================*/
const { spawn } = require('child_process')

/*=========================================
                   MAIN
==========================================*/
function execute(cmdString, options = {}) {
  const cmdSections = cmdString.split(' ')
  const cmd = spawn(
    cmdSections[0],
    cmdSections.slice(1),
    Object.assign({ env: process.env }, options)
  )

  return new Promise((resolve, reject) => {
    let stdOut = ''
    let stdErr = ''

    cmd.stdout.on('data', data => {
      const dataString = data.toString()
      stdOut += dataString + ' '
    })

    cmd.stderr.on('data', data => {
      const dataString = data.toString()
      stdErr += dataString + ' '
    })

    cmd.on('exit', code => {
      !code ? resolve(stdOut.trim()) : reject(stdErr.trim())
    })
  })
}

module.exports = { execute }
