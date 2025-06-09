import { ApiSchema } from "@nestjs/swagger";
import { Event } from "@prisma/client";

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
	 * The event type of the event
	 */
	type: string;

	/**
	 * The lecturers of this event
	 */
	lecturers: string[];
}
