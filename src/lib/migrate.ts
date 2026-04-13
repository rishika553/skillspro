import { sql } from './db';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function runMigrations() {
  try {
    console.log('🚀 Starting database migrations...');
    
    // Read and execute schema.sql
    const schemaPath = join(process.cwd(), 'src/lib/schema.sql');
    const schema = readFileSync(schemaPath, 'utf-8');
    
    // Split by semicolon and execute each statement
    const statements = schema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));
    
    for (const statement of statements) {
      await sql.unsafe(statement);
    }
    
    console.log('✅ Database schema created successfully!');
    return { success: true, message: 'Migrations completed' };
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations()
    .then(() => {
      console.log('✅ All migrations completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Migration failed:', error);
      process.exit(1);
    });
}
