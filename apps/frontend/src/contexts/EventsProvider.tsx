import {
	EventsService,
	type EventEntity,
	type EventFindManyDto,
	type UpdateEventDto,
} from "@/api";
import React, { useEffect } from "react";
import { EventsContext } from "./EventsContext";
import { toast } from "sonner";

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [events, setEvents] = React.useState<EventEntity[]>([]);
	const [filter, setFilter] = React.useState<EventFindManyDto>({});

	useEffect(() => {
		EventsService.eventsControllerFindAllFiltered(filter)
			.then(data => setEvents(data))
			.catch(error => toast.error(error));
	}, [filter]);

	const handleUpdate = (id: string, updatedEvent: UpdateEventDto) => {
		EventsService.eventsControllerUpdate(id, updatedEvent)
			.then(updated => {
				setEvents(prevEvents =>
					prevEvents.map(event =>
						event.id === updated.id ? updated : event
					)
				);
				toast.success("Event updated successfully");
			})
			.catch(error => {
				toast.error(
					`Failed to update event: ${error.body.message ?? error}`
				);
			});
	};

	const handleDelete = (id: string) => {
		EventsService.eventsControllerRemove(id)
			.then(() => {
				setEvents(prevEvents =>
					prevEvents.filter(event => event.id !== id)
				);

				toast.success("Event deleted successfully");
			})
			.catch(error => {
				toast.error(
					`Failed to delete event: ${error.body.message ?? error}`
				);
			});
	};

	return (
		<EventsContext.Provider
			value={{
				events,
				setEvents,
				filter,
				setFilter,
				handleUpdate,
				handleDelete,
			}}>
			{children}
		</EventsContext.Provider>
	);
};
