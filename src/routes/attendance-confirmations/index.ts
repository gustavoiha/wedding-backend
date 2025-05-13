import type { FastifyInstance } from 'fastify'

import createAttendanceConfirmation from './create'

export default async (app: FastifyInstance) => {
  app.post<{
    Body: {
      email: string,
      name: string,
      guests: number
    }
  }>('/', async (request, reply) => {
    try {
      await createAttendanceConfirmation(request.body)

      reply.code(201).send()
    } catch (error) {
      reply.code(500).send({
        error: "An error has ocurred."
      })
    }
  })
}
