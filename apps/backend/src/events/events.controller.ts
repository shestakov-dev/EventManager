import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query,
} from "@nestjs/common";

import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "src/decorators";

import { CreateEventDto } from "./dto/create-event.dto";
import { EventFindManyDto } from "./dto/find-many.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { EventEntity } from "./entities/event.entity";
import { EventsService } from "./events.service";

@Controller("events")
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	/**
	 * Create a new event
	 */
	@Post()
	@ApiPost({
		type: EventEntity,
		errorResponses: [HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND],
	})
	create(@Body() createEventDto: CreateEventDto) {
		return this.eventsService.create(createEventDto);
	}

	/**
	 * Get all events
	 */
	@Get()
	@ApiGet({
		type: EventEntity,
		errorResponses: [],
	})
	findAll() {
		return this.eventsService.findAll();
	}

	/**
	 * Get all events with a specific filter
	 */
	@Post("filtered")
	@ApiPost({
		type: EventEntity,
		errorResponses: [],
	})
	findAllFiltered(@Body() filter: EventFindManyDto) {
		return this.eventsService.findAllFiltered(filter);
	}

	/**
	 * Get an event by ID
	 */
	@Get(":id")
	@ApiGet({
		type: EventEntity,
	})
	findOne(@Param("id") id: string) {
		return this.eventsService.findOne(id);
	}

	/**
	 * Update an event by ID
	 */
	@Patch(":id")
	@ApiPatch({
		type: EventEntity,
		errorResponses: [HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND],
	})
	update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
		return this.eventsService.update(id, updateEventDto);
	}

	/**
	 * Delete an event by ID
	 */
	@Delete(":id")
	@ApiDelete({
		type: EventEntity,
	})
	remove(@Param("id") id: string) {
		return this.eventsService.remove(id);
	}
}
