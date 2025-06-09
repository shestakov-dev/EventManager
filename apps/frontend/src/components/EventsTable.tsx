import { useContext } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { EventsContext } from "@/contexts/EventsContext";

export default function EventsTable() {
	const { events } = useContext(EventsContext);

	return (
		<div className="p-4 space-y-4 max-w-4xl mx-auto">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Заглавие</TableHead>
						<TableHead>Град</TableHead>
						<TableHead>Дата</TableHead>
						<TableHead>Тип</TableHead>
						<TableHead>Лектори</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{events.map(event => (
						<TableRow key={event.id}>
							<TableCell>{event.name}</TableCell>
							<TableCell>{event.city}</TableCell>
							<TableCell>
								{new Date(event.date).toLocaleDateString(
									"en-UK"
								)}
							</TableCell>
							<TableCell>{event.type.name}</TableCell>
							<TableCell>
								{event.lecturers
									.map(lecturer => lecturer.name)
									.join(", ")}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
