import Reveal from "./Reveal";

export default function StoryPanel() {
  return (
    <section className="story-panel" id="industries">
      <div className="story-visual">
        <div className="city-grid" />
        <div className="map-node node-a" />
        <div className="map-node node-b" />
        <div className="map-node node-c" />
        <div className="map-line line-a" />
        <div className="map-line line-b" />
        <div className="story-label">LIVE URBAN SYSTEM MODEL</div>
      </div>
      <div className="story-copy">
        <Reveal>
          <p className="eyebrow">FROM DATA TO DECISIONS</p>
          <h2>See the city as a living system.</h2>
          <p className="story-text">
            Integrate physical assets, environmental conditions, operational data, and predictive models
            into one intelligence layer for planning, monitoring, and response.
          </p>
          <div className="metrics-grid">
            <div><strong>24/7</strong><span>situational awareness</span></div>
            <div><strong>1</strong><span>connected decision layer</span></div>
            <div><strong>AI</strong><span>predictive intelligence</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
