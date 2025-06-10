import { useContext } from "react";
import { EventsContext } from "@/contexts/EventsContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	FormItem,
	FormLabel,
	FormControl,
	FormField,
	FormMessage,
	Form,
} from "./ui/form";
import type { EventFindManyDto } from "@/api";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type FilterValues = {
	name: string;
	city: string;
	type: string;
	dateFrom: string;
	dateTo: string;
	lecturer: string;
};

export default function EventsFilter() {
	const { setFilter } = useContext(EventsContext);

	const form = useForm({
		defaultValues: {
			name: "",
			city: "",
			type: "",
			dateFrom: "",
			dateTo: "",
			lecturer: "",
		},
	});

	const onSubmit = (values: FilterValues) => {
		// trim whitespace from all fields
		Object.keys(values).forEach(key => {
			if (typeof values[key as keyof FilterValues] === "string") {
				values[key as keyof FilterValues] = (
					values[key as keyof FilterValues] as string
				).trim();
			}
		});

		const filter: EventFindManyDto = {};

		if (values.name) {
			filter.name = { contains: values.name, mode: "insensitive" };
		}

		if (values.city) {
			filter.city = { contains: values.city, mode: "insensitive" };
		}

		if (values.type) {
			filter.type = { contains: values.type, mode: "insensitive" };
		}

		if (values.lecturer) {
			filter.lecturers = {
				has: values.lecturer,
			};
		}

		if (values.dateFrom || values.dateTo) {
			filter.date = {};

			if (values.dateFrom) {
				filter.date.gte = new Date(values.dateFrom).toISOString();
			}

			if (values.dateTo) {
				filter.date.lte = new Date(values.dateTo).toISOString();
			}
		}

		setFilter(filter);
	};

	const handleClear = () => {
		form.reset();
		setFilter({});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Филтриране</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-wrap gap-4 items-end mb-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Заглавие</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Град</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Тип</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lecturer"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Лектор</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="dateFrom"
							render={({ field }) => (
								<FormItem>
									<FormLabel>От дата</FormLabel>
									<FormControl>
										<Input type="date" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="dateTo"
							render={({ field }) => (
								<FormItem>
									<FormLabel>До дата</FormLabel>
									<FormControl>
										<Input type="date" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex gap-2">
							<Button type="submit" className="h-9">
								Приложи
							</Button>
							<Button
								type="button"
								onClick={handleClear}
								variant="outline"
								className="h-9">
								Изчисти
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
