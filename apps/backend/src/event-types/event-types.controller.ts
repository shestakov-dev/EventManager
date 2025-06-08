import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
} from "@nestjs/common";

import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "../decorators";
import { EventTypeEntity } from "./dtos/entities/event-type.entity";
import { CreateEventTypeDto } from "./dtos/requests/create-event-type.dto";
import { UpdateEventTypeDto } from "./dtos/requests/update-event-type.dto";
import { EventTypesService } from "./event-types.service";

@Controller("event-types")
export class EventTypesController {
	constructor(private readonly eventTypesService: EventTypesService) {}

	/**
	 * Create a new event type
	 */
	@Post()
	@ApiPost({
		type: EventTypeEntity,
		errorResponses: [HttpStatus.BAD_REQUEST],
	})
	async create(@Body() createEventTypeDto: CreateEventTypeDto) {
		return this.eventTypesService.create(createEventTypeDto);
	}

	/**
	 * Get all event types
	 */
	@Get()
	@ApiGet({
		type: EventTypeEntity,
		errorResponses: [],
	})
	async findAll() {
		return this.eventTypesService.findAll();
	}

	/**
	 * Get an event type by ID
	 */
	@Get(":id")
	@ApiGet({
		type: EventTypeEntity,
	})
	async findOne(@Param("id", ParseUUIDPipe) id: string) {
		return this.eventTypesService.findOne(id);
	}

	/**
	 * Update an event type by ID
	 */
	@Patch(":id")
	@ApiPatch({
		type: EventTypeEntity,
		errorResponses: [HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND],
	})
	async update(
		@Param("id", ParseUUIDPipe) id: string,
		@Body() updateEventTypeDto: UpdateEventTypeDto
	) {
		return this.eventTypesService.update(id, updateEventTypeDto);
	}

	/**
	 * Delete an event type by ID
	 */
	@Delete(":id")
	@ApiDelete({
		type: EventTypeEntity,
	})
	async remove(@Param("id", ParseUUIDPipe) id: string) {
		return this.eventTypesService.remove(id);
	}
}
