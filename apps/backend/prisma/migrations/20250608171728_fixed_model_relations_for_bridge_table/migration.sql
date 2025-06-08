/*
  Warnings:

  - You are about to drop the `_EventToLecturer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToLecturer" DROP CONSTRAINT "_EventToLecturer_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToLecturer" DROP CONSTRAINT "_EventToLecturer_B_fkey";

-- DropTable
DROP TABLE "_EventToLecturer";
