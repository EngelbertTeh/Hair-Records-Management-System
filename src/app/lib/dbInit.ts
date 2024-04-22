import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
// to initialize database run in command line
// tsx ./src/app/lib/dbInit.ts (tsx is a custom command that runs typescript files)

config({ path: '.env.local' }); // ensures env variables are loaded from .env.local

const url = process.env.DATABASE_URL;
const sql = neon(url || '');
const db = drizzle(sql);

async function dbInit() {
  try {
    await migrate(db, { migrationsFolder: 'src/migrations' });
  } catch (err) {
    console.log('Migration unsuccessful to neon db', err);
  }
}

dbInit();

// async function configureDatabase() {
//   const [dbResponse] = await sql`CREATE TABLE IF NOT EXISTS "links" (
//     "id" serial PRIMARY KEY NOT NULL,
//     "url" text NOT NULL,
//     "created_at" timestamp DEFAULT now()
//   )`;

//   await sql`ALTER TABLE "links" ADD COLUMN "short" varchar(50);`;

//   await sql`ALTER TABLE "links" DROP COLUMN IF EXISTS "short";`;
// }

// configureDatabase().catch((err) => console.log('dbconfig error', err));
