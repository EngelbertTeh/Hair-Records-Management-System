import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const linksTable = pgTable('links', {
  id: serial('id').primaryKey().notNull(),
  url: text('url').notNull(),
  created_at: timestamp("created_at").defaultNow(),
});
