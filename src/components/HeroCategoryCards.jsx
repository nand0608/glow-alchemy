import { FiArrowRight } from 'react-icons/fi';

/**
 * 4 Core Product Category Cards directly below Hero Section:
 * 1. Candles
 * 2. Jar
 * 3. Bracelet
 * 4. Scrubs
 */
const categoryCards = [
  {
    id: 'cat-candles',
    name: 'Candles',
    subtitle: 'Hand-poured Botanical & Crystal Candles',
    image: '/category-candles.jpg',
    href: '#scented-decorative-candles',
    alt: 'Handcrafted Lotus Candle by Glow Alchemy',
  },
  {
    id: 'cat-jar',
    name: 'Jar',
    subtitle: 'Authentic Intention & Ritual Spell Jars',
    image: '/category-jar.jpg',
    href: '#love-spell-jar',
    alt: 'Sacred Ritual Jar with Evil Eye & Hamsa Charm',
  },
  {
    id: 'cat-bracelet',
    name: 'Bracelet',
    subtitle: 'Natural Crystal & Healing Energy Bracelets',
    image: '/category-bracelet.jpg',
    href: '#bracelets',
    alt: 'Natural Crystal Bead Bracelets',
  },
  {
    id: 'cat-scrubs',
    name: 'Scrubs',
    subtitle: 'Artisanal Botanical Bath & Glow Scrubs',
    image: '/category-scrubs.jpg',
    href: '#scrubs',
    alt: 'Handcrafted Botanical Glow Bath Scrub',
  },
];

export default function HeroCategoryCards() {
  const handleCardClick = (e, card) => {
    // If destination anchor exists on page, scroll smoothly
    const targetEl = document.querySelector(card.href);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-category-cards-section" aria-label="Featured Categories">
      <div className="hero-category-cards-container">
        <div className="hero-category-header">
          <span className="hero-category-eyebrow">Discover The Collection</span>
          <h2 className="hero-category-title">Shop by Category</h2>
          <div className="hero-category-divider" aria-hidden="true"></div>
        </div>

        <div className="hero-category-grid">
          {categoryCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="hero-category-card"
              onClick={(e) => handleCardClick(e, card)}
              aria-label={`Shop ${card.name} - ${card.subtitle}`}
            >
              <div className="hero-category-img-wrap">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="hero-category-img"
                />
                <div className="hero-category-overlay" aria-hidden="true" />
              </div>

              <div className="hero-category-info">
                <h3 className="hero-category-name">{card.name}</h3>
                <p className="hero-category-subtitle">{card.subtitle}</p>
                <span className="hero-category-cta">
                  <span>Shop Now</span>
                  <FiArrowRight className="hero-category-cta-icon" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
