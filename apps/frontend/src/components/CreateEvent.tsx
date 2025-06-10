import type { CreateEventDto } from "@/api";
import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { InputWithLabel } from "./InputWithLabel";

export default function CreateEvent({
	handleCreate,
}: {
	handleCreate: (newEvent: CreateEventDto) => void;
}) {
	const [newEvent, setNewEvent] = useState<CreateEventDto>({
		name: "",
		city: "",
		date: "",
		type: "",
		lecturers: [],
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// trim all lecturers and remove empty strings
		newEvent.lecturers = newEvent.lecturers
			.map(lecturer => lecturer.trim())
			.filter(lecturer => lecturer !== "");

		handleCreate(newEvent);

		setNewEvent({
			name: "",
			city: "",
			date: "",
			type: "",
			lecturers: [],
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Създаване на събитие</CardTitle>
			</CardHeader>

			<CardContent className="space-y-4">
				<p className="text-sm text-muted-foreground">
					Попълнете формата, за да създадете ново събитие. Всички
					полета са задължителни.
				</p>
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 gap-4 place-items-center">
					<InputWithLabel
						attribute="event-name"
						label="Заглавие"
						value={newEvent.name}
						onChange={e =>
							setNewEvent(prev => ({
								...prev,
								name: e.target.value,
							}))
						}
					/>

					<InputWithLabel
						attribute="event-city"
						label="Град"
						value={newEvent.city}
						onChange={e =>
							setNewEvent(prev => ({
								...prev,
								city: e.target.value,
							}))
						}
					/>

					<InputWithLabel
						attribute="event-date"
						label="Дата"
						type="date"
						value={newEvent.date}
						onChange={e =>
							setNewEvent(prev => ({
								...prev,
								date: e.target.value,
							}))
						}
					/>

					<InputWithLabel
						attribute="event-type"
						label="Тип"
						value={newEvent.type}
						onChange={e =>
							setNewEvent(prev => ({
								...prev,
								type: e.target.value,
							}))
						}
					/>

					<InputWithLabel
						attribute="event-lecturers"
						label="Лектори (разделени със запетая)"
						type="text"
						value={newEvent.lecturers.join(",")}
						onChange={e =>
							setNewEvent(prev => ({
								...prev,
								lecturers: e.target.value.split(","),
							}))
						}
					/>

					<Button type="submit">Създай</Button>
				</form>
			</CardContent>
		</Card>
	);
}
