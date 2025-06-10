import { Toaster } from "sonner";
import EventsTable from "./components/EventsTable";
import { EventsProvider } from "./contexts/EventsProvider";
import EventsFilter from "./components/EventsFilter";

function App() {
	return (
		<div className="p-6 space-y-6">
			<EventsProvider>
				<EventsFilter />
				<EventsTable />
				<Toaster />
			</EventsProvider>
		</div>
	);
}

export default App;
