import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const requests = await sql`
      SELECT * FROM advisor_requests 
      ORDER BY created_at DESC
    `;

    // Convert to CSV
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Course', 'Role', 'Status', 'Created At'];
    const csvRows = [headers.join(',')];

    for (const request of requests) {
      const row = [
        request.id,
        `"${request.name}"`,
        request.email,
        request.phone,
        `"${request.course}"`,
        request.user_role || '',
        request.status,
        new Date(request.created_at).toISOString(),
      ];
      csvRows.push(row.join(','));
    }

    const csv = csvRows.join('\n');

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="advisor-requests-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to export data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
