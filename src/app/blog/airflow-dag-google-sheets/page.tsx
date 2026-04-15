"use client";

import Link from "next/link";

export default function AirflowDagPost() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Back link */}
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gray-500)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "3rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
        >
          ← All posts
        </Link>

        {/* Meta */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--gray-500)", textTransform: "uppercase" }}>
              December 25, 2024
            </span>
            <span style={{ color: "var(--gray-700)" }}>·</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--gray-500)", textTransform: "uppercase" }}>
              6 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            Creating a DAG to Schedule a Report to Google Sheets via Airflow
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "1.1rem",
              color: "var(--gray-400)",
              fontStyle: "italic",
            }}
          >
            A step-by-step guide
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {["Airflow", "Python", "Google Sheets", "Redshift", "Astronomer"].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid var(--accent-dim)",
                padding: "0.2rem 0.5rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--gray-800)", marginBottom: "3rem" }} />

        {/* Article body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          <P>
            This tutorial walks through building an Airflow DAG that automates report generation
            by querying Amazon Redshift, combining data, and uploading results to Google Sheets
            — using Astronomer, Docker, and Airflow running locally.
          </P>

          <H2>What You&apos;ll Learn</H2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Setting up Docker and Astronomer locally",
              "Configuring Airflow to query Amazon Redshift",
              "Setting up Google Cloud Console for Sheets API access",
              "Writing and scheduling an Airflow DAG to automate report generation",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>

          <H2>Prerequisites</H2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Docker installed",
              "Astronomer CLI installed",
              "Access to an Amazon Redshift cluster with read, write, and create table privileges",
              "Google account with Google Sheets access",
              "Basic Python and SQL familiarity",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>

          <H2>Step 1: Setting Up Amazon Redshift</H2>
          <P>
            Create a schema for staging tables, then prepare three SQL queries:
          </P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "company_metrics_WTD.sql — Generates Week-to-Date metrics",
              "company_metrics_MTD.sql — Generates Month-to-Date metrics",
              "company_metrics_Union.sql — Unions WTD and MTD results into a single table",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
          <P>Test all queries in your Redshift cluster before proceeding.</P>

          <H2>Step 2: Setting Up Google Cloud Console</H2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Access Google Cloud Console",
              "Create or select a project",
              "Enable the Google Sheets API",
              "Generate a Service Account Key and save the JSON file locally",
              "Share your Google Sheet with the Service Account email",
            ].map((item, i) => (
              <li key={i} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ol>

          <H2>Step 3: Installing Docker and Astronomer Locally</H2>
          <P>
            Download Docker from Docker&apos;s website and verify your installation with:
          </P>
          <Code>docker --version</Code>
          <P>Install the Astronomer CLI via Homebrew:</P>
          <Code>brew install astro</Code>
          <P>Verify with <InlineCode>astro version</InlineCode>.</P>

          <H2>Step 4: Setting Up Airflow Locally</H2>
          <P>
            Initialize an Astronomer project, which scaffolds the essential directories and files:
          </P>
          <Code>astro dev init</Code>
          <P>This creates <InlineCode>dags/</InlineCode>, <InlineCode>include/</InlineCode>, <InlineCode>plugins/</InlineCode>, and <InlineCode>requirements.txt</InlineCode>.</P>

          <P>Add the following to <InlineCode>requirements.txt</InlineCode>:</P>
          <Code>{`pandas
apache-airflow-providers-amazon
google-api-python-client
google-auth
apache-airflow-providers-google`}</Code>

          <P>Start Airflow (Docker must be running):</P>
          <Code>astro dev start</Code>
          <P>Access the Airflow UI at <InlineCode>localhost:8080</InlineCode>.</P>

          <P>Then create two connections in the Airflow UI:</P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>redshift_default</strong> — your Redshift cluster details
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>google_sheets_default</strong> — path to your Service Account JSON
            </li>
          </ul>

          <H2>Step 5: Writing the DAG</H2>
          <P>
            Create a Python script in the <InlineCode>dags/</InlineCode> folder defining four tasks:
          </P>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Load WTD metrics via SQLExecuteQueryOperator",
              "Load MTD metrics via SQLExecuteQueryOperator",
              "Union results via SQLExecuteQueryOperator",
              "Upload to Google Sheets via SQLToGoogleSheetsOperator",
            ].map((item, i) => (
              <li key={i} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ol>
          <P>
            Schedule runs using a CRON expression. Note that Airflow schedules in UTC, so account
            for your timezone offset when setting the schedule.
          </P>

          <H2>Step 6: Running the DAG</H2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Upload your DAG script to the dags/ folder",
              "Restart Astronomer: astro dev restart",
              "Enable the DAG in the Airflow UI",
              "Trigger manually to test, or await the scheduled execution",
            ].map((item, i) => (
              <li key={i} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ol>

          <H2>Conclusion</H2>
          <P>
            That&apos;s it — a complete local Airflow environment automating a data pipeline from
            Redshift to Google Sheets. Once the DAG is running on a schedule, your reports update
            themselves. No more manual exports, no more stale spreadsheets.
          </P>

          <div style={{ borderTop: "1px solid var(--gray-800)", paddingTop: "2rem", marginTop: "1rem" }}>
            <a
              href="https://anarendran.medium.com/creating-a-dag-to-schedule-a-report-to-google-sheets-via-airflow-a-step-by-step-guide-faadadb24700"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
            >
              Originally published on Medium →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
        fontWeight: 400,
        color: "var(--white)",
        lineHeight: 1.3,
        marginTop: "0.5rem",
      }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-geist)",
        fontSize: "1rem",
        lineHeight: 1.85,
        color: "var(--gray-300)",
      }}
    >
      {children}
    </p>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre
      style={{
        background: "var(--gray-900)",
        border: "1px solid var(--gray-800)",
        padding: "1.25rem 1.5rem",
        overflowX: "auto",
        fontFamily: "var(--font-geist-mono)",
        fontSize: "0.85rem",
        color: "var(--gray-200)",
        lineHeight: 1.7,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {children}
    </pre>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: "0.85em",
        color: "var(--accent-light)",
        background: "var(--gray-900)",
        padding: "0.1em 0.4em",
        border: "1px solid var(--gray-800)",
      }}
    >
      {children}
    </code>
  );
}
