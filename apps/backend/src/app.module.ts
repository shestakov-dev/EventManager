import { Module } from "@nestjs/common";

import { EventTypesModule } from "./event-types/event-types.module";

@Module({
	imports: [EventTypesModule],
})
export class AppModule {}
