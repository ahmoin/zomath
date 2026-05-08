import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("emailVerified").default(false).notNull(),
	image: text("image"),
	createdAt: timestamp("createdAt").defaultNow().notNull(),
	updatedAt: timestamp("updatedAt")
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
});

export const session = pgTable(
	"session",
	{
		id: text("id").primaryKey(),
		expiresAt: timestamp("expiresAt").notNull(),
		token: text("token").notNull().unique(),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.$onUpdate(() => new Date())
			.notNull(),
		ipAddress: text("ipAddress"),
		userAgent: text("userAgent"),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
	},
	(table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
	"account",
	{
		id: text("id").primaryKey(),
		accountId: text("accountId").notNull(),
		providerId: text("providerId").notNull(),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		accessToken: text("accessToken"),
		refreshToken: text("refreshToken"),
		idToken: text("idToken"),
		accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
		refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
		scope: text("scope"),
		password: text("password"),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
	"verification",
	{
		id: text("id").primaryKey(),
		identifier: text("identifier").notNull(),
		value: text("value").notNull(),
		expiresAt: timestamp("expiresAt").notNull(),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.defaultNow()
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const paper = pgTable(
	"paper",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("Untitled Paper"),
		content: text("content").notNull().default(""),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.defaultNow()
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("paper_userId_idx").on(table.userId)],
);

export const journal = pgTable(
	"journal",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("Untitled Journal"),
		content: text("content").notNull().default(""),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt")
			.defaultNow()
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("journal_userId_idx").on(table.userId)],
);

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	papers: many(paper),
	journals: many(journal),
}));

export const paperRelations = relations(paper, ({ one }) => ({
	user: one(user, { fields: [paper.userId], references: [user.id] }),
}));

export const journalRelations = relations(journal, ({ one }) => ({
	user: one(user, { fields: [journal.userId], references: [user.id] }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id],
	}),
}));

export const accountRelations = relations(account, ({ one }) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id],
	}),
}));
