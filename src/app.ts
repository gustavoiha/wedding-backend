import fastify from 'fastify'

import attendanceConfirmations from './routes/attendance-confirmations'

export default (options = {}) => {
  const app = fastify(options)

  app.register(attendanceConfirmations, {
    prefix: '/attendance-confirmation'
  })

  return app
}
