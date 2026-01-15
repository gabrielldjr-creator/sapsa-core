import styles from "./page.module.css";

const sections = [
  {
    id: "scope-of-function",
    title: "Scope of Function",
    body:
      "SAPSA is an analytical, non-operational, non-diagnostic intelligence layer. It interprets aggregated, pre-diagnostic veterinary signals to support internal strategic reflection only.",
  },
  {
    id: "data-governance",
    title: "Data Governance and Confidentiality",
    body:
      "All outputs are derived from aggregated and anonymized inputs. SAPSA does not expose identifiable entities, including farms, professionals, or animals, and does not provide case-level narratives.",
  },
  {
    id: "non-attribution",
    title: "Non-Attribution and Non-Causality",
    body:
      "SAPSA does not assign responsibility, establish causality, or imply fault or negligence. Its indicators are descriptive signals, not conclusions.",
  },
  {
    id: "decision-responsibility",
    title: "Decision-Making Responsibility",
    body:
      "All decisions remain solely with the contracting institution. SAPSA outputs cannot be used as directives, mandates, or substitutes for professional judgment.",
  },
  {
    id: "regulatory-relationship",
    title: "Regulatory Relationship",
    body:
      "SAPSA does not replace official surveillance systems, does not fulfill reporting obligations, and operates independently from regulatory enforcement processes.",
  },
  {
    id: "ethical-boundaries",
    title: "Ethical Boundaries",
    body:
      "SAPSA is designed to reduce harm, prevent panic, and avoid reputational damage through restrained, aggregated intelligence. It prioritizes confidentiality and measured interpretation over operational action.",
  },
  {
    id: "liability-limitation",
    title: "Liability Limitation Statement",
    body:
      "SAPSA is provided as decision-support infrastructure only. It is not an alert system, not a diagnostic platform, and not an operational response tool. Reliance on SAPSA outputs remains at the discretion and responsibility of the contracting institution.",
  },
];

export default function GovernanceLegalBoundariesPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SAPSA</p>
          <h1>Governance, Legal Boundaries &amp; Liability Safeguards</h1>
          <p className={styles.lede}>
            This page defines SAPSA&apos;s operational limits, legal safeguards,
            and ethical boundaries to reduce misinterpretation, misuse, and
            liability exposure.
          </p>
        </header>

        {sections.map((section) => (
          <section
            key={section.id}
            className={styles.section}
            aria-labelledby={section.id}
          >
            <h2 id={section.id}>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className={styles.closing} aria-labelledby="closing">
          <h2 id="closing">Closing Statement</h2>
          <p>
            SAPSA serves as a neutral intelligence reference layer for
            institutional governance. It supports internal deliberation and does
            not replace regulatory, clinical, or operational authority.
          </p>
        </section>
      </main>
    </div>
  );
}
