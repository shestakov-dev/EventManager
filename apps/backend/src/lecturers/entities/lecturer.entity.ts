import { ApiSchema } from "@nestjs/swagger";
import { Lecturer } from "@prisma/client";

@ApiSchema({
	description: "A lecturer object",
})
export class LecturerEntity implements Lecturer {
	/**
	 * The unique identifier for the lecturer.
	 * @example "123e4567-e89b-12d3-a456-426614174000"
	 */
	id: string;

	/**
	 * The name of the lecturer.
	 * @example "John Doe"
	 */
	name: string;

	/**
	 * The email address of the lecturer.
	 * @example "johndoe@example.com"
	 */
	email: string;

	/**
	 * The phone number of the lecturer.
	 * @example "+14155552671"
	 * @default null
	 */
	phone: string | null = null;
}
