import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: '田中太郎' });
}
