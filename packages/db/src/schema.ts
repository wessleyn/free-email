import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const emailLogs = sqliteTable('email_logs', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fromEmail: text('from_email').notNull(),
    toEmail: text('to_email').notNull(),
    subject: text('subject'),
    timestamp: text('timestamp').notNull(),
    allowed: integer('allowed').notNull(),
});

export const allowedSenders = sqliteTable('allowed_senders', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull().unique(),
    addedAt: text('added_at').notNull(),
});