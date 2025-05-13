import DatabaseConnect from '@/database'

const db = DatabaseConnect.getInstance()

interface CreateAttendanceConfirmation {
  email: string,
  name: string,
  guests: number
}

export default async (data: CreateAttendanceConfirmation) => {
  return await db.attendanceConfirmation.create({
    data
  })
}
