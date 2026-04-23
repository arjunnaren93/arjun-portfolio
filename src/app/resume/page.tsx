"use client";

export default function ResumePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        .resume-wrap {
          background: #efefef;
          min-height: 100vh;
          padding: 2rem 1rem 4rem;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .resume-toolbar {
          max-width: 820px;
          margin: 0 auto 1.25rem;
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
        }

        .resume-btn {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 0.55rem 1.1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .resume-btn:hover { background: #333; }

        .resume-doc {
          background: #fff;
          max-width: 820px;
          margin: 0 auto;
          padding: 56px 64px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.10);
          color: #1a1a1a;
        }

        /* ── Header ── */
        .r-name {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 2.6rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin: 0 0 0.2rem;
          color: #0f0f0f;
        }
        .r-title {
          font-family: 'Courier New', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          margin: 0 0 1rem;
        }
        .r-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem 1.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          color: #555;
          padding-bottom: 1.25rem;
          border-bottom: 2px solid #0f0f0f;
          margin-bottom: 1.75rem;
        }
        .r-contact a { color: #555; text-decoration: none; }
        .r-contact a:hover { color: #0f0f0f; }

        /* ── Section ── */
        .r-section {
          margin-bottom: 1.75rem;
        }
        .r-section-title {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0f0f0f;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.4rem;
          margin-bottom: 1rem;
        }

        /* ── Summary ── */
        .r-summary {
          font-family: Georgia, serif;
          font-size: 0.92rem;
          line-height: 1.75;
          color: #333;
        }

        /* ── Job ── */
        .r-job { margin-bottom: 1.4rem; }
        .r-job:last-child { margin-bottom: 0; }

        .r-job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.25rem;
          margin-bottom: 0.15rem;
        }
        .r-company {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0f0f0f;
        }
        .r-period {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: #777;
          white-space: nowrap;
        }
        .r-role-line {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.25rem;
          margin-bottom: 0.6rem;
        }
        .r-role {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
        }
        .r-location {
          font-family: 'Courier New', monospace;
          font-size: 0.64rem;
          letter-spacing: 0.06em;
          color: #999;
        }
        .r-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .r-bullets li {
          font-family: Georgia, serif;
          font-size: 0.88rem;
          line-height: 1.65;
          color: #333;
          padding-left: 1rem;
          position: relative;
        }
        .r-bullets li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #bbb;
        }

        /* ── Skills ── */
        .r-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .r-skill-row {
          display: flex;
          gap: 0.5rem;
          font-family: Georgia, serif;
          font-size: 0.88rem;
          line-height: 1.55;
          color: #333;
        }
        .r-skill-label {
          font-family: 'Courier New', monospace;
          font-size: 0.64rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #777;
          min-width: 140px;
          padding-top: 0.15rem;
          flex-shrink: 0;
        }

        /* ── Education ── */
        .r-edu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.25rem;
        }
        .r-edu-school {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 600;
          color: #0f0f0f;
        }
        .r-edu-degree {
          font-family: Georgia, serif;
          font-size: 0.88rem;
          color: #444;
          margin-top: 0.15rem;
        }

        /* ── Print ── */
        @media print {
          @page { margin: 0.6in 0.65in; size: letter; }
          .resume-wrap { background: white !important; padding: 0 !important; }
          .resume-toolbar { display: none !important; }
          .resume-doc {
            box-shadow: none !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          .r-bullets li, .r-summary, .r-skill-row { color: #1a1a1a !important; }
          a { color: #333 !important; }
        }

        @media (max-width: 600px) {
          .resume-doc { padding: 32px 24px; }
          .r-name { font-size: 2rem; }
          .r-job-header, .r-role-line { flex-direction: column; gap: 0; }
          .r-skill-label { min-width: 110px; }
        }
      `}</style>

      <div className="resume-wrap">

        {/* Toolbar */}
        <div className="resume-toolbar no-print">
          <button className="resume-btn" onClick={() => window.print()}>
            ↓ Save as PDF
          </button>
        </div>

        {/* Document */}
        <div className="resume-doc">

          {/* ── Header ── */}
          <h1 className="r-name">Arjun Narendran</h1>
          <p className="r-title">Staff Analyst, Consumer Analytics</p>
          <div className="r-contact">
            <span>Seattle, WA</span>
            <a href="mailto:arjun.naren93@gmail.com">arjun.naren93@gmail.com</a>
            <a href="https://linkedin.com/in/arjun-narendran" target="_blank" rel="noreferrer">
              linkedin.com/in/arjun-narendran
            </a>
            <a href="https://github.com/arjunnaren93" target="_blank" rel="noreferrer">
              github.com/arjunnaren93
            </a>
          </div>

          {/* ── Summary ── */}
          <section className="r-section">
            <h2 className="r-section-title">Summary</h2>
            <p className="r-summary">
              Data analytics leader with 8+ years of experience translating complex data into
              decisions that move the business. Currently at GoFundMe, owning consumer funnel
              health across millions of fundraisers and designing attribution methodology that
              had blocked engineering for nearly a year. Track record of measurable impact —
              27% revenue lifts, 18% conversion improvements, client retention from 73% to 88%.
              Expert in SQL, Python, A/B testing, and building AI-augmented analytics workflows
              that scale across teams.
            </p>
          </section>

          {/* ── Experience ── */}
          <section className="r-section">
            <h2 className="r-section-title">Experience</h2>

            <div className="r-job">
              <div className="r-job-header">
                <span className="r-company">GoFundMe</span>
                <span className="r-period">Oct 2025 – Present</span>
              </div>
              <div className="r-role-line">
                <span className="r-role">Staff Analyst, Consumer Analytics</span>
                <span className="r-location">Seattle, WA</span>
              </div>
              <ul className="r-bullets">
                <li>
                  Own the data for GoFundMe&apos;s consumer experience — continuously monitoring
                  health metrics across the Organizer, Amplify, and Fundraiser Page funnels and
                  proactively surfacing drops, anomalies, and opportunities to product and engineering.
                </li>
                <li>
                  Designed and delivered the Share Attribution methodology that engineering had been
                  unable to solve for nearly a year — analysed the data end-to-end and defined the
                  optimal model to attribute organizer share actions to supporter visits, enabling
                  accurate downstream measurement.
                </li>
                <li>
                  Primary analytics partner for experiment readouts; build launch dashboards giving
                  PMs and engineers real-time signal on whether product changes move the right metrics.
                </li>
                <li>
                  Championed AI-assisted analytics across the team — authored internal guides for
                  Claude Code and MCP tooling, driving adoption so the full analytics team now uses
                  AI in their day-to-day workflows.
                </li>
                <li>
                  Conducted a Share Rate deep dive that identified the root cause of an anomalous
                  spike and flagged a structural decline trend, directly shaping roadmap prioritisation.
                </li>
              </ul>
            </div>

            <div className="r-job">
              <div className="r-job-header">
                <span className="r-company">Rothy&apos;s</span>
                <span className="r-period">Mar 2019 – Oct 2025</span>
              </div>
              <div className="r-role-line">
                <span className="r-role">Sr. Manager, Data Analytics</span>
                <span className="r-location">San Francisco, CA (Remote)</span>
              </div>
              <ul className="r-bullets">
                <li>
                  Spearheaded end-to-end customer segmentation strategy, increasing conversion
                  rates by 11% across targeted campaigns.
                </li>
                <li>
                  Reduced lifetime value degradation of discount customers by 20% through
                  data-driven retention and re-engagement strategies.
                </li>
                <li>
                  Designed and executed a Facebook Lift test for the Lapsed customer group,
                  driving a 27% revenue increase through optimised audience targeting.
                </li>
                <li>
                  Implemented an Airflow pipeline integrating Google Sheets and AWS S3 into
                  Redshift, with a Looker reporting layer used across the business.
                </li>
                <li>
                  Automated NPS open-text feedback categorization using Python and the OpenAI
                  API, eliminating manual tagging and accelerating product feedback loops.
                </li>
              </ul>
            </div>

            <div className="r-job">
              <div className="r-job-header">
                <span className="r-company">Art.com</span>
                <span className="r-period">Sep 2017 – Mar 2019</span>
              </div>
              <div className="r-role-line">
                <span className="r-role">Sr. Marketing Data Analyst</span>
                <span className="r-location">San Francisco, CA</span>
              </div>
              <ul className="r-bullets">
                <li>Increased landing page conversion rates by 18% through targeted optimisation and experimentation.</li>
                <li>Developed Tableau dashboards that became the standard for channel performance tracking.</li>
                <li>Enhanced forecasting accuracy through time series modelling across marketing channels.</li>
              </ul>
            </div>

            <div className="r-job">
              <div className="r-job-header">
                <span className="r-company">Fuelx</span>
                <span className="r-period">Oct 2016 – Sep 2017</span>
              </div>
              <div className="r-role-line">
                <span className="r-role">Data Analyst, Business Operations</span>
                <span className="r-location">San Francisco, CA</span>
              </div>
              <ul className="r-bullets">
                <li>Improved client retention from 73% to 88% through cohort analysis and targeted intervention strategies.</li>
                <li>Managed CPA-based campaigns representing two-thirds of company revenue.</li>
                <li>Delivered performance dashboards in Tableau that optimised campaign spend allocation.</li>
              </ul>
            </div>
          </section>

          {/* ── Skills ── */}
          <section className="r-section">
            <h2 className="r-section-title">Skills</h2>
            <div className="r-skills-grid">
              <div className="r-skill-row">
                <span className="r-skill-label">Analytics</span>
                <span>A/B Testing · Attribution Modelling · Funnel Analysis · Customer Segmentation · Cohort Analysis · Experiment Design · Product Analytics · Time Series Analysis</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Languages & Tools</span>
                <span>SQL · Python · Airflow · dbt · Git · Claude Code</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Platforms</span>
                <span>Looker · Hex · Amplitude · Optimizely · AWS Redshift · mParticle · Tableau · Google Analytics</span>
              </div>
            </div>
          </section>

          {/* ── Education ── */}
          <section className="r-section">
            <h2 className="r-section-title">Education</h2>
            <div className="r-edu-row">
              <span className="r-edu-school">[ Add your university ]</span>
              <span className="r-period">[ Graduation year ]</span>
            </div>
            <p className="r-edu-degree">[ Degree · Major ]</p>
          </section>

        </div>
      </div>
    </>
  );
}
