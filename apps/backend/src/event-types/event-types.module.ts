import { Module } from "@nestjs/common";

import { EventTypesController } from "./event-types.controller";
import { EventTypesService } from "./event-types.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
	controllers: [EventTypesController],
	providers: [EventTypesService],
	imports: [PrismaModule],
	exports: [EventTypesService],
})
export class EventTypesModule {}
