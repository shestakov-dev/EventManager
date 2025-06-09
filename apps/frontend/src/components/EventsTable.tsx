import { useContext, useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import { EventsContext } from "@/contexts/EventsContext";
import { filterAndSortEvents } from "@/lib/utils";
import type { EventEntity } from "@/api";
import EventRow from "./EventRow";

const HEADER_MAPPINGS: [
	Exclude<keyof EventEntity, "id" | "lecturers">,
	string,
][] = [
	["name", "Заглавие"],
	["city", "Град"],
	["date", "Дата"],
	["type", "Тип"],
] as const;

export default function EventsTable() {
	const { events, handleUpdate, handleDelete } = useContext(EventsContext);

	const [sortBy, setSortBy] =
		useState<Exclude<(typeof HEADER_MAPPINGS)[number][0], "lecturers">>(
			"name"
		);
	const [sortOrder, setSortOrder] = useState<"ascending" | "descending">(
		"ascending"
	);

	const handleSort = (column: typeof sortBy) => {
		if (sortBy === column) {
			setSortOrder(previousSortOrder =>
				previousSortOrder === "ascending" ? "descending" : "ascending"
			);
		} else {
			setSortBy(column);
			setSortOrder("ascending");
		}
	};

	const sortIndicator = (column: typeof sortBy) => {
		if (sortBy === column) {
			return sortOrder === "ascending" ? "↑" : "↓";
		}

		return "";
	};

	return (
		<div className="p-4 space-y-4 max-w-4xl mx-auto">
			<Table>
				<TableHeader>
					<TableRow>
						{HEADER_MAPPINGS.map(([key, label]) => (
							<TableHead
								className="cursor-pointer select-none"
								onClick={() => handleSort(key)}>
								{label}
								{sortIndicator(key)}
							</TableHead>
						))}
						<TableHead>Лектори</TableHead>
						<TableHead className="w-1">Действия</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filterAndSortEvents(events, [], sortBy, sortOrder).map(
						event => (
							<EventRow
								event={event}
								handleUpdate={handleUpdate}
								handleDelete={handleDelete}
							/>
						)
					)}
				</TableBody>
			</Table>
		</div>
	);
}
