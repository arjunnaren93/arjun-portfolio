import type { Job, Project, SkillCategory, Hobby } from "@/types";

export const jobs: Job[] = [
  {
    company: "GoFundMe",
    role: "Staff Analyst, Consumer Analytics",
    period: "Oct 2025 — Present",
    location: "Seattle, WA",
    current: true,
    bullets: [
      "Own the data for GoFundMe's consumer experience — continuously monitoring health metrics across the Organizer, Amplify, and Fundraiser Page funnels and proactively surfacing drops, anomalies, and opportunities to product and engineering.",
      "Designed and delivered the Share Attribution methodology that engineering had been unable to solve for nearly a year — analysed the data end-to-end and defined an optimal model to attribute an organizer's share action to a supporter's subsequent visit, enabling accurate downstream measurement.",
      "Build performance dashboards to track new product feature launches, giving PMs and engineers a real-time read on whether changes are moving the right metrics; primary analytics partner for experiment readouts run by data scientists.",
      "Championed AI-assisted analytics across the team — authored internal guides for Claude Code and MCP tooling, and drove adoption so the full analytics team now uses AI in their day-to-day workflows.",
      "Conducted a Share Rate deep dive that identified the root cause of an anomalous spike and flagged a structural decline trend — findings directly shaped roadmap prioritisation.",
    ],
  },
  {
    company: "Rothy's",
    role: "Sr. Manager, Data Analytics",
    period: "Mar 2019 — Oct 2025",
    location: "San Francisco, CA (Remote)",
    bullets: [
      "Spearheaded customer segmentation strategy, increasing conversion rates by 11%.",
      "Reduced lifetime value degradation of discount customers by 20% through data-driven strategies.",
      "Conducted a Lift test on Facebook campaigns, driving a 27% revenue increase for the Lapsed group.",
      "Implemented an Airflow pipeline integrating Google Sheets and AWS S3 into Redshift, visualized in Looker.",
      "Automated NPS feedback categorization with Python and OpenAI API, enhancing analysis efficiency.",
    ],
  },
  {
    company: "Art.com",
    role: "Sr. Marketing Data Analyst",
    period: "09/2017 — 03/2019",
    location: "San Francisco, CA",
    bullets: [
      "Increased landing page conversion rates by 18% through targeted optimizations.",
      "Developed Tableau dashboards, streamlining channel performance tracking.",
      "Enhanced forecasting accuracy via time series analysis.",
    ],
  },
  {
    company: "Fuelx",
    role: "Data Analyst, Business Operations",
    period: "10/2016 — 09/2017",
    location: "San Francisco, CA",
    bullets: [
      "Improved client retention rates from 73% to 88% through cohort analysis.",
      "Managed CPA-based campaigns, overseeing 2/3rds of company revenue.",
      "Delivered actionable insights via Tableau dashboards, optimizing campaign performance.",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Customer Segmentation Engine",
    description:
      "Built a full segmentation strategy at Rothy's that identified high-value customer cohorts and drove an 11% lift in conversion rates across targeted campaigns.",
    tags: ["Python", "SQL", "Redshift", "Looker"],
  },
  {
    number: "02",
    title: "Facebook Lift Test Framework",
    description:
      "Designed and executed a Lift test on Facebook campaigns for the Lapsed customer group, resulting in a 27% revenue increase through optimized audience targeting.",
    tags: ["A/B Testing", "Facebook Ads", "Python", "Statistics"],
  },
  {
    number: "03",
    title: "NPS Feedback Categorization",
    description:
      "Automated open-text NPS feedback classification using Python and the OpenAI API, eliminating manual tagging and unlocking faster product feedback loops.",
    tags: ["Python", "OpenAI API", "NLP", "Automation"],
  },
  {
    number: "04",
    title: "Airflow Data Pipeline",
    description:
      "Implemented a robust Airflow pipeline integrating Google Sheets and AWS S3 into Redshift, with a Looker layer for stakeholder reporting.",
    tags: ["Airflow", "AWS S3", "Redshift", "Looker", "Python"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Tools",
    skills: [
      { name: "SQL" },
      { name: "Python" },
      { name: "Claude Code" },
      { name: "Airflow" },
      { name: "dbt" },
      { name: "Git" },
    ],
  },
  {
    label: "Platforms & Data",
    skills: [
      { name: "Hex" },
      { name: "Looker" },
      { name: "Amplitude" },
      { name: "Optimizely" },
      { name: "AWS Redshift" },
      { name: "mParticle" },
    ],
  },
  {
    label: "Analytics & Methods",
    skills: [
      { name: "A/B Testing" },
      { name: "Funnel Analysis" },
      { name: "Attribution Modelling" },
      { name: "Customer Segmentation" },
      { name: "Product Analytics" },
      { name: "Experiment Readouts" },
    ],
  },
];

export const hobbies: Hobby[] = [
  {
    title: "Hiking & Outdoors",
    description:
      "Based in Seattle — the mountains are right there. Hiking clears my head the same way a good query does: one step at a time until the answer reveals itself.",
  },
  {
    title: "Photography",
    description:
      "Street photography and portraits. Finding signal in visual noise isn't too different from finding it in data.",
  },
  {
    title: "Building Side Projects",
    description:
      "Currently experimenting with LLM-powered data exploration tools. If I can make analytics more accessible, that's a win.",
  },
  {
    title: "Reading",
    description:
      "Behavioural economics, systems thinking, and sci-fi. Kahneman, Taleb, and whatever keeps the curiosity sharp.",
  },
];

export const marqueeItems = [
  "DATA ANALYTICS",
  "PYTHON",
  "SQL",
  "A/B TESTING",
  "ATTRIBUTION MODELLING",
  "LOOKER",
  "PRODUCT ANALYTICS",
  "CLAUDE CODE",
  "HEX",
  "STORYTELLING",
];

export const contact = {
  email: "arjun.naren93@gmail.com",
  linkedin: "https://linkedin.com/in/arjun-narendran",
  github: "https://github.com/arjunnaren93",
};
