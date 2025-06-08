import { ApiSchema } from "@nestjs/swagger";
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsPhoneNumber,
	IsString,
} from "class-validator";

@ApiSchema({
	description: "The data required to create a new lecturer",
})
export class CreateLecturerDto {
	/**
	 * The name of the lecturer
	 * @example "John Doe"
	 */
	@IsString()
	@IsNotEmpty()
	name: string;

	/**
	 * The email address of the lecturer
	 * @example "johndoe@example.com"
	 */
	@IsEmail()
	email: string;

	/**
	 * The phone number of the lecturer
	 * @example "+14155552671"
	 */
	@IsOptional()
	@IsPhoneNumber()
	phone?: string;
}
