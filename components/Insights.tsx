import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  ["Digital Twins", "Why infrastructure digital twins are moving from visualization to decision systems"],
  ["Resilience", "Designing flood-aware cities with predictive intelligence"],
  ["Construction", "From fragmented project data to continuous situational awareness"],
];

export default function Insights() {
  return (
    <section className="section section-soft" id="insights">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading">
            <p className="eyebrow dark">INSIGHTS</p>
            <h2>Ideas for more intelligent infrastructure.</h2>
          </div>
        </Reveal>
        <div className="insight-grid">
          {posts.map(([category, title], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="insight-card">
                <div className={`insight-image visual-${i + 1}`}>
                  <span>{category}</span>
                </div>
                <div className="insight-body">
                  <p>{category}</p>
                  <h3>{title}</h3>
                  <a href="#contact">Read insight <ArrowUpRight size={16} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
