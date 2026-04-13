import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, course, role } = body;

    // Validation
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert advisor request
    const [result] = await sql`
      INSERT INTO advisor_requests (name, email, phone, course, user_role)
      VALUES (${name}, ${email}, ${phone}, ${course}, ${role || null})
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully',
      data: result,
    });
  } catch (error) {
    console.error('Advisor request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit request',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch all advisor requests (for admin)
export async function GET() {
  try {
    const requests = await sql`
      SELECT * FROM advisor_requests 
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      success: true,
      data: requests,
    });
  } catch (error) {
    console.error('Fetch advisor requests error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch requests',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
