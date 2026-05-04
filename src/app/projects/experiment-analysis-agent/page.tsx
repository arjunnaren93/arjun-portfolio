"use client";

import Link from "next/link";

export default function ExperimentAnalysisAgentPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Back link */}
        <Link
          href="/#projects"
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
          ← All projects
        </Link>

        {/* Meta */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--gray-500)", textTransform: "uppercase" }}>
              May 2026
            </span>
            <span style={{ color: "var(--gray-700)" }}>·</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--gray-500)", textTransform: "uppercase" }}>
              12 min read
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
            Building an Automated Experiment Analysis Agent with Claude Code
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "1.1rem",
              color: "var(--gray-400)",
              fontStyle: "italic",
            }}
          >
            What used to take a data scientist 1–2 days now runs autonomously in under 15 minutes.
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {["Claude Code", "Python", "SQL", "Snowflake", "A/B Testing", "Statistics", "Plotly", "Slack"].map((tag) => (
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

          <H2>The Problem</H2>
          <P>
            Every A/B experiment at a product company ends the same way: a data scientist spends 1–2 days doing repetitive, largely mechanical work.
          </P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Writing SQL to pull cohort and outcome data from a data warehouse",
              "Running statistical tests (t-tests, z-tests, Bonferroni correction) in a notebook",
              "Building results tables and charts by hand",
              "Writing a stakeholder narrative",
              "Setting up monitoring to watch metrics daily",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
          <P>
            At companies running 15–20 experiments per quarter, this adds up to weeks of DS time per year spent on work that follows the same pattern every time. It&apos;s a solved problem we keep re-solving.
          </P>

          <H2>The Solution: A Claude Code Agent</H2>
          <P>
            Instead of building a traditional application, I built a Claude Code workflow agent — a system where Claude Code acts as the orchestrating brain, calling specialist skills and Python tools to produce the full results package.
          </P>
          <P>
            The key insight: an experiment design document (XPD) already contains everything needed to automate the analysis. You just need an agent smart enough to read it and drive the pipeline.
          </P>
          <P>What the agent produces from a single prompt:</P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "An interactive HTML dashboard with Plotly charts and a timeline slider",
              "A DS working document (.docx) with 9 sections including embedded charts",
              "Daily Slack monitoring with intelligent summaries",
              "All intermediate artifacts (results.json, snapshots.json, data_quality.json)",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>

          <H2>Architecture</H2>
          <P>
            The most important design decision: three distinct layers with clear separation of concerns.
          </P>
          <div style={{ border: "1px solid var(--gray-800)", background: "var(--gray-950, #090909)", overflowX: "auto", padding: "1.5rem 1rem" }}>
            <svg
              viewBox="0 0 640 470"
              width="100%"
              style={{ display: "block", minWidth: "520px" }}
              aria-label="Architecture diagram"
            >
              <defs>
                <marker id="arch-arrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                  <polygon points="0 0, 10 4, 0 8" style={{ fill: "var(--gray-600)" }} />
                </marker>
              </defs>

              {/* User input node */}
              <rect x="90" y="10" width="460" height="38" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--gray-700)", strokeWidth: 1 }} />
              <text x="320" y="33" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-300)", fontFamily: "var(--font-geist-mono), monospace" }}>
                User pastes experiment design doc to Claude Code
              </text>

              {/* Arrow: User → Claude Code */}
              <line x1="320" y1="48" x2="320" y2="78" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} markerEnd="url(#arch-arrow)" />

              {/* Claude Code node */}
              <rect x="185" y="80" width="270" height="38" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--accent)", strokeWidth: 1 }} />
              <text x="320" y="103" textAnchor="middle" fontSize="12" style={{ fill: "var(--white)", fontFamily: "var(--font-geist-mono), monospace" }}>
                Claude Code (orchestrator)
              </text>

              {/* Branch lines */}
              <line x1="320" y1="118" x2="320" y2="142" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} />
              <line x1="75" y1="142" x2="565" y2="142" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} />
              <line x1="75" y1="142" x2="75" y2="170" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} markerEnd="url(#arch-arrow)" />
              <line x1="320" y1="142" x2="320" y2="170" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} markerEnd="url(#arch-arrow)" />
              <line x1="565" y1="142" x2="565" y2="170" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} markerEnd="url(#arch-arrow)" />

              {/* Methodology Skill node */}
              <rect x="5" y="172" width="140" height="76" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--gray-700)", strokeWidth: 1 }} />
              <text x="75" y="196" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>Methodology</text>
              <text x="75" y="213" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>Skill</text>
              <text x="75" y="234" textAnchor="middle" fontSize="10" style={{ fill: "var(--gray-500)", fontFamily: "var(--font-geist-mono), monospace" }}>(what to do)</text>

              {/* SQL Writer Skill node */}
              <rect x="245" y="172" width="150" height="76" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--gray-700)", strokeWidth: 1 }} />
              <text x="320" y="196" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>SQL Writer</text>
              <text x="320" y="213" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>Skill</text>
              <text x="320" y="234" textAnchor="middle" fontSize="10" style={{ fill: "var(--gray-500)", fontFamily: "var(--font-geist-mono), monospace" }}>(how to implement)</text>

              {/* Data Warehouse MCP node */}
              <rect x="490" y="172" width="145" height="76" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--gray-700)", strokeWidth: 1 }} />
              <text x="562" y="196" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>Data Warehouse</text>
              <text x="562" y="213" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-200)", fontFamily: "var(--font-geist-mono), monospace" }}>MCP Tool</text>
              <text x="562" y="234" textAnchor="middle" fontSize="10" style={{ fill: "var(--gray-500)", fontFamily: "var(--font-geist-mono), monospace" }}>(runs the SQL)</text>

              {/* Arrow: Methodology → Python scripts */}
              <line x1="75" y1="248" x2="75" y2="310" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} />
              <line x1="75" y1="310" x2="250" y2="310" style={{ stroke: "var(--gray-600)", strokeWidth: 1 }} markerEnd="url(#arch-arrow)" />

              {/* Python scripts box */}
              <rect x="252" y="272" width="383" height="190" rx="2" style={{ fill: "var(--gray-900)", stroke: "var(--gray-700)", strokeWidth: 1 }} />
              <text x="443" y="292" textAnchor="middle" fontSize="11" style={{ fill: "var(--gray-400)", fontFamily: "var(--font-geist-mono), monospace" }}>Python scripts (tools)</text>
              <line x1="252" y1="302" x2="635" y2="302" style={{ stroke: "var(--gray-800)", strokeWidth: 1 }} />
              <line x1="412" y1="302" x2="412" y2="462" style={{ stroke: "var(--gray-800)", strokeWidth: 1 }} />

              {[
                ["run_stats.py", "→ results.json"],
                ["build_snapshots", "→ snapshots.json"],
                ["render_report", "→ HTML"],
                ["generate_gdoc", "→ .docx"],
              ].map(([script, output], i) => (
                <g key={script}>
                  <text x="272" y={330 + i * 38} fontSize="11" style={{ fill: "var(--gray-300)", fontFamily: "var(--font-geist-mono), monospace" }}>{script}</text>
                  <text x="424" y={330 + i * 38} fontSize="11" style={{ fill: "var(--accent)", fontFamily: "var(--font-geist-mono), monospace" }}>{output}</text>
                </g>
              ))}
            </svg>
          </div>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Layer 1 — Methodology Skill:</strong> A markdown-based skill loaded before any SQL is written. It enforces non-negotiable standards: the correct randomization unit, required data quality filters, and the right statistical tests.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Layer 2 — SQL Writer Skill:</strong> A specialized skill that knows the data warehouse schema deeply. Given the methodology spec, it finds the right tables, writes production-quality SQL, and has it reviewed against a requirements checklist.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Layer 3 — Python Tools:</strong> Pure computation — no LLM calls. Each script has a single responsibility and can be called directly or imported as a module.
            </li>
          </ul>

          <H2>The Two Clarifying Questions</H2>
          <P>
            The agent asks exactly two questions before running:
          </P>
          <P>
            <strong style={{ color: "var(--white)" }}>1. Date confirmation:</strong> &ldquo;I found these dates in the XPD: Start: [date] · End: [date]. Are these correct? If the end date isn&apos;t set yet, provide your best estimate — the daily monitoring cron stops automatically 3 days after this date.&rdquo;
          </P>
          <P>
            <strong style={{ color: "var(--white)" }}>2. Variant cutoff detection:</strong> The agent scans the doc for language like &ldquo;variant removed&rdquo;, &ldquo;stopped&rdquo;, &ldquo;final round&rdquo;. If detected: &ldquo;I see [variant] was removed on [date]. Should I analyze both phases with separate tabs in the timeline slider?&rdquo;
          </P>
          <P>Everything else is automatic. No manual intervention.</P>

          <H2>Statistical Methodology</H2>
          <P>
            The agent implements a rigorous methodology that&apos;s easy to get wrong manually.
          </P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Randomization unit:</strong> The agent loads a bucketing guide before writing any SQL — visitor-level vs. user-level experiments use different join keys. A common source of silent bugs in manual analysis.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Multiple comparison correction:</strong> Testing 3 variants × 4 metrics = 12 comparisons. Without correction, the probability of at least one false positive is ~46%. The agent applies Bonferroni correction automatically.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Statistical tests by metric type:</strong> Two-proportion z-test for rate metrics; Welch&apos;s t-test for mean metrics. Winsorization applied to revenue metrics to reduce outlier influence.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Data quality checks:</strong> SRM detection via chi-square test; contamination check for users appearing in multiple variants.
            </li>
          </ul>

          <H2>The Timeline Slider</H2>
          <P>
            The most technically interesting output is the timeline slider — an interactive feature that lets stakeholders drag through the experiment&apos;s history to see when each metric became statistically significant.
          </P>
          <P>
            The technical challenge: computing daily cumulative p-values requires running Welch&apos;s t-test at each intermediate sample size. For a 21-day experiment with 3 variants, that&apos;s 63 test computations.
          </P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "A daily SQL query (lightweight — just exposure counts) runs once per day and appends to a CSV",
              "Python accumulates cumulative sums and computes running variance using the online formula: variance = (sum_sq - sum²/n) / (n-1)",
              "The timeline is embedded as JSON in the HTML — no server needed, fully self-contained",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
          <P>
            Early p-values are unreliable due to noisy variance estimates during a partial traffic ramp. The slider makes this visible — stakeholders can see the p-value oscillate before stabilizing, which builds intuition about why &ldquo;peeking&rdquo; at experiments early is dangerous.
          </P>

          <H2>Handling Failure Gracefully</H2>
          <P>
            Large data warehouse queries on big experiments can hit timeout limits. Instead of failing silently, the agent follows a try-first / prompt-DS fallback pattern:
          </P>
          <pre style={{
            background: "var(--gray-900)",
            border: "1px solid var(--gray-800)",
            padding: "1.25rem 1.5rem",
            overflowX: "auto",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.78rem",
            color: "var(--gray-300)",
            lineHeight: 1.7,
            whiteSpace: "pre",
          }}>{`1. Claude Code attempts to run SQL via data warehouse MCP tool
2. ✅ Success → continues automatically
3. ❌ Timeout → prompts DS with exact instructions:
   "Please run sql/q1_all_metrics.sql in your Snowflake worksheet
    and save the results as output/stats_spec_raw.csv. Then say 'continue'."
4. DS provides the CSV → agent resumes from step 6`}</pre>
          <P>
            This pattern — try autonomously, fall back to human-in-the-loop with exact instructions — is a broadly useful pattern for any agent that interacts with external systems.
          </P>

          <H2>Daily Monitoring</H2>
          <P>A local cron job runs every morning and:</P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Queries the data warehouse for the latest daily snapshot",
              "Re-renders the HTML report (timeline slider gets a new data point)",
              "Regenerates the DS working document",
              "Posts an intelligent Slack summary to a monitoring channel",
              "Removes itself from crontab 3 days after the experiment's end date",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
          <P>
            The Slack summary generates a 2–3 sentence narrative rather than raw numbers: <em style={{ color: "var(--gray-400)" }}>&ldquo;Large variant crossed significance today on primary metric — worth a close look before making a ship decision.&rdquo;</em>
          </P>
          <P>
            A scheduled Claude Code remote agent also polls the Slack channel hourly for <em style={{ color: "var(--gray-400)" }}>show me [experiment-name]</em> requests and replies in thread with current results from Google Drive — no server needed.
          </P>

          <H2>Key Technical Decisions</H2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>No Anthropic API key needed.</strong> Claude Code itself is the AI layer — the Python scripts are pure computation tools with no LLM calls. Zero per-run cost beyond the Claude subscription.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Self-contained HTML.</strong> The report is a single .html file with all data embedded as JSON. No server, no database, no dependencies. Plotly loaded from CDN. The timeline slider is pure client-side JavaScript.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Direct function calls, not subprocess.</strong> The daily cron imports Python modules directly rather than spawning subprocesses. Faster, better error handling, no shell injection surface.
            </li>
          </ul>

          <H2>Results on a Real Experiment</H2>
          <P>
            I validated the agent on a live multi-variant experiment — three treatment variants against a control, run across millions of users. Details are confidential, but the structural findings illustrate the agent&apos;s value:
          </P>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "Primary metric: no variant reached significance in the 4-way phase — all INVESTIGATE",
              "Variant A: metric A significant in the expected direction · metric B significant in the opposite direction",
              "Variant B: inverse pattern — clear trade-off between the two secondary metrics",
              "A focused 2-way follow-on test isolated the best-performing variant and reached primary metric significance",
            ].map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
          <P>
            The agent also caught a methodological bug before the analysis ran: the daily snapshots query was using the wrong deduplication key, producing a subtly different cohort. The SQL requirements checklist surfaced it automatically.
          </P>

          {/* Results table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-geist-mono)", fontSize: "0.78rem" }}>
              <thead>
                <tr>
                  {["Task", "Manual", "Agent"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.6rem 1rem", borderBottom: "1px solid var(--gray-700)", color: "var(--gray-400)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["SQL writing", "2–3 hours", "~5 minutes"],
                  ["Stats + notebook", "2–3 hours", "~2 minutes"],
                  ["Report + narrative", "2–3 hours", "~3 minutes"],
                  ["Total", "1–2 days", "~15 minutes"],
                ].map(([task, manual, agent], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--gray-800)" }}>
                    <td style={{ padding: "0.6rem 1rem", color: "var(--gray-300)" }}>{task}</td>
                    <td style={{ padding: "0.6rem 1rem", color: "var(--gray-500)" }}>{manual}</td>
                    <td style={{ padding: "0.6rem 1rem", color: "var(--accent)" }}>{agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2>What I Learned</H2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Separation between methodology and implementation is critical.</strong> The biggest bug risk isn&apos;t the statistics — it&apos;s the SQL. Using a methodology skill as the spec before invoking a SQL-writing skill caught multiple issues that would have been silent bugs.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Human-in-the-loop fallbacks are more important than perfect automation.</strong> An agent that fails silently is worse than no agent at all.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>Claude Code workflows are real agents.</strong> The system has tools, makes decisions, composes specialist skills, and produces autonomous output from a single input.
            </li>
            <li style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--white)" }}>The timeline slider exposed something I hadn&apos;t anticipated.</strong> Early p-values are genuinely volatile during partial traffic ramps — viscerally clear when you can drag a slider and watch it happen.
            </li>
          </ul>

          <H2>Stack</H2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              ["Orchestration", "Claude Code (Claude Sonnet 4.6)"],
              ["Data warehouse", "Snowflake (via MCP tool)"],
              ["Statistics", "Python — scipy, statsmodels (Bonferroni via multipletests)"],
              ["Visualizations", "Plotly (embedded in self-contained HTML)"],
              ["Document generation", "python-docx"],
              ["Slack", "Incoming Webhooks + Claude Code scheduled remote agent"],
              ["Storage", "Google Drive (for Slack bot data)"],
            ].map(([label, value]) => (
              <li key={label} style={{ fontFamily: "var(--font-geist)", fontSize: "1rem", color: "var(--gray-300)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--white)" }}>{label}:</strong> {value}
              </li>
            ))}
          </ul>

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
