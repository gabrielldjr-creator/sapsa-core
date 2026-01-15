import styles from "./page.module.css";

const content = {
  title: "SAPSA",
  subtitle: "System for Analysis of Animal Sanitary Patterns",
  lede:
    "An institutional analytical framework for early detection of systemic sanitary risk.",
  sections: [
    {
      id: "problem-title",
      title: "The problem",
      body:
        "Modern animal production generates early clinical signals well before diagnoses or regulatory notifications. Those signals remain fragmented across farms, suppliers, and service networks, leaving systemic patterns effectively invisible at an institutional level.",
    },
    {
      id: "gap-title",
      title: "The gap",
      body:
        "Between initial abnormal field signals and formal recognition of sanitary events, a material informational gap persists. During this interval, economic, reputational, and regulatory risks can accumulate without shared, defensible situational awareness.",
    },
    {
      id: "what-title",
      title: "What SAPSA is",
      list: [
        "SAPSA reads patterns, not cases.",
        "SAPSA identifies when a system stops behaving normally.",
        "It does not diagnose, enforce, or expose any entity.",
      ],
    },
    {
      id: "deliver-title",
      title: "What SAPSA delivers",
      list: [
        "Regional syndromic anomaly indices",
        "Temporal escalation indicators",
        "Nutritional and management risk correlation signals",
        "Pre-epidemic attention markers",
        "Aggregated, anonymized, defensible analytics",
      ],
    },
    {
      id: "govern-title",
      title: "Governance and ethics",
      body:
        "SAPSA operates through anonymization and aggregation to preserve confidentiality and prevent attribution. Ethical boundaries are explicit: the system does not identify farms, practitioners, or individual animals. It is designed solely as decision-support infrastructure.",
    },
    {
      id: "closing-title",
      title: "Closing statement",
      closing:
        "SAPSA is not an alert system. It is a sanitary intelligence layer.",
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{content.title}</p>
          <h1>{content.subtitle}</h1>
          <p className={styles.lede}>{content.lede}</p>
        </header>

        {content.sections.map((section) => (
          <section
            key={section.id}
            className={styles.section}
            aria-labelledby={section.id}
          >
            <h2 id={section.id}>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.list ? (
              <ul className={styles.list}>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.closing ? (
              <p className={styles.closing}>{section.closing}</p>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
