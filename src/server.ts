import buildApp from './app'

const app = buildApp({
  logger: true
})

const DEFAULT_PORT = 3000

const startServer = async () => {
  try {
    const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : DEFAULT_PORT
    const host = '0.0.0.0'

    await app.listen({
      port,
      host
    })

    app.log.info(`Server listening on ${app.server.address()}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

startServer()
