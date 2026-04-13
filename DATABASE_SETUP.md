# Database Setup Guide

This guide will help you set up the Neon PostgreSQL database for SkillsPro.

## Prerequisites

- Neon database account (already configured)
- Database URL in `.env.local`

## Database Schema

The database includes the following tables:

### Core Tables
- **users** - User accounts and authentication
- **courses** - Course information
- **course_outcomes** - Learning outcomes for each course
- **course_tools** - Tools/technologies taught in courses
- **course_included** - What's included in each course
- **course_curriculum** - Course curriculum structure
- **curriculum_topics** - Topics for each curriculum section
- **course_projects** - Projects students will build
- **project_stack** - Technologies used in each project
- **course_career_roles** - Career outcomes for each course

### Application Tables
- **advisor_requests** - Form submissions from AdvisorForm
- **enrollments** - Student enrollments in courses
- **blog_posts** - Blog content
- **testimonials** - Student testimonials
- **contact_messages** - General contact form submissions

## Setup Instructions

### Option 1: Using the API Route (Recommended)

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Make a POST request to setup the database:
   ```bash
   curl -X POST http://localhost:3000/api/setup-db
   ```

   Or visit in your browser and use a tool like Postman, or run:
   ```bash
   # Using PowerShell
   Invoke-WebRequest -Uri http://localhost:3000/api/setup-db -Method POST
   ```

3. You should see a success message with all tables created and courses seeded.

### Option 2: Manual SQL Execution

1. Connect to your Neon database using their SQL Editor or any PostgreSQL client

2. Run the SQL file:
   ```bash
   psql "postgresql://neondb_owner:npg_k4jE8dfYZWGq@ep-wandering-forest-a-ngev7gn.us-east-1.aws.neon.tech/neondb?sslmode=require" -f src/lib/schema.sql
   ```

## Testing the Connection

Visit: `http://localhost:3000/api/test-db`

You should see:
```json
{
  "success": true,
  "message": "Database connection successful!",
  "data": {
    "current_time": "2026-04-12T...",
    "postgres_version": "PostgreSQL 16..."
  }
}
```

## API Endpoints

### Database Setup
- **POST** `/api/setup-db` - Create tables and seed courses

### Test Connection
- **GET** `/api/test-db` - Test database connection

### Advisor Requests
- **POST** `/api/advisor-request` - Submit advisor request
- **GET** `/api/advisor-request` - Get all advisor requests (admin)

## Example Usage

### Submit Advisor Request
```javascript
const response = await fetch('/api/advisor-request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    course: 'Data Analyst',
    role: 'Student'
  })
});
```

### Query Database in Your Code
```typescript
import { sql } from '@/lib/db';

// Get all courses
const courses = await sql`SELECT * FROM courses WHERE is_active = true`;

// Get course with details
const courseDetails = await sql`
  SELECT 
    c.*,
    json_agg(DISTINCT co.*) as outcomes,
    json_agg(DISTINCT ct.*) as tools
  FROM courses c
  LEFT JOIN course_outcomes co ON c.id = co.course_id
  LEFT JOIN course_tools ct ON c.id = ct.course_id
  WHERE c.slug = ${slug}
  GROUP BY c.id
`;
```

## Database Structure

```
courses (main table)
├── course_outcomes (1:many)
├── course_tools (1:many)
├── course_included (1:many)
├── course_curriculum (1:many)
│   └── curriculum_topics (1:many)
├── course_projects (1:many)
│   └── project_stack (1:many)
└── course_career_roles (1:many)
```

## Next Steps

1. ✅ Database connected
2. ✅ Tables created
3. ✅ Courses seeded
4. 🔄 Update forms to use database
5. 🔄 Create admin dashboard
6. 🔄 Add authentication

## Troubleshooting

### Connection Issues
- Verify `.env.local` has correct DATABASE_URL
- Check Neon dashboard for database status
- Ensure SSL mode is set to `require`

### Migration Issues
- Drop all tables and re-run setup if needed
- Check Neon logs for detailed error messages

### Query Issues
- Use Neon's SQL Editor to test queries
- Check table names and column names match schema
