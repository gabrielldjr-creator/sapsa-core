import styles from "./page.module.css";

const deliveryModalities = [
  {
    title: "Periodic Analytical Reports",
    description:
      "Weekly, monthly, or quarterly intelligence summaries that provide aggregated trend context and non-diagnostic signals over defined reporting periods.",
  },
  {
    title: "Executive Risk Briefings",
    description:
      "High-level interpretive summaries for leadership that consolidate material shifts in sanitary signals and governance implications.",
  },
  {
    title: "Historical Pattern Reviews",
    description:
      "Retrospective analyses designed for internal audits, risk modeling, and longitudinal governance review.",
  },
  {
    title: "Secure Institutional Dashboards (Conceptual)",
    description:
      "Conceptual access to aggregated indicators within controlled environments, designed for institutional oversight without operational or clinical detail.",
  },
];

const accessLevels = [
  {
    title: "Observational Access",
    audience:
      "Risk analysts, compliance staff, and audit teams requiring high-level visibility.",
    visibility:
      "Aggregated indicators and regional summaries with limited temporal resolution.",
    exclusions:
      "No case narratives, no entity identification, and no operational guidance.",
  },
  {
    title: "Strategic Access",
    audience:
      "Risk committees, underwriting leadership, and quality directors.",
    visibility:
      "Expanded temporal context, escalation signals, and comparative baselines.",
    exclusions:
      "No attribution, no clinical interpretation, and no field-level data.",
  },
  {
    title: "Institutional Access",
    audience:
      "Enterprise governance bodies, reinsurance leadership, and regulatory affairs.",
    visibility:
      "Full set of sanctioned indicators, governance notes, and historical reviews.",
    exclusions:
      "No operational alerts, no enforcement triggers, and no entity exposure.",
  },
];

export default function DeliveryModelsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SAPSA</p>
          <h1>Delivery Models &amp; Access Levels</h1>
          <p className={styles.lede}>
            This page defines how SAPSA intelligence is delivered, who consumes
            each output, and the safeguards that keep distribution institutionally
            safe, contractable, and defensible.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="philosophy">
          <h2 id="philosophy">Intelligence Delivery Philosophy</h2>
          <p>
            SAPSA is delivered as periodic, aggregated intelligence outputs. It is
            not a real-time alerting system and is not positioned as an
            operational tool for day-to-day field decisions.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="modalities">
          <h2 id="modalities">Delivery Modalities</h2>
          <ul className={styles.list}>
            {deliveryModalities.map((modality) => (
              <li key={modality.title}>
                <strong>{modality.title}:</strong> {modality.description}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="access-levels">
          <h2 id="access-levels">Access Levels</h2>
          <div className={styles.cards}>
            {accessLevels.map((level) => (
              <article key={level.title} className={styles.card}>
                <h3>{level.title}</h3>
                <p>
                  <strong>Typical consumers:</strong> {level.audience}
                </p>
                <p>
                  <strong>Visible information:</strong> {level.visibility}
                </p>
                <p>
                  <strong>Not accessible:</strong> {level.exclusions}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="separation">
          <h2 id="separation">Separation from Field Operations</h2>
          <p>
            SAPSA outputs are not accessible to field veterinarians, do not guide
            clinical decisions, and do not replace surveillance or notification
            systems. They are designed for institutional governance only.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="safeguards">
          <h2 id="safeguards">Legal and Ethical Safeguards</h2>
          <ul className={styles.list}>
            <li>SAPSA outputs are non-diagnostic.</li>
            <li>Correlation does not imply causation.</li>
            <li>SAPSA does not assign responsibility.</li>
            <li>SAPSA does not trigger regulatory action.</li>
            <li>SAPSA is decision-support infrastructure only.</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="governance-role">
          <h2 id="governance-role">Role in Institutional Risk Governance</h2>
          <p>
            SAPSA supports risk committees, compliance frameworks, insurance
            underwriting, and crisis preparedness by providing aggregated
            intelligence that improves institutional readiness without operational
            interference.
          </p>
        </section>

        <section className={styles.closing} aria-labelledby="closing">
          <h2 id="closing">Closing</h2>
          <p>
            SAPSA remains a neutral intelligence layer, not an alert system. It
            informs strategic governance while preserving confidentiality and
            institutional boundaries.
          </p>
        </section>
      </main>
    </div>
  );
}
