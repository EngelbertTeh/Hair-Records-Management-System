import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const linksTable = pgTable('links', {
  id: serial('id').primaryKey().notNull(),
  url: text('url').unique('url_idx').notNull(),
  short: varchar('short', { length: 50 }),
  created_at: timestamp('created_at').defaultNow(),
});
