import { ApiSchema } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
	ArrayMinSize,
	IsDate,
	IsNotEmpty,
	IsString,
	IsUUID,
} from "class-validator";

@ApiSchema({
	description: "The data required to create a new event",
})
export class CreateEventDto {
	/**
	 * The name of the event
	 * @example "Dev Bites"
	 */
	@IsString()
	@IsNotEmpty()
	name: string;

	/**
	 * The city where the event is held
	 * @example "Sofia"
	 */
	@IsString()
	@IsNotEmpty()
	city: string;

	/**
	 * The date and time when the event starts
	 * @example "2023-10-01T10:00:00Z"
	 */
	@IsNotEmpty()
	@IsDate()
	@Type(() => Date)
	date: Date;

	/**
	 * The unique identifier for the event type of this event
	 * @example "123e4567-e89b-12d3-a456-426614174001"
	 */
	@IsString()
	@IsUUID()
	typeId: string;

	/**
	 * The unique identifiers for the lecturers of this event (at least one is required)
	 * @example ["123e4567-e89b-12d3-a456-426614174002", "123e4567-e89b-12d3-a456-426614174003"]
	 */
	@ArrayMinSize(1)
	@IsString({ each: true })
	@IsUUID(undefined, { each: true })
	lecturerIds: string[];
}
