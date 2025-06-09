import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { plainToInstance } from "class-transformer";

import { PrismaService } from "src/prisma/prisma.service";

import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { EventEntity } from "./entities/event.entity";

@Injectable()
export class EventsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createEventDto: CreateEventDto) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.create({
				data: createEventDto,
			})
		);
	}

	async findAll() {
		const events = await this.prisma.event.findMany({});

		return events.map(event => plainToInstance(EventEntity, event));
	}

	async findAllFiltered(filter: Prisma.EventWhereInput) {
		const events = await this.prisma.event.findMany({
			where: filter,
		});

		return events.map(event => plainToInstance(EventEntity, event));
	}

	async findOne(id: string) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.findUniqueOrThrow({
				where: { id },
			})
		);
	}

	async update(id: string, updateEventDto: UpdateEventDto) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.update({
				where: { id },
				data: updateEventDto,
			})
		);
	}

	async remove(id: string) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.delete({
				where: { id },
			})
		);
	}
}
