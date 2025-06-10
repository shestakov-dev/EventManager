import {
	EventsService,
	type CreateEventDto,
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
			.catch(error => {
				toast.error(
					`Възникна грешка при зареждането на събитията: ${error.body.message ?? error}`
				);
			});
	}, [filter]);

	const handleCreate = (newEvent: CreateEventDto) => {
		EventsService.eventsControllerCreate(newEvent)
			.then(createdEvent => {
				setEvents(prevEvents => [...prevEvents, createdEvent]);

				toast.success("Събитието беше създадено успешно!");
			})
			.catch(error => {
				toast.error(
					`Възникна грешка, докато се опитвахме да създадем събитието: ${error.body.message ?? error}`
				);
			});
	};

	const handleUpdate = (id: string, updatedEvent: UpdateEventDto) => {
		EventsService.eventsControllerUpdate(id, updatedEvent)
			.then(updated => {
				setEvents(prevEvents =>
					prevEvents.map(event =>
						event.id === updated.id ? updated : event
					)
				);

				toast.success("Събитието беше актуализирано успешно!");
			})
			.catch(error => {
				toast.error(
					`Възникна грешка, докато се опитвахме да актуализираме събитието: ${error.body.message ?? error}`
				);
			});
	};

	const handleDelete = (id: string) => {
		EventsService.eventsControllerRemove(id)
			.then(() => {
				setEvents(prevEvents =>
					prevEvents.filter(event => event.id !== id)
				);

				toast.success("Събитието беше изтрито успешно!");
			})
			.catch(error => {
				toast.error(
					`Възникна грешка, докато се опитвахме да изтрием събитието: ${error.body.message ?? error}`
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
				handleCreate,
				handleUpdate,
				handleDelete,
			}}>
			{children}
		</EventsContext.Provider>
	);
};
