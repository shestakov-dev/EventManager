import { ApiSchema } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsDate, IsNotEmpty, IsString } from "class-validator";

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
	@IsDate()
	@IsNotEmpty()
	@Type(() => Date)
	date: Date;

	/**
	 * The type of the event
	 * @example "Conference"
	 */
	@IsString()
	@IsNotEmpty()
	type: string;

	/**
	 * The lecturers of this event
	 * @example ["Pesho", "Gosho"]
	 */
	@ArrayMinSize(1)
	@IsString({ each: true })
	@IsNotEmpty({ each: true })
	lecturers: string[];
}
