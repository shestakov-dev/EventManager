import { useEffect, useState } from "react";
import { EventTypesService, type EventTypeEntity } from "@/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

export default function EventTypes() {
	const [eventTypes, setEventTypes] = useState<EventTypeEntity[]>([]);
	const [newEventType, setNewEventType] = useState({
		name: "",
		description: "",
	});

	const [editing, setEditing] = useState<string | null>(null);
	const [edittedEventType, setEdittedEventType] = useState({
		name: "",
		description: "",
	});

	const fetchEventTypes = () => {
		EventTypesService.eventTypesControllerFindAll()
			.then(setEventTypes)
			.catch(error => {
				toast.error(
					`Failed to fetch event types: ${error.body.message || error}`
				);
			});
	};

	useEffect(() => {
		fetchEventTypes();
	}, []);

	const handleCreate = async () => {
		const eventType = await EventTypesService.eventTypesControllerCreate(
			newEventType
		).catch(error => {
			toast.error(
				`Failed to create event type: ${error.body.message || error}`
			);
		});

		if (!eventType) {
			return;
		}

		setEventTypes([...eventTypes, eventType]);
		setNewEventType({ name: "", description: "" });
	};

	const handleUpdate = async (id: string) => {
		const eventType = await EventTypesService.eventTypesControllerUpdate(
			id,
			edittedEventType
		).catch(error => {
			toast.error(
				`Failed to update event type: ${error.body.message || error}`
			);
		});

		if (!eventType) {
			return;
		}

		setEventTypes(
			eventTypes.map(currentEventType =>
				currentEventType.id === id ? eventType : currentEventType
			)
		);
		setEditing(null);
	};

	const handleDelete = async (id: string) => {
		await EventTypesService.eventTypesControllerRemove(id).catch(error => {
			toast.error(
				`Failed to delete event type: ${error.body.message || error}`
			);
		});

		setEventTypes(
			eventTypes.filter(currentEventType => currentEventType.id !== id)
		);
	};

	return (
		<Card className="p-6 space-y-6">
			<CardHeader>
				<CardTitle className="text-2xl">Manage Event Types</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Add New Event Type */}
				<Card>
					<CardHeader>
						<CardTitle>Add New Event Type</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Input
							placeholder="Name"
							value={newEventType.name}
							onChange={e =>
								setNewEventType({
									...newEventType,
									name: e.target.value,
								})
							}
						/>
						<Input
							placeholder="Description"
							type="description"
							value={newEventType.description}
							onChange={e =>
								setNewEventType({
									...newEventType,
									description: e.target.value,
								})
							}
						/>
						<Button onClick={handleCreate}>Add EventType</Button>
					</CardContent>
				</Card>

				{/* List of Event Types */}
				<Card>
					<CardHeader>
						<CardTitle>Event Types</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{eventTypes.map(eventType =>
							// Check if the event type is being edited
							// If so, show the edit form, otherwise show the eventType details
							editing === eventType.id ? (
								<div key={eventType.id} className="space-y-2">
									<Input
										placeholder="Name"
										value={edittedEventType.name}
										onChange={e =>
											setEdittedEventType({
												...edittedEventType,
												name: e.target.value,
											})
										}
									/>
									<Input
										placeholder="Description"
										value={edittedEventType.description}
										onChange={e =>
											setEdittedEventType({
												...edittedEventType,
												description: e.target.value,
											})
										}
									/>
									<div className="flex gap-2">
										<Button
											onClick={() =>
												handleUpdate(eventType.id)
											}>
											Save
										</Button>
										<Button
											variant="outline"
											onClick={() => setEditing(null)}>
											Cancel
										</Button>
									</div>
								</div>
							) : (
								<div
									key={eventType.id}
									className="flex justify-between items-center border-b pb-2">
									<div>
										<p className="font-medium">
											{eventType.name}
										</p>
										<p className="text-sm text-muted-foreground">
											{eventType.description}
										</p>
									</div>
									<div className="flex gap-2">
										<Button
											variant="outline"
											onClick={() => {
												setEditing(eventType.id);
												setEdittedEventType({
													name: eventType.name,
													description:
														eventType.description ??
														"",
												});
											}}>
											Edit
										</Button>
										<Button
											variant="destructive"
											onClick={() =>
												handleDelete(eventType.id)
											}>
											Delete
										</Button>
									</div>
								</div>
							)
						)}
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
}
