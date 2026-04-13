import { sql } from './db';
import { courses } from '@/data/courses';

export async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Seed courses
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
          category = EXCLUDED.category,
          level = EXCLUDED.level,
          duration = EXCLUDED.duration,
          weekly_hours = EXCLUDED.weekly_hours,
          batch_size = EXCLUDED.batch_size,
          next_batch = EXCLUDED.next_batch,
          short_description = EXCLUDED.short_description,
          transformation_promise = EXCLUDED.transformation_promise,
          color = EXCLUDED.color,
          icon = EXCLUDED.icon,
          updated_at = CURRENT_TIMESTAMP
        RETURNING id
      `;
      
      const courseId = insertedCourse.id;
      console.log(`✓ Inserted course: ${course.title}`);
      
      // Delete existing related data to avoid duplicates
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
        
        // Insert topics for this curriculum
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
        
        // Insert stack for this project
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
    }
    
    console.log('✅ Database seeded successfully!');
    return { success: true, message: 'Seeding completed' };
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ All seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}
