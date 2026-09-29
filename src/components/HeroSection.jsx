export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-bg-image"></div>
      {/* Overlay */}
      <div className="hero-overlay"></div>
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      {/* Content */}
      <div className="hero-content">
        <h1>
          Discover Your <span>Natural Glow</span>
        </h1>
        <p>
          Handcrafted candle collections, authentic intention spell jars, crystals & intuitive tarot consultations. Welcome to Glow Alchemy — Magical Store.
        </p>
        <a href="#products" className="hero-cta">
          Explore Creations →
        </a>
      </div>
    </section>
  );
}
