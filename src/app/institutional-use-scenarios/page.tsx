import styles from "./page.module.css";

const scenarios = [
  {
    id: "underwriting-risk-reassessment",
    title: "Underwriting Risk Reassessment",
    description:
      "SAPSA indicators inform periodic reassessment of exposure assumptions and portfolio sensitivity. The context is advisory and does not trigger policy changes or actions.",
  },
  {
    id: "early-internal-risk-escalation",
    title: "Early Internal Risk Escalation",
    description:
      "Risk committees use SAPSA signals to elevate internal attention levels before external recognition or media exposure, supporting structured review rather than response.",
  },
  {
    id: "supply-chain-vulnerability-review",
    title: "Supply Chain Vulnerability Review",
    description:
      "Aggregated regional patterns inform strategic reviews of feed, logistics, and sourcing dependencies, without implying causality or operational direction.",
  },
  {
    id: "crisis-preparedness-and-simulation",
    title: "Crisis Preparedness and Simulation",
    description:
      "Historical indicators support internal simulations and contingency planning, reinforcing readiness without implying imminent events.",
  },
  {
    id: "regulatory-readiness-and-communication",
    title: "Regulatory Readiness and Communication",
    description:
      "SAPSA supports preparedness for regulatory inquiries or audits by providing defensible, aggregated context without replacing official reporting channels.",
  },
];

export default function InstitutionalUseScenariosPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SAPSA</p>
          <h1>Institutional Use Scenarios</h1>
          <p className={styles.lede}>
            These scenarios describe decision-support contexts in which SAPSA is
            used to structure institutional deliberation under uncertainty.
          </p>
        </header>

        <section className={styles.governance} aria-labelledby="governance">
          <h2 id="governance">Governance principles</h2>
          <ul className={styles.list}>
            <li>SAPSA does not trigger operational decisions.</li>
            <li>SAPSA outputs do not justify unilateral action.</li>
            <li>SAPSA supports reflection, not response.</li>
            <li>SAPSA reduces uncertainty, not risk itself.</li>
          </ul>
        </section>

        <section className={styles.sectionGroup} aria-label="Scenario list">
          {scenarios.map((scenario) => (
            <section
              key={scenario.id}
              className={styles.section}
              aria-labelledby={scenario.id}
            >
              <h2 id={scenario.id}>{scenario.title}</h2>
              <p>{scenario.description}</p>
            </section>
          ))}
        </section>

        <section className={styles.closing} aria-labelledby="closing">
          <h2 id="closing">Closing</h2>
          <p>
            SAPSA remains an internal intelligence reference layer for
            institutional governance and planning, not an alert system and not
            an operational tool.
          </p>
        </section>
      </main>
    </div>
  );
}
