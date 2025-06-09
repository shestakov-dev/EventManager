import type { EventEntity, EventFindManyDto, UpdateEventDto } from "@/api";
import { createContext } from "react";

export const EventsContext = createContext<{
	events: EventEntity[];
	setEvents: React.Dispatch<React.SetStateAction<EventEntity[]>>;
	filter: EventFindManyDto;
	setFilter: React.Dispatch<React.SetStateAction<EventFindManyDto>>;
	handleUpdate: (id: string, updatedEvent: UpdateEventDto) => void;
	handleDelete: (id: string) => void;
}>({
	events: [],
	setEvents: () => {},
	filter: {},
	setFilter: () => {},
	handleUpdate: () => {},
	handleDelete: () => {},
});
