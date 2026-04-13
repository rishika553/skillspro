-- SkillsPro Database Schema
-- Run this file to create all necessary tables

-- Users table (for authentication and user management)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(50) DEFAULT 'student', -- student, admin, instructor
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table (stores course information)
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle TEXT,
  category VARCHAR(100),
  level VARCHAR(50), -- Beginner, Intermediate, Advanced
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
);

-- Course outcomes
CREATE TABLE IF NOT EXISTS course_outcomes (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  outcome TEXT NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- Course tools
CREATE TABLE IF NOT EXISTS course_tools (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  tool_name VARCHAR(100) NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- Course included items
CREATE TABLE IF NOT EXISTS course_included (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- Course curriculum
CREATE TABLE IF NOT EXISTS course_curriculum (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  week_range VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- Curriculum topics
CREATE TABLE IF NOT EXISTS curriculum_topics (
  id SERIAL PRIMARY KEY,
  curriculum_id INTEGER REFERENCES course_curriculum(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- Course projects
CREATE TABLE IF NOT EXISTS course_projects (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0
);

-- Project stack/technologies
CREATE TABLE IF NOT EXISTS project_stack (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES course_projects(id) ON DELETE CASCADE,
  technology VARCHAR(100) NOT NULL
);

-- Career roles
CREATE TABLE IF NOT EXISTS course_career_roles (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  role VARCHAR(255) NOT NULL,
  demand VARCHAR(50), -- Very High, High, Moderate
  display_order INTEGER DEFAULT 0
);

-- Advisor requests (from AdvisorForm)
CREATE TABLE IF NOT EXISTS advisor_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  course VARCHAR(255),
  user_role VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending', -- pending, contacted, converted, closed
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  batch_date VARCHAR(100),
  status VARCHAR(50) DEFAULT 'enrolled', -- enrolled, active, completed, dropped
  payment_status VARCHAR(50) DEFAULT 'pending', -- pending, paid, partial
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  UNIQUE(user_id, course_id)
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES users(id),
  category VARCHAR(100),
  tags TEXT[], -- PostgreSQL array for tags
  featured_image VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials
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
);

-- Contact messages (general inquiries)
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new', -- new, read, replied, closed
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_advisor_requests_status ON advisor_requests(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_advisor_requests_updated_at BEFORE UPDATE ON advisor_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
