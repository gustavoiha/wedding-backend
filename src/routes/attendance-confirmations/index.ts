import type { FastifyInstance } from 'fastify'

import createAttendanceConfirmation from './create'

export default async (app: FastifyInstance) => {
  app.post<{
    Body: {
      email: string,
      name: string,
      guests: number,
      phone: string
    }
  }>('/', async (request, reply) => {
    const { email, name, guests, phone } = request.body

    if (!email || !name || !phone || guests < 0 || guests === undefined || guests === null) {
      return reply.code(400).send({
        error: "Invalid input: 'email', 'name', 'phone' are required, and 'guests' must be 0 or greater."
      })
    }

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
