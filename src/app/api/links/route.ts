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
  return NextResponse.json(data, { status: 201 });
}
