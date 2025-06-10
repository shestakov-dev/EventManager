import EventsTable from "./EventsTable";
import EventsFilter from "./EventsFilter";
import CreateEvent from "./CreateEvent";
import { EventsContext } from "@/contexts/EventsContext";
import { useContext } from "react";

export default function Main() {
	const { handleCreate } = useContext(EventsContext);

	return (
		<div className="w-full flex justify-center px-4">
			<div className="w-full max-w-7xl flex flex-col gap-6 my-6">
				<div className="mx-4">
					<EventsFilter />
				</div>
				<div className="mx-4">
					<EventsTable />
				</div>
				<div className="mx-4">
					<CreateEvent handleCreate={handleCreate} />
				</div>
			</div>
		</div>
	);
}
