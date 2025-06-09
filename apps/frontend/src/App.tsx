import { Toaster } from "sonner";
import EventsTable from "./components/EventsTable";
import { EventsProvider } from "./contexts/EventsProvider";

function App() {
	return (
		<EventsProvider>
			<EventsTable />
			<Toaster />
		</EventsProvider>
	);
}

export default App;
