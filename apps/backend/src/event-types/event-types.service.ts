import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";

import { PrismaService } from "../prisma/prisma.service";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { EventTypeEntity } from "./entities/event-type.entity";

@Injectable()
export class EventTypesService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createEventTypeDto: CreateEventTypeDto) {
		return plainToInstance(
			EventTypeEntity,
			await this.prisma.eventType.create({
				data: createEventTypeDto,
			})
		);
	}

	async findAll() {
		const eventTypes = await this.prisma.eventType.findMany();

		return eventTypes.map(eventType =>
			plainToInstance(EventTypeEntity, eventType)
		);
	}

	async findOne(id: string) {
		return plainToInstance(
			EventTypeEntity,
			await this.prisma.eventType.findUniqueOrThrow({
				where: { id },
			})
		);
	}

	async update(id: string, updateEventTypeDto: UpdateEventTypeDto) {
		return plainToInstance(
			EventTypeEntity,
			await this.prisma.eventType.update({
				where: { id },
				data: updateEventTypeDto,
			})
		);
	}

	async remove(id: string) {
		return plainToInstance(
			EventTypeEntity,
			await this.prisma.eventType.delete({
				where: { id },
			})
		);
	}
}
