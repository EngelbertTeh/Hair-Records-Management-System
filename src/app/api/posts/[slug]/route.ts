import { ContextParams } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(request: string, context: ContextParams) {
  const { params } = context;
  const { slug } = params;

  return NextResponse.json({ slug });
}
