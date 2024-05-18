const shell = require('shelljs')
const path = require('path')
const fs = require('fs')

// Load the configuration file
const configPath = path.resolve(__dirname, 'config.json')
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))

// Function to execute a command
function executeCommand(command, relativePath) {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(__dirname, relativePath)
    console.log(`Executing command: ${command} in ${absolutePath}`)

    shell.cd(absolutePath)
    const result = shell.exec(command, { async: true })

    result.stdout.on('data', (data) => {
      console.log(command + relativePath, data)
    })

    result.stderr.on('data', (data) => {
      console.error(command + relativePath, data)
    })

    result.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed: ${command}`))
      } else {
        resolve()
      }
    })
  })
}

// Execute onStart commands
async function onStart() {
  console.log('Running onStart commands...')
  try {
    await Promise.all(
      config.onStart.map((item) => executeCommand(`${item.command} -d`, item.relativePath))
    )
    console.log('onStart commands completed')
  } catch (error) {
    console.error(`Error during onStart: ${error.message}`)
  }
}

// Execute onQuit commands
async function onQuit() {
  console.log('Running onQuit commands...')
  try {
    await Promise.all(config.onQuit.map((item) => executeCommand(item.command, item.relativePath)))
    console.log('onQuit commands completed')
  } catch (error) {
    console.error(`Error during onQuit: ${error.message}`)
  }
}

// Handle process events
process.on('SIGINT', async () => {
  await onQuit()
  process.exit()
})

process.on('SIGTERM', async () => {
  await onQuit()
  process.exit()
})

// Start the application
onStart()

// Keep the process alive
setInterval(() => {}, 1000)
