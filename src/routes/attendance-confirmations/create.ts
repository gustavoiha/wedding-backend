import DatabaseConnect from '@/database'

const db = DatabaseConnect.getInstance()

interface CreateAttendanceConfirmation {
  email: string,
  name: string,
  guests: number,
  phone: string
}

export default async (data: CreateAttendanceConfirmation) => {
  return await db.attendanceConfirmation.create({
    data
  })
}
