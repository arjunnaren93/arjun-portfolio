import type { Job, Project, SkillCategory, Hobby } from "@/types";

export const jobs: Job[] = [
  {
    company: "GoFundMe",
    role: "Staff Data Analyst",
    period: "2022 — Present",
    location: "San Francisco, CA",
    current: true,
    bullets: [
      "Lead data strategy for fundraising product, driving insights across millions of campaigns.",
      "Built end-to-end analytics pipelines in SQL and Python, reducing reporting lag by 60%.",
      "Partnered with product and engineering to define north-star metrics and OKR frameworks.",
    ],
  },
  {
    company: "Previous Company",
    role: "Senior Data Analyst",
    period: "2019 — 2022",
    location: "Remote",
    bullets: [
      "Developed dashboards and reporting infrastructure serving 500+ stakeholders.",
      "Designed A/B testing frameworks that informed key product decisions.",
      "Mentored junior analysts and established team-wide best practices.",
    ],
  },
  {
    company: "Early Career",
    role: "Data Analyst",
    period: "2017 — 2019",
    location: "New York, NY",
    bullets: [
      "Built predictive models to identify high-value customer segments.",
      "Automated recurring reports saving 10+ hours of manual work per week.",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Campaign Performance Dashboard",
    description:
      "Real-time analytics dashboard tracking fundraising campaign health across multiple dimensions. Built with Looker and custom SQL models.",
    tags: ["SQL", "Looker", "Python", "BigQuery"],
  },
  {
    number: "02",
    title: "Donor Lifetime Value Model",
    description:
      "Machine learning model predicting donor LTV to guide re-engagement campaigns. Increased targeted email revenue by 23%.",
    tags: ["Python", "scikit-learn", "BigQuery", "Airflow"],
  },
  {
    number: "03",
    title: "A/B Testing Framework",
    description:
      "Internal tooling for running statistically rigorous experiments across product features. Used by 15+ product and engineering teams.",
    tags: ["Python", "Statistics", "SQL", "Notion"],
  },
  {
    number: "04",
    title: "Data Quality Monitor",
    description:
      "Automated pipeline health checks and data quality scoring system that reduced data incidents by 40%.",
    tags: ["Python", "dbt", "Airflow", "Slack API"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Tools",
    skills: [
      { name: "SQL" },
      { name: "Python" },
      { name: "dbt" },
      { name: "Airflow" },
      { name: "BigQuery" },
      { name: "Snowflake" },
      { name: "Spark" },
      { name: "Git" },
    ],
  },
  {
    label: "Visualization",
    skills: [
      { name: "Looker" },
      { name: "Tableau" },
      { name: "Hex" },
      { name: "Metabase" },
      { name: "Matplotlib" },
      { name: "Plotly" },
    ],
  },
  {
    label: "Platforms & Methods",
    skills: [
      { name: "A/B Testing" },
      { name: "Machine Learning" },
      { name: "Product Analytics" },
      { name: "Data Modeling" },
      { name: "GCP" },
      { name: "AWS" },
    ],
  },
];

export const hobbies: Hobby[] = [
  {
    title: "Photography",
    description:
      "Street photography and portraits. There's something about freezing a moment that parallels what I do with data — finding signal in the chaos.",
  },
  {
    title: "Running",
    description:
      "Half-marathon enthusiast. The long runs are where I do my best thinking — structured problems, open mind.",
  },
  {
    title: "Side Projects",
    description:
      "Building small tools that scratch my own itches. Currently experimenting with LLM-powered data exploration.",
  },
  {
    title: "Reading",
    description:
      "Non-fiction heavy — behavioural economics, systems thinking, and the occasional sci-fi to keep the imagination sharp.",
  },
];

export const marqueeItems = [
  "DATA ANALYSIS",
  "PYTHON",
  "SQL",
  "VISUALIZATION",
  "STORYTELLING",
  "IMPACT",
  "MACHINE LEARNING",
  "PRODUCT",
  "A/B TESTING",
  "GOFUNDME",
];

export const contact = {
  email: "arjun@example.com",
  linkedin: "https://linkedin.com/in/arjunnarendran",
  github: "https://github.com/arjunnaren93",
};
