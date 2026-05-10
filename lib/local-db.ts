import Dexie, { type Table } from "dexie";

export interface LocalJournal {
	id: string;
	title: string;
	content: any;
	updatedAt: number;
}

export class MyDatabase extends Dexie {
	journals!: Table<LocalJournal>;

	constructor() {
		super("JournalApp");
		this.version(1).stores({
			journals: "id",
		});
	}
}

export const localDb = new MyDatabase();
