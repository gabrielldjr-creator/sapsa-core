import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SAPSA</p>
          <h1>System for Analysis of Animal Sanitary Patterns</h1>
          <p className={styles.lede}>
            An institutional analytical framework for early detection of
            systemic sanitary risk.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="problem-title">
          <h2 id="problem-title">The problem</h2>
          <p>
            Modern animal production generates early clinical signals long
            before diagnoses or regulatory notifications. Those signals remain
            fragmented across farms, suppliers, and service networks, leaving
            systemic patterns invisible at an institutional level.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="gap-title">
          <h2 id="gap-title">The gap</h2>
          <p>
            Between first abnormal field signals and formal recognition of
            sanitary events, there is a critical informational gap. In that
            interval, economic, reputational, and regulatory risks accumulate
            silently without shared situational awareness.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="what-title">
          <h2 id="what-title">What SAPSA is</h2>
          <ul className={styles.list}>
            <li>SAPSA reads patterns, not cases.</li>
            <li>SAPSA identifies when a system stops behaving normally.</li>
            <li>It does not diagnose, enforce, or expose any entity.</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="deliver-title">
          <h2 id="deliver-title">What SAPSA delivers</h2>
          <ul className={styles.list}>
            <li>Regional syndromic anomaly indices</li>
            <li>Temporal escalation indicators</li>
            <li>Nutritional and management risk correlation signals</li>
            <li>Pre-epidemic attention markers</li>
            <li>Aggregated, anonymized, defensible analytics</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="govern-title">
          <h2 id="govern-title">Governance and ethics</h2>
          <p>
            SAPSA operates through anonymization and aggregation to preserve
            confidentiality and prevent attribution. Ethical boundaries are
            explicit: the system does not identify farms, practitioners, or
            individual animals. It is designed solely as decision-support
            infrastructure.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="closing-title">
          <h2 id="closing-title">Closing statement</h2>
          <p className={styles.closing}>
            SAPSA is not an alert system. It is a sanitary intelligence layer.
          </p>
        </section>
      </main>
    </div>
  );
}
