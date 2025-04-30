import { connectToDatabase } from '@/lib/mongodb';
import { Food } from '@/app/models/Food';
import { NextResponse } from 'next/server';

// Define request body type
interface FoodRequestBody {
  name: string;
  quantity: number;
}

// POST API route
export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json() as FoodRequestBody;

    // Simple validation
    if (!body.name || typeof body.quantity !== 'number') {
      return NextResponse.json(
        { success: false, error: 'Invalid input: "name" must be string and "quantity" must be number.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Create new food 
    const newFood = await Food.create({
      name: body.name,
      quantity: body.quantity,
    });

    // Send response
    return NextResponse.json({ success: true, data: newFood }, { status: 201 });

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected server error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

