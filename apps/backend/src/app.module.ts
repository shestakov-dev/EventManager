import { Module } from "@nestjs/common";

import { EventTypesModule } from "./event-types/event-types.module";
import { LecturersModule } from "./lecturers/lecturers.module";

@Module({
	imports: [EventTypesModule, LecturersModule],
})
export class AppModule {}
