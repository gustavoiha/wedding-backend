import { Prisma, PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const resetDatabase = async (): Promise<void> => {
  const tableNames = Object.values(Prisma.ModelName)

  for (const tableName of tableNames) {
    await db.$queryRawUnsafe(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE`)
  }
}

resetDatabase()
