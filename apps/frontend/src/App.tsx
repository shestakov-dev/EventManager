import { Toaster } from "sonner";
import EventsTable from "./components/EventsTable";
import Lecturers from "./components/Lecturers";
import { EventsProvider } from "./contexts/EventsProvider";
import EventTypes from "./components/EventTypes";

function App() {
	return (
		<EventsProvider>
			<EventsTable />
			<EventTypes />
			<Lecturers />
			<Toaster />
		</EventsProvider>
	);
}

export default App;
