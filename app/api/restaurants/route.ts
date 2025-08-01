import { connectDB } from '@/lib/mongodb';
import Restaurant from '@/models/Restaurant';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const restaurants = await Restaurant.find({});
    return NextResponse.json(restaurants);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
