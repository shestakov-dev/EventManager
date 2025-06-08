import { Module } from "@nestjs/common";

import { PrismaModule } from "src/prisma/prisma.module";

import { LecturersController } from "./lecturers.controller";
import { LecturersService } from "./lecturers.service";

@Module({
	controllers: [LecturersController],
	providers: [LecturersService],
	imports: [PrismaModule],
	exports: [LecturersService],
})
export class LecturersModule {}
