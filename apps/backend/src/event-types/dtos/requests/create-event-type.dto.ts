import { ApiSchema } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@ApiSchema({
	description: "The data required to create a new event type.",
})
export class CreateEventTypeDto {
	/**
	 * The name of the event type.
	 * @example "Conference"
	 */
	@IsString()
	@IsNotEmpty()
	name: string;

	/**
	 * A brief description of the event type.
	 * @example "A large gathering of people for a conference."
	 */
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;
}
