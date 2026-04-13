import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    // Get total requests
    const [totalRequests] = await sql`
      SELECT COUNT(*) as count FROM advisor_requests
    `;

    // Get requests by status
    const statusCounts = await sql`
      SELECT status, COUNT(*) as count 
      FROM advisor_requests 
      GROUP BY status
    `;

    // Get requests by course
    const courseCounts = await sql`
      SELECT course, COUNT(*) as count 
      FROM advisor_requests 
      GROUP BY course 
      ORDER BY count DESC
    `;

    // Get recent requests (last 7 days)
    const [recentRequests] = await sql`
      SELECT COUNT(*) as count 
      FROM advisor_requests 
      WHERE created_at >= NOW() - INTERVAL '7 days'
    `;

    // Get requests by date (last 30 days)
    const requestsByDate = await sql`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as count
      FROM advisor_requests
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `;

    return NextResponse.json({
      success: true,
      data: {
        total: parseInt(totalRequests.count),
        byStatus: statusCounts.reduce((acc: any, item: any) => {
          acc[item.status] = parseInt(item.count);
          return acc;
        }, {}),
        byCourse: courseCounts.map((item: any) => ({
          course: item.course,
          count: parseInt(item.count),
        })),
        recentCount: parseInt(recentRequests.count),
        byDate: requestsByDate.map((item: any) => ({
          date: item.date,
          count: parseInt(item.count),
        })),
      },
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch stats',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
