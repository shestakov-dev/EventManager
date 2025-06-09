import type {
	CreateEventDto,
	EventEntity,
	EventFindManyDto,
	UpdateEventDto,
} from "@/api";
import { createContext } from "react";

export const EventsContext = createContext<{
	events: EventEntity[];
	setEvents: React.Dispatch<React.SetStateAction<EventEntity[]>>;
	filter: EventFindManyDto;
	setFilter: React.Dispatch<React.SetStateAction<EventFindManyDto>>;
	handleCreate: (newEvent: CreateEventDto) => void;
	handleUpdate: (id: string, updatedEvent: UpdateEventDto) => void;
	handleDelete: (id: string) => void;
}>({
	events: [],
	setEvents: () => {},
	filter: {},
	setFilter: () => {},
	handleCreate: () => {},
	handleUpdate: () => {},
	handleDelete: () => {},
});
