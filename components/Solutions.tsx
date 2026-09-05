import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const solutions = [
  {
    n: "01",
    title: "Digital Twins",
    text: "Create live, decision-ready representations of assets, corridors, districts, and urban systems.",
    tag: "SIMULATE",
  },
  {
    n: "02",
    title: "Flood Intelligence",
    text: "Combine terrain, weather, sensing, and predictive analytics to model exposure and response.",
    tag: "PREDICT",
  },
  {
    n: "03",
    title: "Smart Infrastructure",
    text: "Connect field data, AI, and operational workflows to improve reliability and lifecycle performance.",
    tag: "OPTIMIZE",
  },
  {
    n: "04",
    title: "Construction Intelligence",
    text: "Turn project data into a continuously updated view of progress, risk, quality, and coordination.",
    tag: "DELIVER",
  },
];

export default function Solutions() {
  return (
    <section className="section section-light" id="solutions">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading">
            <p className="eyebrow dark">OUR SOLUTIONS</p>
            <h2>Technology that turns complexity into clarity.</h2>
          </div>
        </Reveal>

        <div className="solution-list">
          {solutions.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.06}>
              <article className="solution-row">
                <span className="solution-number">{item.n}</span>
                <div>
                  <span className="mini-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
                <button className="icon-button" aria-label={`Explore ${item.title}`}>
                  <ArrowUpRight size={22} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
