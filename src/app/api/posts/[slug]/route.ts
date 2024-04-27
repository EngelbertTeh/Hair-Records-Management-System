import { ContextParams } from '@/app/lib/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, context: ContextParams) {
  const { params } = context;
  const { slug } = params;

  return NextResponse.json({ slug });
}
