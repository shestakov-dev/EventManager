import { useEffect, useState } from "react";
import "./App.css";
import { EventsService } from "./api";

function App() {
	const [events, setEvents] = useState<Record<string, unknown>[]>([]);

	useEffect(() => {
		EventsService.eventsControllerFindAll()
			.then(data => {
				setEvents(data);
			})
			.catch(error => {
				console.error("Error fetching events:", error);
			});
	}, []);

	return (
		<>
			{events.map((event, index) => (
				<div key={index} className="event">
					<h3>Event {index + 1}</h3>
					<pre>{JSON.stringify(event, null, 2)}</pre>
				</div>
			))}
		</>
	);
}

export default App;
