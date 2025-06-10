import { ApiPropertyOptional } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional } from "class-validator";

export class EventFindManyDto implements Prisma.EventWhereInput {
	/**
	 * Filter by event name
	 * @example { contains: "Dev Bites" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event name",
		example: { contains: "Dev Bites" },
	})
	@IsOptional()
	name?: string | Prisma.StringFilter<"Event">;

	/**
	 * Filter by event city
	 * @example { contains: "Sofia" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event city",
		example: { contains: "Sofia" },
	})
	@IsOptional()
	city?: string | Prisma.StringFilter<"Event">;

	/**
	 * Filter by event date
	 * @example { lt: "2023-10-01T10:00:00Z" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event date",
		example: { lte: "2023-10-01T10:00:00Z" },
	})
	@IsOptional()
	date?: string | Prisma.DateTimeFilter<"Event"> | Date;

	/**
	 * Filter by event type
	 * @example { contains: "Conference" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event type",
		example: { contains: "Conference" },
	})
	@IsOptional()
	type?: string | Prisma.StringFilter<"Event">;

	/**
	 * Filter by event lecturers
	 * @example { has: "Pesho" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event lecturers",
		example: { has: "Pesho" },
	})
	@IsOptional()
	lecturers?: Prisma.StringNullableListFilter<"Event">;

	/**
	 * Allow filtering by multiple conditions
	 * @example { AND: [{ name: { contains: "Burgas" } }, { name: { contains: "Sofia" } }] }
	 */
	@ApiPropertyOptional({
		description: "Allow filtering by multiple conditions",
		example: [
			{ name: { contains: "Burgas" } },
			{ name: { contains: "Sofia" } },
		],
	})
	@IsOptional()
	AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];

	/**
	 * Allow filtering by multiple conditions with OR
	 * @example { OR: [{ name: { contains: "Burgas" } }, { name: { contains: "Sofia" } }] }
	 */
	@ApiPropertyOptional({
		description: "Allow filtering by multiple conditions with OR",
		example: [
			{ name: { contains: "Burgas" } },
			{ name: { contains: "Sofia" } },
		],
	})
	@IsOptional()
	OR?: Prisma.EventWhereInput[];

	/**
	 * Allow filtering by multiple conditions with NOT
	 * @example { NOT: [{ name: { contains: "Burgas" } }, { name: { contains: "Sofia" } }] }
	 */
	@ApiPropertyOptional({
		description: "Allow filtering by multiple conditions with NOT",
		example: [
			{ name: { contains: "Burgas" } },
			{ name: { contains: "Sofia" } },
		],
	})
	@IsOptional()
	NOT?: Prisma.EventWhereInput[];
}
