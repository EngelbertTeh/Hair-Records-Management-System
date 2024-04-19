import revalidatePosts from '@/app/actions';
import { NextResponse } from 'next/server';

type SomeItem = {
  id: number;
  title: string;
};

let someItem: SomeItem = { id: 1, title: 'Hello World' };

export async function GET() {
  return NextResponse.json({ items: [someItem] });
}

export async function POST() {
  // post some items
  revalidatePosts();
  return NextResponse.json({ status: 201 });
}
