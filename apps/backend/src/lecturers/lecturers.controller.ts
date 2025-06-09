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

import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "src/decorators";

import { CreateLecturerDto } from "./dto/create-lecturer.dto";
import { UpdateLecturerDto } from "./dto/update-lecturer.dto";
import { LecturerEntity } from "./entities/lecturer.entity";
import { LecturersService } from "./lecturers.service";

@Controller("lecturers")
export class LecturersController {
	constructor(private readonly lecturersService: LecturersService) {}

	/**
	 * Create a new lecturer
	 */
	@Post()
	@ApiPost({
		type: LecturerEntity,
		errorResponses: [HttpStatus.CONFLICT, HttpStatus.BAD_REQUEST],
	})
	create(@Body() createLecturerDto: CreateLecturerDto) {
		return this.lecturersService.create(createLecturerDto);
	}

	/**
	 * Get all lecturers
	 */
	@Get()
	@ApiGet({
		type: [LecturerEntity],
		errorResponses: [],
	})
	findAll() {
		return this.lecturersService.findAll();
	}

	/**
	 * Get a lecturer by ID
	 */
	@Get(":id")
	@ApiGet({
		type: LecturerEntity,
	})
	findOne(@Param("id", ParseUUIDPipe) id: string) {
		return this.lecturersService.findOne(id);
	}

	/**
	 * Update a lecturer by ID
	 */
	@Patch(":id")
	@ApiPatch({
		type: LecturerEntity,
	})
	update(
		@Param("id", ParseUUIDPipe) id: string,
		@Body() updateLecturerDto: UpdateLecturerDto
	) {
		return this.lecturersService.update(id, updateLecturerDto);
	}

	/**
	 * Delete a lecturer by ID
	 */
	@Delete(":id")
	@ApiDelete({
		type: LecturerEntity,
	})
	remove(@Param("id", ParseUUIDPipe) id: string) {
		return this.lecturersService.remove(id);
	}
}
