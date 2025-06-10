import { useEffect } from "react";
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
import { useForm } from "react-hook-form";

export type FilterValues = {
	name: string;
	city: string;
	type: string;
	dateFrom: string;
	dateTo: string;
	lecturer: string;
};

type Props = {
	onChange: (values: Partial<FilterValues>) => void;
	onRemove: () => void;
	defaultValues?: Partial<FilterValues>;
};

export default function EventsFilterRow({
	onChange,
	onRemove,
	defaultValues,
}: Props) {
	const form = useForm({
		defaultValues: defaultValues ?? {
			name: "",
			city: "",
			type: "",
			dateFrom: "",
			dateTo: "",
			lecturer: "",
		},
	});

	useEffect(() => {
		const subscription = form.watch(() => {
			onChange(form.getValues());
		});

		return () => subscription.unsubscribe();
	}, [form, form.watch, onChange]);

	return (
		<Form {...form}>
			<form className="flex flex-row flex-wrap gap-4 items-end">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="flex-1 min-w-[150px]">
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
						<FormItem className="flex-1 min-w-[150px]">
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
						<FormItem className="flex-1 min-w-[150px]">
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
						<FormItem className="flex-1 min-w-[150px]">
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
						<FormItem className="flex-1 min-w-[150px]">
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
						<FormItem className="flex-1 min-w-[150px]">
							<FormLabel>До дата</FormLabel>
							<FormControl>
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="button"
					onClick={onRemove}
					variant="outline"
					className="h-9">
					Премахни филтър
				</Button>
			</form>
		</Form>
	);
}
