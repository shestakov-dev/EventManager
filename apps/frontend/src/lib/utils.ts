import type { EventEntity } from "@/api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// This function can take in client-side filters
// and sort the events based on the provided criteria
export function sortEvents(
	events: EventEntity[],
	sortBy: "name" | "date" | "type" | "city",
	sortOrder: "ascending" | "descending" = "ascending"
): EventEntity[] {
	// Copy the events array to avoid mutating the original array
	// and sort it based on the provided criteria
	// "Dev Bites" should always come first, so we handle that separately
	const sorted = [...events].sort((event1, event2) => {
		// "Dev Bites" should always come first
		if (event1.name.toLowerCase() === "dev bites") {
			return -1;
		} else if (event2.name.toLowerCase() === "dev bites") {
			return 1;
		}

		let event1Value;
		let event2Value;

		switch (sortBy) {
			case "date":
				event1Value = new Date(event1.date).getTime();
				event2Value = new Date(event2.date).getTime();
				break;

			case "type":
			case "name":
			case "city":
				event1Value = event1[sortBy].toLowerCase();
				event2Value = event2[sortBy].toLowerCase();
				break;

			// This case should never happen, but we handle it just in case
			default:
				throw new Error(`Unknown sortBy value: ${sortBy}`);
		}

		if (event1Value < event2Value) {
			return sortOrder === "ascending" ? -1 : 1;
		} else if (event1Value > event2Value) {
			return sortOrder === "ascending" ? 1 : -1;
		}

		return 0;
	});

	return sorted;
}
