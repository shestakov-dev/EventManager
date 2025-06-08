import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { plainToInstance } from "class-transformer";

import { EventTypesService } from "src/event-types/event-types.service";
import { LecturersService } from "src/lecturers/lecturers.service";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { EventEntity } from "./entities/event.entity";

@Injectable()
export class EventsService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly eventTypesService: EventTypesService,
		private readonly lecturersService: LecturersService
	) {}

	async create(createEventDto: CreateEventDto) {
		// ensure the event type exists (this will throw an error if it doesn't)
		await this.eventTypesService.findOne(createEventDto.typeId);

		// ensure the lecturers exist (this will throw an error if any don't)
		await Promise.all(
			createEventDto.lecturerIds.map(lecturerId =>
				this.lecturersService.findOne(lecturerId)
			)
		);

		return plainToInstance(
			EventEntity,
			await this.prisma.event.create({
				data: {
					...{ ...createEventDto, lecturerIds: undefined },
					lecturers: {
						connect: createEventDto.lecturerIds.map(id => ({ id })),
					},
				},
				include: {
					type: true,
					lecturers: true,
				},
			})
		);
	}

	async findAll() {
		const events = await this.prisma.event.findMany({
			include: {
				type: true,
				lecturers: true,
			},
		});

		return events.map(event => plainToInstance(EventEntity, event));
	}

	async findAllFiltered(filter: Prisma.EventWhereInput) {
		const events = await this.prisma.event.findMany({
			where: filter,
			include: {
				type: true,
				lecturers: true,
			},
		});

		return events.map(event => plainToInstance(EventEntity, event));
	}

	async findOne(id: string) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.findUniqueOrThrow({
				where: { id },
				include: {
					type: true,
					lecturers: true,
				},
			})
		);
	}

	async update(id: string, updateEventDto: UpdateEventDto) {
		// ensure the event type exists (this will throw an error if it doesn't)
		if (updateEventDto.typeId) {
			await this.eventTypesService.findOne(updateEventDto.typeId);
		}

		// ensure the lecturers exist (this will throw an error if any don't)
		if (updateEventDto.lecturerIds) {
			await Promise.all(
				updateEventDto.lecturerIds.map(lecturerId =>
					this.lecturersService.findOne(lecturerId)
				)
			);
		}

		return plainToInstance(
			EventEntity,
			await this.prisma.event.update({
				where: { id },
				data: {
					...{ ...updateEventDto, lecturerIds: undefined },
					...(updateEventDto.lecturerIds && {
						lecturers: {
							set: updateEventDto.lecturerIds.map(id => ({
								id,
							})),
						},
					}),
				},
				include: {
					type: true,
					lecturers: true,
				},
			})
		);
	}

	async remove(id: string) {
		return plainToInstance(
			EventEntity,
			await this.prisma.event.delete({
				where: { id },
				include: {
					type: true,
					lecturers: true,
				},
			})
		);
	}
}
