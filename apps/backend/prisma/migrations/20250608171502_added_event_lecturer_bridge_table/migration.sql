-- CreateTable
CREATE TABLE "EventLecturer" (
    "eventId" UUID NOT NULL,
    "lecturerId" UUID NOT NULL,

    CONSTRAINT "EventLecturer_pkey" PRIMARY KEY ("eventId","lecturerId")
);

-- AddForeignKey
ALTER TABLE "EventLecturer" ADD CONSTRAINT "EventLecturer_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventLecturer" ADD CONSTRAINT "EventLecturer_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "Lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
