import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import StoryPanel from "../components/StoryPanel";
import Capabilities from "../components/Capabilities";
import Insights from "../components/Insights";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="manifesto" id="about">
        <div className="container manifesto-inner">
          <Reveal>
            <p className="eyebrow dark">OUR POINT OF VIEW</p>
            <h2>
              Cities are becoming more complex.<br />
              <span>We make them understandable.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      <Solutions />
      <StoryPanel />
      <Capabilities />
      <Insights />
      <Footer />
    </main>
  );
}
