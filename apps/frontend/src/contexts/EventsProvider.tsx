import { EventsService, type EventEntity, type EventFindManyDto } from "@/api";
import React, { useEffect } from "react";
import { EventsContext } from "./EventsContext";

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [events, setEvents] = React.useState<EventEntity[]>([]);
	const [filter, setFilter] = React.useState<EventFindManyDto>({});

	useEffect(() => {
		EventsService.eventsControllerFindAllFiltered(filter)
			.then(data => setEvents(data))
			.catch(error => console.log(error));
	}, [filter]);

	return (
		<EventsContext.Provider
			value={{
				events,
				setEvents,
				filter,
				setFilter,
			}}>
			{children}
		</EventsContext.Provider>
	);
};
