import { type EventEntity, type UpdateEventDto } from "@/api";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

export default function EventRow({
	event,
	handleUpdate,
	handleDelete,
}: {
	event: EventEntity;
	handleUpdate: (id: string, updatedEvent: UpdateEventDto) => void;
	handleDelete: (it: string) => void;
}) {
	const [editing, setEditing] = useState<boolean>(false);
	const [edittedEvent, setEditedEvent] = useState<Omit<EventEntity, "id">>({
		name: "",
		city: "",
		date: "",
		type: "",
		lecturers: [],
	});

	return editing ? (
		<TableRow key={event.id}>
			<TableCell>
				<Input
					placeholder="Заглавие"
					value={edittedEvent.name}
					onChange={e =>
						setEditedEvent(previousEdittedEvent => ({
							...previousEdittedEvent,
							name: e.target.value,
						}))
					}
				/>
			</TableCell>
			<TableCell>
				<Input
					placeholder="Град"
					value={edittedEvent.city}
					onChange={e =>
						setEditedEvent(previousEdittedEvent => ({
							...previousEdittedEvent,
							city: e.target.value,
						}))
					}
				/>
			</TableCell>
			<TableCell>
				<Input
					type="date"
					value={edittedEvent.date}
					onChange={e =>
						setEditedEvent(previousEdittedEvent => ({
							...previousEdittedEvent,
							date: e.target.value,
						}))
					}
				/>
			</TableCell>
			<TableCell>
				<Input
					placeholder="Тип"
					value={edittedEvent.type}
					onChange={e =>
						setEditedEvent(previousEdittedEvent => ({
							...previousEdittedEvent,
							type: e.target.value,
						}))
					}
				/>
			</TableCell>
			<TableCell>
				<Input
					placeholder="Лектори (разделени със запетая)"
					value={edittedEvent.lecturers.join(", ")}
					onChange={e =>
						setEditedEvent(previousEdittedEvent => ({
							...previousEdittedEvent,
							lecturers: e.target.value
								.split(",")
								.map(lecturer => lecturer.trim()),
						}))
					}
				/>
			</TableCell>
			<TableCell className="text-right space-x-2">
				<Button
					onClick={() => {
						handleUpdate(event.id, edittedEvent);
						setEditing(false);
					}}>
					Save
				</Button>
				<Button variant="outline" onClick={() => setEditing(false)}>
					Cancel
				</Button>
			</TableCell>
		</TableRow>
	) : (
		<TableRow key={event.id}>
			<TableCell>{event.name}</TableCell>
			<TableCell>{event.city}</TableCell>
			<TableCell>
				{new Date(event.date).toLocaleDateString("en-UK")}
			</TableCell>
			<TableCell>{event.type}</TableCell>
			<TableCell>
				{event.lecturers.map(lecturer => lecturer).join(", ")}
			</TableCell>
			<TableCell className="text-right space-x-2">
				<Button
					variant="outline"
					size="sm"
					onClick={() => {
						// provide default values for editing
						// and convert date to ISO string for input compatibility
						setEditedEvent({
							// remove the id so it doesn't get sent back
							...{ ...event, id: undefined },
							lecturers: event.lecturers.map(
								lecturer => lecturer
							),
							date: new Date(event.date)
								.toISOString()
								.split("T")[0],
						});

						setEditing(true);
					}}>
					Редактирай
				</Button>
				<Button
					variant="destructive"
					size="sm"
					onClick={() => handleDelete(event.id)}>
					Изтрий
				</Button>
			</TableCell>
		</TableRow>
	);
}
