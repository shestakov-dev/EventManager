import EventsTable from "./EventsTable";
import EventsFilter from "./EventsFilter";
import CreateEvent from "./CreateEvent";
import { EventsContext } from "@/contexts/EventsContext";
import { useContext } from "react";

export default function Main() {
	const { handleCreate } = useContext(EventsContext);

	return (
		<div className="flex flex-col lg:flex-row gap-6 mt-6 px-4 items-stretch">
			<div className="flex-1 space-y-6">
				<EventsFilter />
				<EventsTable />
			</div>

			<div className="w-full lg:w-1/3 flex flex-col">
				<CreateEvent handleCreate={handleCreate} />
			</div>
		</div>
	);
}
