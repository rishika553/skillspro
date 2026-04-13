import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create a SQL query function
export const sql = neon(process.env.DATABASE_URL);

// Example usage:
// const result = await sql`SELECT * FROM users`;
