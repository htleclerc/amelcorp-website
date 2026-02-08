import { NextResponse } from 'next/server';
import { generateAvailableSlots } from '@/lib/calendar';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
        return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
    }

    // In a real app, you might want to seed the random generator with the date 
    // so the slots don't change every time the API is called for the same day.
    // For this requirement, we'll just generate them.
    const slots = generateAvailableSlots(date);

    return NextResponse.json({ slots });
}
