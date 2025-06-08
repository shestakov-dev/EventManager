import { ApiSchema, PartialType } from "@nestjs/swagger";

import { CreateEventDto } from "./create-event.dto";

@ApiSchema({
	description: "The data required to update an event",
})
export class UpdateEventDto extends PartialType(CreateEventDto) {}
