import { neon } from '@neondatabase/serverless';

export async function helloWorld() {
  const start = new Date();
  const url = process.env.DATABASE_URL;

  if (url) {
    const sql = neon(url);
    const [dbResponse] = await sql`SELECT NOW()`;
    const dbNow = dbResponse?.now || '';
    const end = new Date();
    return { dbNow: dbNow, latency: Math.abs(end.getTime() - start.getTime()) };
  }
}

export default async function getData() {
  const url = process.env.DATABASE_URL;
  if (url) {
    const sql = neon(url);

    const response = await sql`SELECT version()`;

    console.log(response);

    return response;
  }
}
