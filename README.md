# SkillsPro - Career-First Upskilling Platform

A modern, full-stack Next.js website for SkillsPro — India's career-first upskilling platform offering industry-aligned courses in AI, Data, QA Automation, and Digital Marketing.

## 🚀 Features

- **Modern UI/UX** — Dark theme with glassmorphism, 3D card effects, and smooth animations using Framer Motion
- **Course Management** — 4 comprehensive courses with detailed curriculum, projects, and career outcomes
- **EMI Payment Section** — Flexible payment options with interactive tenure selector
- **Advisor Request System** — Contact form with Neon PostgreSQL backend for lead management
- **Admin Dashboard** — Secure admin panel for managing student inquiries and tracking stats
- **Downloadable Curriculum PDFs** — Each course has a downloadable PDF brochure
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **SEO Optimized** — Metadata, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** Neon PostgreSQL (Serverless)
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skillspro
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
DATABASE_URL=your_neon_postgres_connection_string
ADMIN_PASSWORD=your_secure_admin_password
```

4. Set up the database:
```bash
# Run the database setup (creates tables)
npm run db:setup
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
skillspro/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── courses/           # Courses listing & detail pages
│   │   ├── contact/           # Contact/advisor request page
│   │   ├── placement/         # Placement stats page
│   │   ├── admin/             # Admin dashboard
│   │   └── api/               # API routes (advisor requests, admin)
│   ├── components/
│   │   ├── cards/             # CourseCard component
│   │   ├── forms/             # AdvisorForm component
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Homepage sections (Hero, Courses, EMI, etc.)
│   │   └── ui/                # Reusable UI components (Button, Input, etc.)
│   ├── data/
│   │   └── courses.ts         # Course data (curriculum, projects, tools)
│   └── lib/
│       ├── db.ts              # Database connection (Neon)
│       ├── schema.sql         # Database schema
│       └── utils.ts           # Utility functions
├── public/                     # Static assets (images, PDFs)
│   ├── course-*.png           # Course card images
│   ├── *.pdf                  # Downloadable curriculum PDFs
│   └── logo.png               # Brand assets
└── README.md
```

## 🎓 Courses

1. **Workflow Automation with AI Agents** — Build intelligent automation pipelines with n8n, Make, LangChain
2. **QA Automation** — Master Playwright, Cypress, and CI/CD testing
3. **Data Analyst** — Python, SQL, Power BI, Tableau for data-driven insights
4. **Digital Marketing with AI** — AI-powered SEO, paid ads, and growth marketing

Each course includes:
- Detailed curriculum breakdown
- Real-world projects
- Tool stack
- Career roles & demand
- Downloadable PDF brochure

## 🔐 Admin Panel

Access the admin dashboard at `/admin` with the password set in `.env.local`.

Features:
- View all advisor requests
- Update request status (Pending → Contacted → Enrolled)
- Export data to CSV
- Real-time stats dashboard

## 📞 Contact Information

- **Phone:** +91 95074 64707
- **Address:** 2nd Floor, Plot No 16A, Sector 16A, Hari Vihar, Kakrola, Dwarka, New Delhi – 110078

## 🚢 Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables (`DATABASE_URL`, `ADMIN_PASSWORD`)
4. Deploy

Vercel will automatically detect Next.js and configure the build settings.

## 📝 Database Setup

The database schema includes:
- `advisor_requests` table for storing student inquiries
- Automatic timestamp tracking
- Status management (pending, contacted, enrolled)

Run the setup script to create tables:
```bash
npm run db:setup
```

Or manually execute the SQL in `src/lib/schema.sql` in your Neon dashboard.

## 🎨 Design System

- **Colors:** Dark theme with violet/indigo/cyan accents
- **Typography:** Inter font family
- **Effects:** Glassmorphism, 3D transforms, glow effects
- **Animations:** Framer Motion for smooth transitions

## 📄 License

All rights reserved © 2025 SkillsPro

## 🤝 Contributing

This is a private project. For any inquiries, contact the development team.

---

Built with ❤️ for ambitious learners across India
