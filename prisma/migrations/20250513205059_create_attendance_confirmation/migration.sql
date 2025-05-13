-- CreateTable
CREATE TABLE "AttendanceConfirmation" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,

    CONSTRAINT "AttendanceConfirmation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceConfirmation_email_key" ON "AttendanceConfirmation"("email");
