import styles from "./page.module.css";

const indicators = [
  {
    id: "regional-syndromic-anomaly-index",
    title: "Regional Syndromic Anomaly Index",
    description:
      "Aggregated syndromic frequencies are compared against historical baselines to detect abnormal regional behavior without reference to individual cases.",
  },
  {
    id: "temporal-escalation-signal",
    title: "Temporal Escalation Signal",
    description:
      "Changes in frequency, severity, and temporal clustering are tracked to indicate acceleration risk while remaining non-diagnostic and descriptive only.",
  },
  {
    id: "severity-distribution-marker",
    title: "Severity Distribution Marker",
    description:
      "Shifts in reported severity levels are monitored to indicate potential systemic stress before any formal escalation is recognized.",
  },
  {
    id: "nutritional-management-correlation-signal",
    title: "Nutritional and Management Correlation Signal",
    description:
      "Non-causal correlations with feed changes, management shifts, or environmental context are noted as attention flags without attribution or assignment of responsibility.",
  },
  {
    id: "pre-epidemic-attention-marker",
    title: "Pre-Epidemic Attention Marker",
    description:
      "Persistent low-level signals are reviewed over time to indicate emerging systemic risk prior to any official recognition.",
  },
];

export default function IndicatorsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SAPSA</p>
          <h1>Indicators</h1>
          <p className={styles.lede}>
            SAPSA indicators provide executive-readable, defensible sanitary risk
            analytics that translate early, aggregated signals into structured
            situational awareness for institutional decision-making.
          </p>
        </header>

        <section className={styles.governance} aria-labelledby="governance">
          <h2 id="governance">Governance principles</h2>
          <ul className={styles.list}>
            <li>All indicators are non-diagnostic and do not describe cases.</li>
            <li>Correlation does not imply causation.</li>
            <li>SAPSA does not assign responsibility.</li>
          </ul>
        </section>

        <section className={styles.sectionGroup} aria-label="Indicators list">
          {indicators.map((indicator) => (
            <section
              key={indicator.id}
              className={styles.section}
              aria-labelledby={indicator.id}
            >
              <h2 id={indicator.id}>{indicator.title}</h2>
              <p>{indicator.description}</p>
            </section>
          ))}
        </section>

        <section className={styles.closing} aria-labelledby="closing">
          <h2 id="closing">Closing</h2>
          <p>
            SAPSA is a decision-support intelligence layer only. It does not
            issue alerts, publish clinical narratives, or replace regulatory or
            veterinary authority.
          </p>
        </section>
      </main>
    </div>
  );
}
