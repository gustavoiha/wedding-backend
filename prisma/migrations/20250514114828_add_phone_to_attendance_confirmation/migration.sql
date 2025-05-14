/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `AttendanceConfirmation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `AttendanceConfirmation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AttendanceConfirmation" ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceConfirmation_phone_key" ON "AttendanceConfirmation"("phone");
