/*
  Warnings:

  - You are about to drop the column `typeId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lecturer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToLecturer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_typeId_fkey";

-- DropForeignKey
ALTER TABLE "_EventToLecturer" DROP CONSTRAINT "_EventToLecturer_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToLecturer" DROP CONSTRAINT "_EventToLecturer_B_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "typeId",
ADD COLUMN     "lecturers" TEXT[],
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "EventType";

-- DropTable
DROP TABLE "Lecturer";

-- DropTable
DROP TABLE "_EventToLecturer";
