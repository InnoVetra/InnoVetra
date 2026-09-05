import Reveal from "./Reveal";

const items = [
  ["Data integration", "Unify GIS, IoT, BIM, weather, telemetry, and enterprise systems."],
  ["Simulation", "Model scenarios before decisions are made in the physical world."],
  ["Predictive analytics", "Detect emerging risks, anomalies, and operational patterns."],
  ["Decision intelligence", "Translate complex signals into prioritized actions and workflows."],
  ["Visualization", "Make infrastructure understandable with clear spatial and operational views."],
  ["Automation", "Connect insights to alerts, response plans, and repeatable operational processes."],
];

export default function Capabilities() {
  return (
    <section className="section section-dark" id="technology">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading dark-heading">
            <p className="eyebrow">TECHNOLOGY</p>
            <h2>One platform. Multiple layers of intelligence.</h2>
          </div>
        </Reveal>
        <div className="capability-grid">
          {items.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="capability-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
