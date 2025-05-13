import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  getInstance () {
    return prisma
  }
}
