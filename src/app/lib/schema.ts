import {
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const textureEnum = pgEnum('texture', ['fine', 'medium', 'thick']);

export const currentHairConditionEnum = pgEnum('current_hair_condition', [
  'normal',
  'resistant',
  'damage',
  'very damage',
]);

export const currentScapConditionEnum = pgEnum('current_scalp_condition', [
  'normal',
  'dry',
  'oily',
  'dandruff',
  'sensitive',
]);

export const whiteHairSaturationEnum = pgEnum('white_hair_saturation', [
  'undetectable',
  'minimally visible',
  'moderately visible',
  'saturated',
]);

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
    nric: varchar('nric', { length: 12 }),
    address: text('address'),
    hp: varchar('hp', { length: 10 }),
    tel: text('tel'),
    timestamp: timestamp('timestamp').defaultNow(),
  },
  (customer) => {
    return { nricIndex: uniqueIndex('nric_idx').on(customer.nric) };
  }
);

export const hairDetailTable = pgTable('hair_detail', {
  id: serial('id').primaryKey(),
  customer_id: integer('customer_id')
    .notNull()
    .references(() => customerTable.id),
  natural_base: integer('natural_base').notNull(),
  texture: textureEnum('texture'),
  current_hair_condition: currentHairConditionEnum('current_hair_condition'),
  current_scalp_condition: currentScapConditionEnum('current_scalp_condition'),
  white_hair_saturation: whiteHairSaturationEnum('white_hair_saturation'),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const appointmentTable = pgTable('appointment', {
  id: serial('id').primaryKey(),
  customer_id: integer('customer_id')
    .notNull()
    .references(() => customerTable.id),
  stylist_id: integer('stylist_id')
    .notNull()
    .references(() => stylistTable.id),
  remarks: text('remarks'),
  appt_date_time: timestamp('appt_date_time').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const hairServiceTable = pgTable('hair_service', {
  id: serial('id').primaryKey(),
  appointment_id: integer('appointment_id')
    .notNull()
    .references(() => appointmentTable.id),
  service_type: integer('service_type')
    .notNull()
    .references(() => hairServiceDetailTable.id),
  payment_type: integer('payment_type')
    .notNull()
    .references(() => hairServiceDetailTable.id),
  price: integer('price').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const serviceTypeTable = pgTable('service_type', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 15 }).notNull().unique(),
  description: varchar('description', { length: 50 }),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const paymentTypeTable = pgTable('payment_type', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 15 }).notNull().unique(),
  description: varchar('description', { length: 50 }),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const hairServiceDetailTable = pgTable('hair_service_detail', {
  id: serial('id').primaryKey(),
  service_id: integer('service_id')
    .notNull()
    .references(() => serviceTypeTable.id),
  variable_key_id: integer('variable_key_id')
    .notNull()
    .references(() => variableKeyTable.id),
  value: varchar('value', { length: 50 }).notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const variableKeyTable = pgTable('variable_key', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 15 }).notNull().unique(),
  description: varchar('description', { length: 50 }),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const stylistTable = pgTable('stylist', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  rank: integer('rank').notNull(),
});

export const stylistLevelTable = pgTable('stylist_level', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 25 }).notNull().unique(),
  description: varchar('description', { length: 50 }),
  timestamp: timestamp('timestamp').defaultNow(),
});

//relationship
// export const hairDetailRelations = relations(hairDetailTable, ({ one }) => {
//   return {
//     customer: one(customerTable, {
//       fields: [hairDetailTable.customer_id],
//       references: [customerTable.id],
//     }),
//   };
// });
