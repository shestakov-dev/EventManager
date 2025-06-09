import type { EventEntity, EventFindManyDto } from "@/api";
import { createContext } from "react";

export const EventsContext = createContext<{
	events: EventEntity[];
	setEvents: React.Dispatch<React.SetStateAction<EventEntity[]>>;
	filter: EventFindManyDto;
	setFilter: React.Dispatch<React.SetStateAction<EventFindManyDto>>;
}>({
	events: [],
	setEvents: () => {},
	filter: {},
	setFilter: () => {},
});
