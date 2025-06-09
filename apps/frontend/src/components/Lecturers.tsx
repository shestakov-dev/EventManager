import { useEffect, useState } from "react";
import { LecturersService, type LecturerEntity } from "@/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

export default function Lecturers() {
	const [lecturers, setLecturers] = useState<LecturerEntity[]>([]);
	const [newLecturer, setNewLecturer] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const [editing, setEditing] = useState<string | null>(null);
	const [edittedLecturer, setEdittedLecturer] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const fetchLecturers = () => {
		LecturersService.lecturersControllerFindAll()
			.then(setLecturers)
			.catch(error => {
				toast.error(
					`Failed to fetch lecturers: ${error.body.message || error}`
				);
			});
	};

	useEffect(() => {
		fetchLecturers();
	}, []);

	const handleCreate = async () => {
		const lecturer = await LecturersService.lecturersControllerCreate(
			newLecturer
		).catch(error => {
			toast.error(
				`Failed to create lecturer: ${error.body.message || error}`
			);
		});

		if (!lecturer) {
			return;
		}

		setLecturers([...lecturers, lecturer]);
		setNewLecturer({ name: "", email: "", phone: "" });
	};

	const handleUpdate = async (id: string) => {
		const lecturer = await LecturersService.lecturersControllerUpdate(
			id,
			edittedLecturer
		).catch(error => {
			toast.error(
				`Failed to update lecturer: ${error.body.message || error}`
			);
		});

		if (!lecturer) {
			return;
		}

		setLecturers(
			lecturers.map(currentLecturer =>
				currentLecturer.id === id ? lecturer : currentLecturer
			)
		);
		setEditing(null);
	};

	const handleDelete = async (id: string) => {
		await LecturersService.lecturersControllerRemove(id).catch(error => {
			toast.error(
				`Failed to delete lecturer: ${error.body.message || error}`
			);
		});

		setLecturers(
			lecturers.filter(currentLecturer => currentLecturer.id !== id)
		);
	};

	return (
		<Card className="p-6 space-y-6">
			<CardHeader>
				<CardTitle className="text-2xl">Manage Lecturers</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Add New Lecturer */}
				<Card>
					<CardHeader>
						<CardTitle>Add New Lecturer</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Input
							placeholder="Name"
							value={newLecturer.name}
							onChange={e =>
								setNewLecturer({
									...newLecturer,
									name: e.target.value,
								})
							}
						/>
						<Input
							placeholder="Email"
							type="email"
							value={newLecturer.email}
							onChange={e =>
								setNewLecturer({
									...newLecturer,
									email: e.target.value,
								})
							}
						/>
						<Input
							placeholder="Phone"
							value={newLecturer.phone}
							onChange={e =>
								setNewLecturer({
									...newLecturer,
									phone: e.target.value,
								})
							}
						/>
						<Button onClick={handleCreate}>Add Lecturer</Button>
					</CardContent>
				</Card>

				{/* List of Lecturers */}
				<Card>
					<CardHeader>
						<CardTitle>Lecturers</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{lecturers.map(lecturer =>
							// Check if the lecturer is being edited
							// If so, show the edit form, otherwise show the lecturer details
							editing === lecturer.id ? (
								<div key={lecturer.id} className="space-y-2">
									<Input
										placeholder="Name"
										value={edittedLecturer.name}
										onChange={e =>
											setEdittedLecturer({
												...edittedLecturer,
												name: e.target.value,
											})
										}
									/>
									<Input
										placeholder="Email"
										value={edittedLecturer.email}
										onChange={e =>
											setEdittedLecturer({
												...edittedLecturer,
												email: e.target.value,
											})
										}
									/>
									<Input
										placeholder="Phone"
										value={edittedLecturer.phone}
										onChange={e =>
											setEdittedLecturer({
												...edittedLecturer,
												phone: e.target.value,
											})
										}
									/>
									<div className="flex gap-2">
										<Button
											onClick={() =>
												handleUpdate(lecturer.id)
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
									key={lecturer.id}
									className="flex justify-between items-center border-b pb-2">
									<div>
										<p className="font-medium">
											{lecturer.name}
										</p>
										<p className="text-sm text-muted-foreground">
											{lecturer.email}
										</p>
										<p className="text-sm text-muted-foreground">
											{lecturer.phone}
										</p>
									</div>
									<div className="flex gap-2">
										<Button
											variant="outline"
											onClick={() => {
												setEditing(lecturer.id);
												setEdittedLecturer({
													name: lecturer.name,
													email: lecturer.email,
													phone: lecturer.phone ?? "",
												});
											}}>
											Edit
										</Button>
										<Button
											variant="destructive"
											onClick={() =>
												handleDelete(lecturer.id)
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
