import EventsTable from "./components/EventsTable";
import { EventsProvider } from "./contexts/EventsProvider";

function App() {
	return (
		<EventsProvider>
			<EventsTable />
		</EventsProvider>
	);
}

export default App;
