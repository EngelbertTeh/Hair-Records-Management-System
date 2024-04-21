import isValidURL from '@/app/lib/isValidURL';
import { NextRequest, NextResponse } from 'next/server';

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
  const url = data && data.url ? data.url : null;
  console.log(url);
  const isValid =
    url && (await isValidURL(url, [process.env.NEXT_PUBLIC_VERCEL_ENV!]));
  if (!isValid) {
    return NextResponse.json(
      { message: `${url} is not valid` },
      { status: 400 }
    );
  }
  return NextResponse.json(data, { status: 201 });
}
