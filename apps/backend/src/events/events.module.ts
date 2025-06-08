import { Module } from "@nestjs/common";

import { EventTypesModule } from "src/event-types/event-types.module";
import { LecturersModule } from "src/lecturers/lecturers.module";
import { PrismaModule } from "src/prisma/prisma.module";

import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";

@Module({
	controllers: [EventsController],
	providers: [EventsService],
	imports: [PrismaModule, EventTypesModule, LecturersModule],
})
export class EventsModule {}
