import isValidURL from '@/lib/isValidURL';
import { NextRequest, NextResponse } from 'next/server';
import { addLink, getLinks } from '../../../lib/db';

export async function GET() {
  const data = await getLinks(10, 0);
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
  // post some items

  const contentType = req.headers.get('content-type');

  if (contentType !== 'application/json') {
    return NextResponse.json(
      { message: 'Unsupported Media Type' },
      { status: 415 }
    );
  }

  const data = await req.json();
  data.url = data.url.trim().toLowerCase();
  const url: string = data?.url;
//test
  const isValid =
    url && (await isValidURL(url, [process.env.NEXT_PUBLIC_VERCEL_ENV!]));
  if (!isValid) {
    return NextResponse.json(
      { message: `${url} is not valid` },
      { status: 400 }
    );
  }

  addLink(url);

  return NextResponse.json(data, { status: 201 });
}
