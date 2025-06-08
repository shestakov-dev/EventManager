import { ApiSchema, PartialType } from "@nestjs/swagger";

import { CreateEventTypeDto } from "./create-event-type.dto";

@ApiSchema({
	description: "The data required to update a event type",
})
export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {}
