export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  weeklyHours: string;
  batchSize: string;
  nextBatch: string;
  shortDescription: string;
  transformationPromise: string;
  outcomes: string[];
  tools: string[];
  included: string[];
  curriculum: { range: string; title: string; topics: string[] }[];
  projects: { title: string; description: string; stack: string[] }[];
  careerRoles: { role: string; demand: string }[];
  color: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "ai-agents",
    title: "Workflow Automation with AI Agents",
    subtitle: "Build intelligent pipelines that work while you sleep",
    category: "AI & Automation",
    level: "Intermediate",
    duration: "10 Weeks",
    weeklyHours: "8–10 hrs/week",
    batchSize: "30 seats/batch",
    nextBatch: "May 5, 2025",
    shortDescription:
      "Master AI-powered workflow automation using no-code and low-code tools combined with Python scripting. Build production-grade AI agents, automate repetitive business processes, and integrate APIs end-to-end.",
    transformationPromise: "Go from manual tasks to fully automated AI-driven workflows in 10 weeks",
    outcomes: [
      "Design and deploy multi-step AI agent workflows",
      "Integrate OpenAI, LangChain, and REST APIs into automations",
      "Build chatbot systems with memory and tool-calling",
      "Automate CRM, email, data pipelines, and reporting",
      "Deploy automation solutions to production environments",
    ],
    tools: ["n8n", "Make (Integromat)", "Zapier", "LangChain", "OpenAI API", "Python", "Webhooks", "Airtable"],
    included: [
      "10 weeks of live instructor-led sessions",
      "30+ hands-on projects and use cases",
      "Lifetime access to recordings and materials",
      "1:1 mentorship sessions",
      "Resume and portfolio guidance",
      "Placement support and referrals",
      "Certificate of completion",
    ],
    curriculum: [
      {
        range: "Weeks 1–2",
        title: "Automation Foundations & No-Code Platforms",
        topics: ["Intro to workflow automation", "n8n setup and flows", "Zapier / Make deep dive", "Trigger and action patterns"],
      },
      {
        range: "Weeks 3–4",
        title: "AI Integration & OpenAI API",
        topics: ["OpenAI API fundamentals", "Prompt engineering for automations", "Text extraction and summarization", "Building AI-enhanced pipelines"],
      },
      {
        range: "Weeks 5–6",
        title: "LangChain & AI Agents",
        topics: ["LangChain agents and chains", "Tool-calling and memory", "RAG (Retrieval-Augmented Generation)", "Building your first AI agent"],
      },
      {
        range: "Weeks 7–8",
        title: "Business Integrations & APIs",
        topics: ["CRM and email automation", "REST API integration patterns", "Webhook-driven workflows", "Data transformation and routing"],
      },
      {
        range: "Weeks 9–10",
        title: "Production Deployment & Capstone",
        topics: ["Error handling and monitoring", "Deploying to cloud environments", "Capstone project: Full AI agent system", "Demo day and portfolio review"],
      },
    ],
    projects: [
      {
        title: "AI-Powered Lead Qualification Agent",
        description: "Build an agent that processes inbound leads, researches them via web APIs, scores them, and routes them to the right CRM pipeline automatically.",
        stack: ["n8n", "OpenAI API", "Airtable", "Webhooks"],
      },
      {
        title: "Automated Content Generation Pipeline",
        description: "Create an end-to-end pipeline that takes a topic, generates SEO blog content, creates social media posts, and schedules them across platforms.",
        stack: ["LangChain", "Make", "OpenAI", "Google Sheets"],
      },
      {
        title: "Customer Support Chatbot with Memory",
        description: "Develop a production-ready chatbot that remembers context, calls knowledge base APIs, and escalates to humans when confidence is low.",
        stack: ["LangChain", "Python", "OpenAI API", "Webhooks"],
      },
    ],
    careerRoles: [
      { role: "AI Automation Engineer", demand: "Very High" },
      { role: "Workflow Automation Specialist", demand: "High" },
      { role: "RPA & AI Developer", demand: "High" },
    ],
    color: "from-violet-600 to-purple-700",
    icon: "Bot",
  },
  {
    id: "2",
    slug: "qa-automation",
    title: "QA Automation with Playwright & Cypress",
    subtitle: "Build scalable test suites that catch bugs before they ship",
    category: "Testing & QA",
    level: "Intermediate",
    duration: "8 Weeks",
    weeklyHours: "8–12 hrs/week",
    batchSize: "25 seats/batch",
    nextBatch: "May 12, 2025",
    shortDescription:
      "Become a QA automation expert using industry-standard tools like Playwright and Cypress. Learn E2E testing, API testing, CI/CD integration, and how to build scalable, maintainable test architectures.",
    transformationPromise: "Land a QA automation role with full-stack testing skills in 8 weeks",
    outcomes: [
      "Write robust end-to-end test suites with Playwright and Cypress",
      "Automate API testing with Postman and JS-based frameworks",
      "Integrate test pipelines into GitHub Actions CI/CD",
      "Generate professional test reports and dashboards",
      "Architect scalable, modular test codebases",
    ],
    tools: ["Playwright", "Cypress", "Jest", "Postman", "GitHub Actions", "Selenium", "Allure", "TypeScript"],
    included: [
      "8 weeks of live instructor-led sessions",
      "25+ labs and real-world test scenarios",
      "Lifetime access to recordings and materials",
      "1:1 mentorship and code reviews",
      "Resume and LinkedIn profile support",
      "Placement support and referrals",
      "Certificate of completion",
    ],
    curriculum: [
      {
        range: "Weeks 1–2",
        title: "Testing Fundamentals & Selenium Basics",
        topics: ["Software testing principles", "Test types and strategies", "Selenium WebDriver basics", "Locators and assertions"],
      },
      {
        range: "Weeks 3–4",
        title: "Cypress Deep Dive",
        topics: ["Cypress setup and architecture", "Writing component and E2E tests", "Fixtures, intercepts, and stubs", "Cypress Cloud integration"],
      },
      {
        range: "Weeks 5–6",
        title: "Playwright Mastery",
        topics: ["Playwright setup and browser contexts", "Cross-browser and mobile testing", "Playwright API testing", "Page Object Model pattern"],
      },
      {
        range: "Weeks 7–8",
        title: "CI/CD Integration & Portfolio",
        topics: ["GitHub Actions workflows for tests", "Allure reporting setup", "API testing with Postman/Newman", "Capstone: Full test suite for a real app"],
      },
    ],
    projects: [
      {
        title: "E2E Test Suite for an E-Commerce App",
        description: "Build a full Playwright test suite covering login, checkout, cart, and order confirmation flows with parallel execution and Allure reports.",
        stack: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
      },
      {
        title: "API Test Automation Framework",
        description: "Create a reusable API testing framework using Postman collections + Newman with automated assertions and HTML report generation.",
        stack: ["Postman", "Newman", "JavaScript", "GitHub Actions"],
      },
      {
        title: "Cypress Component + E2E Test Suite",
        description: "Develop a modular Cypress test suite for a React SaaS app using the Page Object Model pattern and Cypress Cloud for parallelization.",
        stack: ["Cypress", "React", "JavaScript", "Cypress Cloud"],
      },
    ],
    careerRoles: [
      { role: "QA Automation Engineer", demand: "Very High" },
      { role: "SDET (Software Dev Engineer in Test)", demand: "High" },
      { role: "Test Lead / QA Architect", demand: "Moderate" },
    ],
    color: "from-emerald-500 to-teal-600",
    icon: "TestTube2",
  },
  {
    id: "3",
    slug: "data-analyst",
    title: "Data Analyst",
    subtitle: "Turn raw data into strategic decisions your company can act on",
    category: "Data & Analytics",
    level: "Beginner",
    duration: "12 Weeks",
    weeklyHours: "10–12 hrs/week",
    batchSize: "35 seats/batch",
    nextBatch: "May 19, 2025",
    shortDescription:
      "A comprehensive data analytics career program covering Python, SQL, Excel, Power BI, and Tableau. Learn to clean, analyze, visualize, and communicate data insights to drive business outcomes.",
    transformationPromise: "Master data analytics from zero and land your first analyst role in 12 weeks",
    outcomes: [
      "Analyze datasets using Python (Pandas, NumPy) and SQL",
      "Build interactive dashboards in Power BI and Tableau",
      "Apply statistics to draw meaningful business insights",
      "Master data cleaning, wrangling, and storytelling",
      "Present data narratives confidently to stakeholders",
    ],
    tools: ["Python", "SQL", "Power BI", "Tableau", "Pandas", "NumPy", "Excel", "Google Sheets"],
    included: [
      "12 weeks of live instructor-led sessions",
      "40+ data sets and projects",
      "Lifetime access to recordings and materials",
      "1:1 mentorship and portfolio reviews",
      "Resume and LinkedIn support",
      "Placement support and referrals",
      "Certificate of completion",
    ],
    curriculum: [
      {
        range: "Weeks 1–3",
        title: "Excel, SQL & Data Foundations",
        topics: ["Excel: formulas, pivot tables, charts", "SQL: SELECT, JOIN, GROUP BY, subqueries", "Intro to databases and data types", "Case study: Retail sales analysis"],
      },
      {
        range: "Weeks 4–6",
        title: "Python for Data Analysis",
        topics: ["Python basics and Jupyter setup", "Pandas for data manipulation", "NumPy for numerical computing", "Data cleaning and preprocessing"],
      },
      {
        range: "Weeks 7–9",
        title: "Data Visualization & Dashboards",
        topics: ["Matplotlib and Seaborn charts", "Power BI: data models and reports", "Tableau: stories and interactive dashboards", "Dashboard design best practices"],
      },
      {
        range: "Weeks 10–12",
        title: "Statistics, Insights & Capstone",
        topics: ["Descriptive and inferential statistics", "A/B testing fundamentals", "Business storytelling with data", "Capstone: Full analyst project and presentation"],
      },
    ],
    projects: [
      {
        title: "Sales Performance Dashboard",
        description: "Build an end-to-end Power BI dashboard analyzing 2+ years of retail sales data, with KPIs, drill-downs, and month-over-month trend analysis.",
        stack: ["Power BI", "SQL", "Excel"],
      },
      {
        title: "Customer Churn Prediction Analysis",
        description: "Use Python and Pandas to analyze a telecom dataset, identify churn drivers, and build a visual report with actionable recommendations.",
        stack: ["Python", "Pandas", "Seaborn", "Jupyter"],
      },
      {
        title: "Marketing Analytics Tableau Story",
        description: "Create a fully interactive Tableau story for a digital marketing dataset showing campaign ROI, channel performance, and audience insights.",
        stack: ["Tableau", "SQL", "Google Sheets"],
      },
    ],
    careerRoles: [
      { role: "Data Analyst", demand: "Very High" },
      { role: "Business Analyst", demand: "High" },
      { role: "BI Developer", demand: "High" },
    ],
    color: "from-blue-500 to-indigo-600",
    icon: "BarChart3",
  },
  {
    id: "4",
    slug: "digital-marketing-ai",
    title: "Digital Marketing with AI",
    subtitle: "Scale campaigns smarter with AI-powered marketing strategies",
    category: "Marketing & Growth",
    level: "Beginner",
    duration: "8 Weeks",
    weeklyHours: "6–8 hrs/week",
    batchSize: "40 seats/batch",
    nextBatch: "May 26, 2025",
    shortDescription:
      "Master modern digital marketing supercharged by AI. Learn AI-driven SEO, paid ads, social media automation, lead generation funnels, email marketing, and analytics — using the latest AI tools.",
    transformationPromise: "Run full-stack AI-powered digital marketing campaigns from day one",
    outcomes: [
      "Build and optimize Google Ads and Meta Ads campaigns",
      "Use AI tools for content creation, SEO, and copywriting",
      "Design lead generation funnels and landing pages",
      "Automate social media scheduling and A/B testing",
      "Track and report marketing performance with GA4",
    ],
    tools: ["ChatGPT", "Google Ads", "Meta Ads", "Semrush", "Canva", "HubSpot", "GA4", "Mailchimp"],
    included: [
      "8 weeks of live instructor-led sessions",
      "20+ live campaign exercises",
      "Lifetime access to recordings and materials",
      "1:1 mentorship and campaign reviews",
      "Resume and LinkedIn profile support",
      "Placement support and referrals",
      "Certificate of completion",
    ],
    curriculum: [
      {
        range: "Weeks 1–2",
        title: "Digital Marketing Foundations & AI Tools",
        topics: ["Digital marketing ecosystem overview", "Intro to AI tools for marketers", "ChatGPT for copywriting and ideation", "Content calendar and strategy with AI"],
      },
      {
        range: "Weeks 3–4",
        title: "SEO & Paid Search Advertising",
        topics: ["AI-powered keyword research", "On-page and technical SEO", "Google Ads setup and campaign types", "Search and Performance Max campaigns"],
      },
      {
        range: "Weeks 5–6",
        title: "Social Media & Meta Ads",
        topics: ["Meta Ads Manager fundamentals", "Audience targeting and retargeting", "Social media automation tools", "Creative and A/B testing strategies"],
      },
      {
        range: "Weeks 7–8",
        title: "Funnels, Email & Analytics",
        topics: ["Lead generation funnel design", "Email marketing with Mailchimp / HubSpot", "GA4 setup and event tracking", "Capstone: Full campaign from brief to results"],
      },
    ],
    projects: [
      {
        title: "AI-Assisted SEO Content Campaign",
        description: "Plan and execute a 30-day SEO content campaign using ChatGPT and Semrush, producing fully optimized articles with measurable ranking targets.",
        stack: ["ChatGPT", "Semrush", "Google Search Console", "Canva"],
      },
      {
        title: "Google & Meta Ads Campaign",
        description: "Set up, run, and optimize a dual-platform paid advertising campaign with audience segmentation, creative testing, and performance reporting.",
        stack: ["Google Ads", "Meta Ads", "GA4", "Canva"],
      },
      {
        title: "Lead Gen Funnel with Email Automation",
        description: "Design a full lead generation funnel — landing page, lead magnet, email sequence — and automate the nurture flow using HubSpot.",
        stack: ["HubSpot", "Mailchimp", "Canva", "GA4"],
      },
    ],
    careerRoles: [
      { role: "Digital Marketing Specialist", demand: "Very High" },
      { role: "Growth Marketer", demand: "High" },
      { role: "Performance Marketing Manager", demand: "High" },
    ],
    color: "from-orange-500 to-rose-500",
    icon: "TrendingUp",
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);
