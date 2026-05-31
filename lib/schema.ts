import { relations, sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: integer("emailVerified", { mode: "boolean" })
		.default(false)
		.notNull(),
	image: text("image"),
	plan: text("plan").notNull().default("free"),
	createdAt: integer("createdAt", { mode: "timestamp" })
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: integer("updatedAt", { mode: "timestamp" })
		.$defaultFn(() => new Date())
		.$onUpdate(() => new Date())
		.notNull(),
});

export const session = sqliteTable(
	"session",
	{
		id: text("id").primaryKey(),
		expiresAt: integer("expiresAt", { mode: "timestamp" }).notNull(),
		token: text("token").notNull().unique(),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
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

export const account = sqliteTable(
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
		accessTokenExpiresAt: integer("accessTokenExpiresAt", {
			mode: "timestamp",
		}),
		refreshTokenExpiresAt: integer("refreshTokenExpiresAt", {
			mode: "timestamp",
		}),
		scope: text("scope"),
		password: text("password"),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = sqliteTable(
	"verification",
	{
		id: text("id").primaryKey(),
		identifier: text("identifier").notNull(),
		value: text("value").notNull(),
		expiresAt: integer("expiresAt", { mode: "timestamp" }).notNull(),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const project = sqliteTable(
	"project",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("Untitled Project"),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("project_userId_idx").on(table.userId)],
);

export const journal = sqliteTable(
	"journal",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("Untitled Journal"),
		content: text("content").notNull().default(""),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		projectId: text("projectId").references(() => project.id, {
			onDelete: "set null",
		}),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [
		index("journal_userId_idx").on(table.userId),
		index("journal_projectId_idx").on(table.projectId),
	],
);

export const practice = sqliteTable(
	"practice",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("Untitled Practice"),
		topic: text("topic").notNull().default(""),
		format: text("format").notNull().default("quiz"),
		questions: text("questions").notNull().default("[]"),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("practice_userId_idx").on(table.userId)],
);

export const newtonChat = sqliteTable(
	"newton_chat",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull().default("New Chat"),
		messages: text("messages").notNull().default("[]"),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: integer("createdAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: integer("updatedAt", { mode: "timestamp" })
			.$defaultFn(() => new Date())
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index("newton_chat_userId_idx").on(table.userId)],
);

export const usageLog = sqliteTable(
	"usage_log",
	{
		id: text("id").primaryKey(),
		userId: text("userId")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		feature: text("feature").notNull(),
		date: text("date").notNull(),
		count: integer("count").notNull().default(0),
	},
	(table) => [
		uniqueIndex("usage_log_unique_idx").on(table.userId, table.feature, table.date),
		index("usage_log_userId_idx").on(table.userId),
	],
);

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	projects: many(project),
	journals: many(journal),
	practices: many(practice),
	newtonChats: many(newtonChat),
	usageLogs: many(usageLog),
}));

export const usageLogRelations = relations(usageLog, ({ one }) => ({
	user: one(user, { fields: [usageLog.userId], references: [user.id] }),
}));

export const projectRelations = relations(project, ({ one, many }) => ({
	user: one(user, { fields: [project.userId], references: [user.id] }),
	journals: many(journal),
}));

export const journalRelations = relations(journal, ({ one }) => ({
	user: one(user, { fields: [journal.userId], references: [user.id] }),
	project: one(project, {
		fields: [journal.projectId],
		references: [project.id],
	}),
}));

export const practiceRelations = relations(practice, ({ one }) => ({
	user: one(user, { fields: [practice.userId], references: [user.id] }),
}));

export const newtonChatRelations = relations(newtonChat, ({ one }) => ({
	user: one(user, { fields: [newtonChat.userId], references: [user.id] }),
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
