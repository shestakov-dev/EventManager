import { ApiSchema } from "@nestjs/swagger";
import { EventType } from "@prisma/client";

@ApiSchema({
	description: "The data returned for an event type object.",
})
export class EventTypeEntity implements EventType {
	constructor(partial: Partial<EventTypeEntity>) {
		Object.assign(this, partial);
	}

	/**
	 * The unique identifier for the event type.
	 * @example "123e4567-e89b-12d3-a456-426614174000"
	 */
	id: string;

	/**
	 * The name of the event type.
	 * @example "Conference"
	 */
	name: string;

	/**
	 * A brief description of the event type.
	 * @example "A large gathering of people for a conference."
	 * @default null
	 */
	description: string | null = null;
}
