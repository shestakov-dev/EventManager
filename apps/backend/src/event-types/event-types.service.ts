import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";

import { PrismaService } from "../prisma/prisma.service";
import { EventTypeEntity } from "./dtos/entities/event-type.entity";
import { CreateEventTypeDto } from "./dtos/requests/create-event-type.dto";
import { UpdateEventTypeDto } from "./dtos/requests/update-event-type.dto";

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
