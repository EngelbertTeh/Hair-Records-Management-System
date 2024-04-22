import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { linksTable } from './schema';

// to initialize database run in command line
// tsx ./src/app/lib/dbInit.ts (tsx is a custom command that runs typescript files)

config({ path: '.env.local' }); // ensures env variables are loaded from .env.local

const dbcs = process.env.DATABASE_URL;
const sql = neon(dbcs || '');
const db = drizzle(sql);

async function dbInit() {
  try {
    await migrate(db, { migrationsFolder: 'src/migrations' });
  } catch (err) {
    console.log('Migration unsuccessful to neon db', err);
  }
}

dbInit();

export async function addLink(url: string) {
  const newLink = { url };
  return await db.insert(linksTable).values(newLink).returning();
}

export async function getLinks(lookupLimit: number, offset: number) {
  return await db.select().from(linksTable).limit(lookupLimit).offset(offset);
}

export async function getMinLinks(lookupLimit: number, offset: number) {
  return await db
    .select({
      id: linksTable.id,
      url: linksTable.url,
    })
    .from(linksTable)
    .limit(lookupLimit)
    .offset(offset);
}

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
