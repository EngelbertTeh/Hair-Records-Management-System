import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;
const sql = neon(url || '');

export async function helloWorld() {
  const start = new Date();
  const [dbResponse] = await sql`SELECT NOW()`;
  const dbNow = dbResponse?.now || '';
  const end = new Date();
  return { dbNow: dbNow, latency: Math.abs(end.getTime() - start.getTime()) };
}

async function configureDatabase() {
  const [dbResponse] = await sql`CREATE TABLE IF NOT EXISTS "links" (
    "id" serial PRIMARY KEY NOT NULL,
    "url" text NOT NULL,
    "created_at" timestamp DEFAULT now()
  )`;

  console.log('MY DB RESPONSE', dbResponse);
}

configureDatabase().catch((err) => console.log('dbconfig error', err));
