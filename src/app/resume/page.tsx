"use client";

function printResume() {
  const doc = document.querySelector(".resume-doc");
  if (!doc) return;

  const styles = Array.from(document.querySelectorAll("style"))
    .map((s) => s.innerHTML)
    .join("\n");

  const win = window.open("", "_blank", "width=900,height=1200");
  if (!win) return;

  win.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Arjun Narendran — Resume</title>
        <style>
          @page { margin: 0.55in 0.6in; size: letter; }
          body { margin: 0; padding: 0; background: white; }
          ${styles}
          .resume-doc { box-shadow: none !important; max-width: 100% !important; }
          a { color: #333 !important; text-decoration: none !important; }
        </style>
      </head>
      <body>${doc.outerHTML}</body>
    </html>
  `);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
    win.close();
  }, 300);
}

export default function ResumePage() {
  return (
    <>
      <style>{`
        .resume-page {
          background: #0a0a0a;
          min-height: 100vh;
          padding: 80px 1rem 4rem;
        }

        .resume-actions {
          max-width: 820px;
          margin: 0 auto 1rem;
          display: flex;
          justify-content: flex-end;
        }

        .resume-btn {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: transparent;
          color: #666;
          border: 1px solid #333;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }
        .resume-btn:hover { color: #d4a853; border-color: #d4a853; }

        .resume-doc {
          background: #fff;
          max-width: 820px;
          margin: 0 auto;
          padding: 52px 60px;
          color: #1a1a1a;
        }

        /* ── Header ── */
        .r-name {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 2.4rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
          margin: 0 0 0.3rem;
          color: #0f0f0f;
        }
        .r-title {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666;
          margin: 0 0 0.85rem;
        }
        .r-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 0.2rem 1rem;
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.04em;
          color: #666;
          padding-bottom: 1.1rem;
          border-bottom: 2px solid #0f0f0f;
          margin-bottom: 1.5rem;
        }
        .r-contact a { color: #555; text-decoration: none; }
        .r-contact a:hover { color: #0f0f0f; text-decoration: underline; }

        /* ── Section ── */
        .r-section { margin-bottom: 1.5rem; }

        .r-section-title {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #0f0f0f;
          border-bottom: 1px solid #ccc;
          padding-bottom: 0.35rem;
          margin-bottom: 0.9rem;
        }

        /* ── Summary ── */
        .r-summary {
          font-family: Georgia, serif;
          font-size: 0.875rem;
          line-height: 1.75;
          color: #333;
        }

        /* ── Job ── */
        .r-job { margin-bottom: 1.25rem; }
        .r-job:last-child { margin-bottom: 0; }

        .r-job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.2rem;
          margin-bottom: 0.1rem;
        }
        .r-company {
          font-family: Georgia, serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f0f0f;
        }
        .r-period {
          font-family: 'Courier New', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.06em;
          color: #888;
          white-space: nowrap;
        }
        .r-role-line {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.2rem;
          margin-bottom: 0.5rem;
        }
        .r-role {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
        }
        .r-location {
          font-family: 'Courier New', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.04em;
          color: #aaa;
        }
        .r-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .r-bullets li {
          font-family: Georgia, serif;
          font-size: 0.86rem;
          line-height: 1.6;
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
          gap: 0.45rem;
        }
        .r-skill-row {
          display: flex;
          gap: 0.75rem;
          font-family: Georgia, serif;
          font-size: 0.86rem;
          line-height: 1.55;
          color: #333;
        }
        .r-skill-label {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          min-width: 130px;
          padding-top: 0.15rem;
          flex-shrink: 0;
        }

        /* ── Education ── */
        .r-edu-item { margin-bottom: 0.75rem; }
        .r-edu-item:last-child { margin-bottom: 0; }
        .r-edu-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.2rem;
        }
        .r-edu-school {
          font-family: Georgia, serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f0f0f;
        }
        .r-edu-degree {
          font-family: 'Courier New', monospace;
          font-size: 0.63rem;
          letter-spacing: 0.06em;
          color: #666;
          margin-top: 0.1rem;
        }

        @media (max-width: 600px) {
          .resume-page { padding: 72px 0.5rem 3rem; }
          .resume-doc { padding: 32px 24px; }
          .r-name { font-size: 1.8rem; }
          .r-skill-label { min-width: 100px; }
        }
      `}</style>

      <div className="resume-page">

        {/* Download button */}
        <div className="resume-actions no-print">
          <button className="resume-btn" onClick={printResume}>
            ↓ Save as PDF
          </button>
        </div>

        <div className="resume-doc">

          {/* ── Header ── */}
          <h1 className="r-name">Arjun Narendran</h1>
          <p className="r-title">Staff Analyst, Consumer Analytics</p>
          <div className="r-contact">
            <span>Seattle, WA</span>
            <span>469-734-5729</span>
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
              decisions that move the business — across consumer product, ecommerce, and marketing.
              Currently at GoFundMe, owning funnel health for millions of fundraisers and designing
              attribution methodology that had blocked engineering for nearly a year. Track record of
              measurable impact: 27% revenue lift, 18% conversion improvement, client retention from
              73% to 88%. Expert in SQL, Python, A/B testing, and building AI-augmented analytics
              workflows that scale across teams.
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
                <li>Own the data for GoFundMe&apos;s consumer experience — continuously monitoring health metrics across the Organizer, Amplify, and Fundraiser Page funnels and proactively surfacing drops, anomalies, and opportunities to product and engineering.</li>
                <li>Designed and delivered the Share Attribution methodology that engineering had been unable to solve for nearly a year — analysed the data end-to-end and defined the optimal model attributing organizer share actions to supporter visits, enabling accurate downstream measurement.</li>
                <li>Primary analytics partner for experiment readouts; build launch dashboards giving PMs and engineers real-time signal on whether product changes move the right metrics.</li>
                <li>Championed AI-assisted analytics across the team — authored internal guides for Claude Code and MCP tooling, driving adoption so the full analytics team uses AI in day-to-day workflows.</li>
                <li>Conducted a Share Rate deep dive that identified the root cause of an anomalous spike and flagged a structural decline trend, directly shaping roadmap prioritisation.</li>
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
                <li>Spearheaded end-to-end customer segmentation strategy, increasing conversion rates by 11% across targeted campaigns.</li>
                <li>Reduced lifetime value degradation of discount customers by 20% through data-driven retention strategies.</li>
                <li>Designed and executed a Facebook Lift test for the Lapsed customer group, driving a 27% revenue increase through optimised audience targeting.</li>
                <li>Managed a Gift with Purchase strategy, boosting Retail Net sales by 7%.</li>
                <li>Optimised Retail Marketing strategy through geolocation analysis of new customer performance around retail stores.</li>
                <li>Implemented an Airflow pipeline integrating Google Sheets and AWS S3 into Redshift, with a Looker reporting layer used across the business.</li>
                <li>Automated NPS open-text feedback categorization using Python and the OpenAI API, eliminating manual tagging and accelerating product feedback loops.</li>
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
            <div className="r-edu-item">
              <div className="r-edu-header">
                <span className="r-edu-school">University of Texas at Dallas</span>
                <span className="r-period">Aug 2015 – Aug 2017</span>
              </div>
              <p className="r-edu-degree">MS · Information Technology and Management · Dallas, TX</p>
            </div>
            <div className="r-edu-item">
              <div className="r-edu-header">
                <span className="r-edu-school">Anna University</span>
                <span className="r-period">Jul 2011 – Jul 2015</span>
              </div>
              <p className="r-edu-degree">BE · Computer Science and Engineering · Chennai, India</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
