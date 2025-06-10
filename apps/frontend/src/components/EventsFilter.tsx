import { useState, useContext } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { EventsContext } from "@/contexts/EventsContext";
import EventFilterRow, { type FilterValues } from "./EventsFilterRow";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import type { EventFindManyDto } from "@/api";
import { toast } from "sonner";

type RowData = {
	id: string;
	values: Partial<FilterValues>;
};

export default function EventsFilter() {
	const { setFilter } = useContext(EventsContext);

	const [rows, setRows] = useState<RowData[]>([
		{ id: crypto.randomUUID(), values: {} },
	]);

	const [operator, setOperator] = useState<"AND" | "OR" | "NOT">("AND");

	const addRow = () => {
		setRows(rows => [...rows, { id: crypto.randomUUID(), values: {} }]);

		toast.success(
			"Добавен е нов ред за филтриране. Можете да зададете стойности за него."
		);
	};

	const updateRow = (id: string, values: Partial<FilterValues>) => {
		setRows(rows =>
			rows.map(row => (row.id === id ? { ...row, values } : row))
		);
	};

	const removeRow = (id: string) => {
		setRows(rows => rows.filter(row => row.id !== id));

		toast.success("Редът за филтриране е премахнат успешно!");
	};

	const applyFilter = () => {
		const fullFilter = rows.reduce(
			(acc: EventFindManyDto, row) => {
				const filter: EventFindManyDto = {};
				const values = row.values;

				if (values.name) {
					filter.name = {
						contains: values.name,
						mode: "insensitive",
					};
				}

				if (values.city) {
					filter.city = {
						contains: values.city,
						mode: "insensitive",
					};
				}

				if (values.type) {
					filter.type = {
						contains: values.type,
						mode: "insensitive",
					};
				}

				if (values.lecturer) {
					filter.lecturers = { has: values.lecturer };
				}

				if (values.dateFrom || values.dateTo) {
					filter.date = {};

					if (values.dateFrom) {
						filter.date.gte = new Date(
							values.dateFrom
						).toISOString();
					}

					if (values.dateTo) {
						filter.date.lte = new Date(values.dateTo).toISOString();
					}
				}

				if (Object.keys(filter).length > 0) {
					if (acc[operator]) {
						acc[operator].push(filter);
					} else {
						acc[operator] = [filter];
					}
				}

				return acc;
			},
			{
				[operator]: [],
			}
		);

		setFilter(fullFilter);

		toast.success("Филтърът е приложен успешно!");
	};

	const clearAll = () => {
		setRows([{ id: crypto.randomUUID(), values: {} }]);
		setOperator("AND");

		setFilter({});

		toast.success("Всички филтри са изчистени!");
	};

	const applyPlovdivSeptemberFilter = () => {
		const year = new Date().getFullYear();

		const dateFrom = `${year}-09-01`;
		const dateTo = `${year}-09-30`;

		setOperator("AND");
		setRows([
			{
				id: crypto.randomUUID(),
				values: {
					city: "Пловдив",
					dateFrom,
					dateTo,
				},
			},
		]);

		toast.success(
			'Филтърът за Пловдив през септември е зададен! Използвайте бутона "Приложи", за да го активирате.'
		);
	};

	const applyStaraZagoraVarnaSpringFilter = () => {
		const year = new Date().getFullYear();

		const dateFrom = `${year}-03-01`;
		const dateTo = `${year}-05-31`;

		setOperator("OR");
		setRows([
			{
				id: crypto.randomUUID(),
				values: {
					city: "Стара Загора",
					dateFrom,
					dateTo,
				},
			},
			{
				id: crypto.randomUUID(),
				values: {
					city: "Варна",
					dateFrom,
					dateTo,
				},
			},
		]);

		toast.success(
			'Филтърът за Стара Загора и Варна през пролетта е зададен! Използвайте бутона "Приложи", за да го активирате.'
		);
	};

	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle>Филтриране</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<p className="text-sm text-muted-foreground">
					Можете да филтрирате събитията по различни критерии.
					Използвайте "И", "ИЛИ" или "НЕ" операторите, за да
					комбинирате филтрите. Всеки ред от филтри е еквивалентен на
					различни редове с оператор "И". Можете да използвате
					бутоните по-долу, за да приложите предварително зададени
					филтри. Например, "Пловдив през септември" ще филтрира
					събитията в Пловдив през септември, а "Стара Загора и Варна
					през пролетта" ще филтрира събитията в Стара Загора и Варна
					през пролетта.
				</p>

				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						onClick={applyPlovdivSeptemberFilter}>
						Пловдив през септември
					</Button>
					<Button
						variant="outline"
						onClick={applyStaraZagoraVarnaSpringFilter}>
						Стара Загора и Варна през пролетта
					</Button>
				</div>

				<Select
					value={operator}
					onValueChange={value =>
						setOperator(value as "AND" | "OR" | "NOT")
					}>
					<SelectTrigger className="w-[100px]">
						<SelectValue />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value="AND">И</SelectItem>
						<SelectItem value="OR">ИЛИ</SelectItem>
						<SelectItem value="NOT">НЕ</SelectItem>
					</SelectContent>
				</Select>

				{rows.map(row => (
					<div key={row.id} className="flex items-start gap-4">
						<div className="flex-1">
							<EventFilterRow
								onChange={values => updateRow(row.id, values)}
								onRemove={() => removeRow(row.id)}
								defaultValues={row.values as FilterValues}
							/>
						</div>
					</div>
				))}

				<div className="flex gap-2 mt-4">
					<Button onClick={addRow}>Добави филтър</Button>
					<Button onClick={applyFilter}>Приложи</Button>
					<Button onClick={clearAll} variant="outline">
						Изчисти
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
