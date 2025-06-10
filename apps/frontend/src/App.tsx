import { Toaster } from "sonner";
import { EventsProvider } from "./contexts/EventsProvider";
import Main from "./components/Main";

function App() {
	return (
		<EventsProvider>
			<Main />
			<Toaster />
		</EventsProvider>
	);
}

export default App;
