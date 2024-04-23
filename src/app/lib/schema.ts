import {
  customType,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

const customVarchar = customType<{ data: string }>({
  dataType() {
    return 'varchar';
  },
});

export const linksTable = pgTable('links', {
  id: serial('id').primaryKey().notNull(),
  url: customVarchar('url')
    .unique('url_idx')
    .notNull(),
  short: varchar('short', { length: 50 }),
  created_at: timestamp('created_at').defaultNow(),
});
