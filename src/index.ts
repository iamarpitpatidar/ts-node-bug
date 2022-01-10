process.on('exit', (code) => {
  client.logger.info(`NodeJS process exited with code ${code}`)
})

process.on('uncaughtException', (err) => {
  client.logger.error(`UNCAUGHT_EXCEPTION: ${err}`)
  client.logger.warn('Uncaught Exception detected, trying to restart...')
  process.exit(1)
})
process.on('unhandledRejection', (reason) => {
  client.logger.error(
    `UNHANDLED_REJECTION: ${
      (reason as Error).stack ? reason : new NoStackError(reason as string)
    }`
  )
})
process.on('warning', client.logger.warn)
