import type { EventEntity } from "@/api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FilterFunction = (event: EventEntity) => boolean;

export function isPlovdivSeptember(event: EventEntity) {
	const date = new Date(event.date);

	// Months are 0-indexed in js so index 8 is September
	return event.city.toLowerCase() === "пловдив" || date.getMonth() === 8;
}

export function isStaraZagoraOrVarnaSpring(event: EventEntity) {
	const city = event.city.toLowerCase();
	const month = new Date(event.date).getMonth();

	return (
		(city === "стара загора" || city === "варна") &&
		// March, April or May
		month >= 2 &&
		month <= 4
	);
}

// This function can take in client-side filters
// and sort the events based on the provided criteria
export function filterAndSortEvents(
	events: EventEntity[],
	filters: FilterFunction[] = [],
	sortBy: "name" | "date" | "type" | "city"
): EventEntity[] {
	// Apply filters to the events
	const filtered = events.filter(event =>
		filters.every(filter => filter(event))
	);

	// Copy the filtered array to avoid mutating the original array
	// and sort it based on the provided criteria
	// "Dev Bites" should always come first, so we handle that separately
	const sorted = [...filtered].sort((event1, event2) => {
		// "Dev Bites" should always come first
		if (event1.name === "Dev Bites") {
			return -1;
		} else if (event2.name === "Dev Bites") {
			return 1;
		}

		let event1Value;
		let event2Value;

		switch (sortBy) {
			case "name":
				event1Value = event1.name.toLowerCase();
				event2Value = event2.name.toLowerCase();
				break;

			case "date":
				event1Value = new Date(event1.date).getTime();
				event2Value = new Date(event2.date).getTime();
				break;

			case "type":
				event1Value = event1.type.name.toLowerCase();
				event2Value = event2.type.name.toLowerCase();
				break;

			case "city":
				event1Value = event1.city.toLowerCase();
				event2Value = event2.city.toLowerCase();
				break;

			// This case should never happen, but we handle it just in case
			default:
				throw new Error(`Unknown sortBy value: ${sortBy}`);
		}

		if (event1Value < event2Value) {
			return -1;
		} else if (event1Value > event2Value) {
			return 1;
		}

		return 0;
	});

	return sorted;
}
