import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import * as schema from './schema';
config({ path: '.env.local' });

const dbcs = process.env.DATABASE_URL;
const sql = neon(dbcs || '');
const db = drizzle(sql, { schema });

// const foo = db.query.hairDetailTable.findFirst({
//   where: (hairDetail, { eq }) => eq(hairDetail.customer_id, 2),
//   with: {
//     customer: { columns: { tel: false, id: false, hp: false } },
//   },
// });


export default async function dbInit() {
  try {
    await migrate(db, { migrationsFolder: 'src/migrations' });
  } catch (err) {
    console.log('Migration unsuccessful to neon db', err);
  }
}

dbInit();
