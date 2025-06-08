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
	name?: Prisma.StringFilter<"Event">;

	/**
	 * Filter by event city
	 * @example { contains: "Sofia" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event city",
		example: { contains: "Sofia" },
	})
	@IsOptional()
	city?: Prisma.StringFilter<"Event">;

	/**
	 * Filter by event date
	 * @example { lt: "2023-10-01T10:00:00Z" }
	 */
	@ApiPropertyOptional({
		description: "Filter by event date",
		example: { lte: "2023-10-01T10:00:00Z" },
	})
	@IsOptional()
	date?: Prisma.DateTimeFilter<"Event">;

	/**
	 * Filter by event type
	 * @example { name: { contains: "Conference" } }
	 */
	@ApiPropertyOptional({
		description: "Filter by event type",
		example: { name: { contains: "Conference" } },
	})
	@IsOptional()
	type?:
		| (Prisma.Without<
				Prisma.EventTypeScalarRelationFilter,
				Prisma.EventTypeWhereInput
		  > &
				Prisma.EventTypeWhereInput)
		| (Prisma.Without<
				Prisma.EventTypeWhereInput,
				Prisma.EventTypeScalarRelationFilter
		  > &
				Prisma.EventTypeScalarRelationFilter);

	/**
	 * Filter by lecturers associated with the event
	 * @example { some: { name: { contains: "John Doe" } } }
	 */
	@ApiPropertyOptional({
		description: "Filter by lecturers associated with the event",
		example: { some: { name: { contains: "John Doe" } } },
	})
	@IsOptional()
	lecturers?: Prisma.LecturerListRelationFilter;
}
