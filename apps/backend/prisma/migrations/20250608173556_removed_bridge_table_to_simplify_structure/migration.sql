/*
  Warnings:

  - You are about to drop the `EventLecturer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventLecturer" DROP CONSTRAINT "EventLecturer_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventLecturer" DROP CONSTRAINT "EventLecturer_lecturerId_fkey";

-- DropTable
DROP TABLE "EventLecturer";

-- CreateTable
CREATE TABLE "_EventToLecturer" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_EventToLecturer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventToLecturer_B_index" ON "_EventToLecturer"("B");

-- AddForeignKey
ALTER TABLE "_EventToLecturer" ADD CONSTRAINT "_EventToLecturer_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToLecturer" ADD CONSTRAINT "_EventToLecturer_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
