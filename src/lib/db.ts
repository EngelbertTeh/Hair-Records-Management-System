import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { desc, eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/neon-http';
import randomShortStrings from './randomShortStrings';
import { linksTable } from './schema';

// to initialize database run in command line
// tsx ./src/app/lib/dbInit.ts (tsx is a custom command that runs typescript files)

config({ path: '.env.local' }); // ensures env variables are loaded from .env.local


const dbcs = process.env.DATABASE_ URL;
const sql = neon(dbcs || '');
const db = drizzle(sql);


export async function addLink(url: string) {
  const short = randomShortStrings();
  const newLink = { url, short };
  return await db.insert(linksTable).values(newLink).returning();
}

export async function getLinks(lookupLimit: number, offset: number) {
  return await db
    .select()
    .from(linksTable)
    .orderBy(desc(linksTable.created_at))
    .limit(lookupLimit)
    .offset(offset);
}

export async function getShortLinkRecord(shortLink: string) {
  return await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.short, shortLink));
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
