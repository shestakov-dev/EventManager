import { ApiSchema } from "@nestjs/swagger";
import { Event } from "@prisma/client";
import { Exclude, Type } from "class-transformer";

import { EventTypeEntity } from "src/event-types/entities/event-type.entity";
import { LecturerEntity } from "src/lecturers/entities/lecturer.entity";

@ApiSchema({
	description: "An event object",
})
export class EventEntity implements Event {
	/**
	 * The unique identifier for the event
	 * @example "123e4567-e89b-12d3-a456-426614174000"
	 */
	id: string;

	/**
	 * The name of the event
	 * @example "Dev Bites"
	 */
	name: string;

	/**
	 * The city where the event is held
	 * @example "Sofia"
	 */
	city: string;

	/**
	 * The date and time when the event starts
	 * @example "2023-10-01T10:00:00Z"
	 */
	date: Date;

	/**
	 * The unique identifier for the event type of this event
	 * @example "123e4567-e89b-12d3-a456-426614174001"
	 */
	@Exclude()
	typeId: string;

	/**
	 * The event type of the event
	 */
	@Type(() => EventTypeEntity)
	type: EventTypeEntity;

	/**
	 * The lecturers of this event
	 */
	@Type(() => LecturerEntity)
	lecturers: LecturerEntity[];
}
