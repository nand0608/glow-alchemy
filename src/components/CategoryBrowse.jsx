const categories = [
  {
    name: 'Handcrafted Candles',
    subtitle: '5 Signature Collections',
    image: '/cat-candles.jpg',
    href: '#candles',
  },
  {
    name: 'Spell Jars & Intentions',
    subtitle: '7 Authentic Spell Jars',
    image: '/deal-crystal-tree.jpg',
    href: '#spell-jars',
  },
  {
    name: 'Crystals & Accessories',
    subtitle: 'Curated Natural Stones',
    image: '/cat-crystal-jewellery.jpg',
    href: '#crystals-accessories',
  },
  {
    name: 'Gift Hampers & Gifting',
    subtitle: 'Seasonal Spiritual Sets',
    image: '/cat-gift-hampers.jpg',
    href: '#gift-hampers',
  },
  {
    name: 'Customised Products',
    subtitle: 'Bespoke Creations',
    image: '/deal-gift-box.jpg',
    href: '#customised-products',
  },
  {
    name: 'Tarot Sessions',
    subtitle: '30m • 1h • 2h Readings',
    image: '/cat-session-booking.jpg',
    href: '#tarot-sessions',
  },
];

export default function CategoryBrowse({ onOpenBooking }) {
  const handleClick = (e, cat) => {
    if (cat.name === 'Tarot Sessions' && onOpenBooking) {
      e.preventDefault();
      onOpenBooking({ title: 'Tarot Sessions', duration: '30m – 2h', price: 'From ₹1,000' });
    }
  };

  return (
    <section className="category-browse">
      <div className="category-browse-inner">
        <div className="section-header" style={{ marginBottom: '28px', textAlign: 'center' }}>
          <h2>Explore By Category</h2>
          <p>Handcrafted offerings, authentic spell jars, and intuitive readings from our studio</p>
        </div>
        <div className="category-browse-grid">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="category-browse-card"
              onClick={(e) => handleClick(e, cat)}
            >
              <div className="category-browse-img-wrap">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <span className="category-browse-label">{cat.name}</span>
              <span className="category-browse-sublabel">{cat.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
