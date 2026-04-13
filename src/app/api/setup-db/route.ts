import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { courses } from '@/data/courses';

export async function POST() {
  try {
    console.log('🚀 Starting database setup...');
    
    // Create tables
    await createTables();
    
    // Seed courses
    await seedCourses();
    
    return NextResponse.json({
      success: true,
      message: 'Database setup completed successfully!',
    });
  } catch (error) {
    console.error('Database setup error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Database setup failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

async function createTables() {
  // Users table
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      role VARCHAR(50) DEFAULT 'student',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Courses table
  await sql`
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      category VARCHAR(100),
      level VARCHAR(50),
      duration VARCHAR(50),
      weekly_hours VARCHAR(50),
      batch_size VARCHAR(50),
      next_batch VARCHAR(100),
      short_description TEXT,
      transformation_promise TEXT,
      color VARCHAR(100),
      icon VARCHAR(50),
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Course outcomes
  await sql`
    CREATE TABLE IF NOT EXISTS course_outcomes (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      outcome TEXT NOT NULL,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Course tools
  await sql`
    CREATE TABLE IF NOT EXISTS course_tools (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      tool_name VARCHAR(100) NOT NULL,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Course included items
  await sql`
    CREATE TABLE IF NOT EXISTS course_included (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      item TEXT NOT NULL,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Course curriculum
  await sql`
    CREATE TABLE IF NOT EXISTS course_curriculum (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      week_range VARCHAR(50) NOT NULL,
      title VARCHAR(255) NOT NULL,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Curriculum topics
  await sql`
    CREATE TABLE IF NOT EXISTS curriculum_topics (
      id SERIAL PRIMARY KEY,
      curriculum_id INTEGER REFERENCES course_curriculum(id) ON DELETE CASCADE,
      topic TEXT NOT NULL,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Course projects
  await sql`
    CREATE TABLE IF NOT EXISTS course_projects (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      display_order INTEGER DEFAULT 0
    )
  `;

  // Project stack
  await sql`
    CREATE TABLE IF NOT EXISTS project_stack (
      id SERIAL PRIMARY KEY,
      project_id INTEGER REFERENCES course_projects(id) ON DELETE CASCADE,
      technology VARCHAR(100) NOT NULL
    )
  `;

  // Career roles
  await sql`
    CREATE TABLE IF NOT EXISTS course_career_roles (
      id SERIAL PRIMARY KEY,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      role VARCHAR(255) NOT NULL,
      demand VARCHAR(50),
      display_order INTEGER DEFAULT 0
    )
  `;

  // Advisor requests
  await sql`
    CREATE TABLE IF NOT EXISTS advisor_requests (
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

  // Enrollments
  await sql`
    CREATE TABLE IF NOT EXISTS enrollments (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      batch_date VARCHAR(100),
      status VARCHAR(50) DEFAULT 'enrolled',
      payment_status VARCHAR(50) DEFAULT 'pending',
      enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      completed_at TIMESTAMP,
      UNIQUE(user_id, course_id)
    )
  `;

  // Blog posts
  await sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      author_id INTEGER REFERENCES users(id),
      category VARCHAR(100),
      tags TEXT[],
      featured_image VARCHAR(500),
      is_published BOOLEAN DEFAULT false,
      published_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Testimonials
  await sql`
    CREATE TABLE IF NOT EXISTS testimonials (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      course_id INTEGER REFERENCES courses(id),
      name VARCHAR(255) NOT NULL,
      role VARCHAR(255),
      company VARCHAR(255),
      content TEXT NOT NULL,
      rating INTEGER CHECK (rating >= 1 AND rating <= 5),
      avatar_url VARCHAR(500),
      is_featured BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Contact messages
  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      subject VARCHAR(255),
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create indexes
  await sql`CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_advisor_requests_status ON advisor_requests(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)`;

  console.log('✅ Tables created successfully');
}

async function seedCourses() {
  for (const course of courses) {
    // Insert course
    const [insertedCourse] = await sql`
      INSERT INTO courses (
        slug, title, subtitle, category, level, duration, 
        weekly_hours, batch_size, next_batch, short_description, 
        transformation_promise, color, icon
      ) VALUES (
        ${course.slug}, ${course.title}, ${course.subtitle}, 
        ${course.category}, ${course.level}, ${course.duration},
        ${course.weeklyHours}, ${course.batchSize}, ${course.nextBatch},
        ${course.shortDescription}, ${course.transformationPromise},
        ${course.color}, ${course.icon}
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        subtitle = EXCLUDED.subtitle,
        updated_at = CURRENT_TIMESTAMP
      RETURNING id
    `;
    
    const courseId = insertedCourse.id;
    
    // Delete existing related data
    await sql`DELETE FROM course_outcomes WHERE course_id = ${courseId}`;
    await sql`DELETE FROM course_tools WHERE course_id = ${courseId}`;
    await sql`DELETE FROM course_included WHERE course_id = ${courseId}`;
    await sql`DELETE FROM curriculum_topics WHERE curriculum_id IN (SELECT id FROM course_curriculum WHERE course_id = ${courseId})`;
    await sql`DELETE FROM course_curriculum WHERE course_id = ${courseId}`;
    await sql`DELETE FROM project_stack WHERE project_id IN (SELECT id FROM course_projects WHERE course_id = ${courseId})`;
    await sql`DELETE FROM course_projects WHERE course_id = ${courseId}`;
    await sql`DELETE FROM course_career_roles WHERE course_id = ${courseId}`;
    
    // Insert outcomes
    for (let i = 0; i < course.outcomes.length; i++) {
      await sql`
        INSERT INTO course_outcomes (course_id, outcome, display_order)
        VALUES (${courseId}, ${course.outcomes[i]}, ${i})
      `;
    }
    
    // Insert tools
    for (let i = 0; i < course.tools.length; i++) {
      await sql`
        INSERT INTO course_tools (course_id, tool_name, display_order)
        VALUES (${courseId}, ${course.tools[i]}, ${i})
      `;
    }
    
    // Insert included items
    for (let i = 0; i < course.included.length; i++) {
      await sql`
        INSERT INTO course_included (course_id, item, display_order)
        VALUES (${courseId}, ${course.included[i]}, ${i})
      `;
    }
    
    // Insert curriculum
    for (let i = 0; i < course.curriculum.length; i++) {
      const curr = course.curriculum[i];
      const [insertedCurr] = await sql`
        INSERT INTO course_curriculum (course_id, week_range, title, display_order)
        VALUES (${courseId}, ${curr.range}, ${curr.title}, ${i})
        RETURNING id
      `;
      
      for (let j = 0; j < curr.topics.length; j++) {
        await sql`
          INSERT INTO curriculum_topics (curriculum_id, topic, display_order)
          VALUES (${insertedCurr.id}, ${curr.topics[j]}, ${j})
        `;
      }
    }
    
    // Insert projects
    for (let i = 0; i < course.projects.length; i++) {
      const project = course.projects[i];
      const [insertedProject] = await sql`
        INSERT INTO course_projects (course_id, title, description, display_order)
        VALUES (${courseId}, ${project.title}, ${project.description}, ${i})
        RETURNING id
      `;
      
      for (const tech of project.stack) {
        await sql`
          INSERT INTO project_stack (project_id, technology)
          VALUES (${insertedProject.id}, ${tech})
        `;
      }
    }
    
    // Insert career roles
    for (let i = 0; i < course.careerRoles.length; i++) {
      const role = course.careerRoles[i];
      await sql`
        INSERT INTO course_career_roles (course_id, role, demand, display_order)
        VALUES (${courseId}, ${role.role}, ${role.demand}, ${i})
      `;
    }
    
    console.log(`✓ Seeded course: ${course.title}`);
  }
  
  console.log('✅ Courses seeded successfully');
}
