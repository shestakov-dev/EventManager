import { Module } from "@nestjs/common";

import { EventTypesModule } from "./event-types/event-types.module";
import { EventsModule } from "./events/events.module";
import { LecturersModule } from "./lecturers/lecturers.module";

@Module({
	imports: [EventTypesModule, LecturersModule, EventsModule],
})
export class AppModule {}
