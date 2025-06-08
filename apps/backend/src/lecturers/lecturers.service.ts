import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";

import { PrismaService } from "src/prisma/prisma.service";

import { CreateLecturerDto } from "./dto/create-lecturer.dto";
import { UpdateLecturerDto } from "./dto/update-lecturer.dto";
import { LecturerEntity } from "./entities/lecturer.entity";

@Injectable()
export class LecturersService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createLecturerDto: CreateLecturerDto) {
		return plainToInstance(
			LecturerEntity,
			await this.prisma.lecturer.create({
				data: createLecturerDto,
			})
		);
	}

	async findAll() {
		const lecturers = await this.prisma.lecturer.findMany();

		return lecturers.map(lecturer =>
			plainToInstance(LecturerEntity, lecturer)
		);
	}

	async findOne(id: string) {
		return plainToInstance(
			LecturerEntity,
			await this.prisma.lecturer.findUniqueOrThrow({
				where: { id },
			})
		);
	}

	async update(id: string, updateLecturerDto: UpdateLecturerDto) {
		return plainToInstance(
			LecturerEntity,
			await this.prisma.lecturer.update({
				where: { id },
				data: updateLecturerDto,
			})
		);
	}

	async remove(id: string) {
		return plainToInstance(
			LecturerEntity,
			await this.prisma.lecturer.delete({
				where: { id },
			})
		);
	}
}
