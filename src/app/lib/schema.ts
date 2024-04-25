import {
  date,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const linksTable = pgTable(
  'links',
  {
    id: serial('id').primaryKey(),
    url: text('url').notNull(),
    short: varchar('short', { length: 50 }),
    created_at: timestamp('created_at').defaultNow(),
  },
  (links) => {
    return { urlIndex: uniqueIndex('url_idx').on(links.url) };
  }
);

export const customerTable = pgTable(
  'customer',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    dob: date('dob').notNull(),
    nric: varchar('nric', { length: 12 }).unique(),
    address: text('address'),
    hp: varchar('hp', { length: 10 }),
    tel: text('tel'),
    timestamp: timestamp('timestamp').defaultNow(),
  },
  (customer) => {
    return { nricIndex: index('nric_idx').on(customer.nric) };
  }
);

export const hairDetailTable = pgTable('hair_detail', {});
export const appointmentTable = pgTable('appointment', {});

export const hairServiceDetailTable = pgTable('hair_service_detail', {});

export const stylistTable = pgTable(
  'stylist',
  { name: text('name').notNull() },
  (stylist) => {
    return { nricIndex: index('nric_idx').on(stylist.name) };
  }
);
