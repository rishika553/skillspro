import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST() {
  try {
    console.log('🔧 Fixing advisor_requests table...');
    
    // Try to rename the column
    try {
      await sql`
        ALTER TABLE advisor_requests 
        RENAME COLUMN current_role TO user_role
      `;
      console.log('✅ Column renamed successfully');
    } catch (error: any) {
      // If column doesn't exist or already renamed, that's fine
      if (error.message.includes('does not exist')) {
        console.log('ℹ️ Column already fixed or table needs recreation');
        
        // Drop and recreate the table
        await sql`DROP TABLE IF EXISTS advisor_requests`;
        await sql`
          CREATE TABLE advisor_requests (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            course VARCHAR(255),
            user_role VARCHAR(255),
            status VARCHAR(50) DEFAULT 'pending',
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `;
        console.log('✅ Table recreated successfully');
      } else {
        throw error;
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Table fixed successfully!',
    });
  } catch (error) {
    console.error('Fix table error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fix table',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
