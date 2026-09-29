import { useState } from 'react';
import { FiHeart, FiShoppingBag, FiInfo } from 'react-icons/fi';

const approvedProducts = [
  // 5 Official Candle Categories
  {
    id: 'candle-1',
    name: 'Scented Decorative Candles',
    category: 'Handcrafted Candle Collections',
    description: 'Artisanal sculpted decorative candle hand-poured with natural soy wax and scented with therapeutic essential oils.',
    price: '₹950',
    tag: 'Candle Collection',
    image: '/deal-candle.jpg',
  },
  {
    id: 'candle-2',
    name: 'Herbs Candles',
    category: 'Handcrafted Candle Collections',
    description: 'Infused with dried sacred botanicals, lavender, and white sage for space cleansing, peace, and spiritual grounding.',
    price: '₹1,150',
    tag: 'Candle Collection',
    image: '/cat-candles.jpg',
  },
  {
    id: 'candle-3',
    name: 'Crystal & Herbs Candles',
    category: 'Handcrafted Candle Collections',
    description: 'Poured over natural charged raw crystal stones and dried botanicals to elevate mindful meditation and altar spaces.',
    price: '₹1,450',
    tag: 'Candle Collection',
    image: '/cat-candles.jpg',
  },
  {
    id: 'candle-4',
    name: 'Customized Candles',
    category: 'Handcrafted Candle Collections',
    description: 'Custom-blended wax, personalized botanical choices, and tailored scent profiles crafted to reflect your personal intention.',
    price: '₹1,350',
    tag: 'Candle Collection',
    image: '/deal-gift-box.jpg',
  },
  {
    id: 'candle-5',
    name: 'Gift Hamper Candles',
    category: 'Handcrafted Candle Collections',
    description: 'Elegantly packaged gifting candle set with match bottles and botanical care cards, perfect for thoughtful sacred gifting.',
    price: '₹1,850',
    tag: 'Candle Collection',
    image: '/cat-gift-hampers.jpg',
  },

  // 7 Official Spell Jars (Symbolic & Reflection-Based)
  {
    id: 'jar-1',
    name: 'Love Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Symbolic intention jar layered with rose petals, rose quartz, and sweet botanicals for self-love, compassion, and emotional reflection.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/deal-crystal-tree.jpg',
  },
  {
    id: 'jar-2',
    name: 'Career Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Spiritual focus jar layered with tiger eye chips, bay leaf, and cedarwood for ambition, professional clarity, and personal confidence.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/deal-bracelet.jpg',
  },
  {
    id: 'jar-3',
    name: 'Money Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Reflection jar crafted with pyrite, cinnamon, and abundance herbs sealed with wax to anchor prosperity mindset and gratitude.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/deal-pendant.jpg',
  },
  {
    id: 'jar-4',
    name: 'Negativity Removal Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Spiritual cleansing jar formulated with black tourmaline, coarse sea salt, and cleansing herbs for personal boundary setting and peace.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/cat-session-booking.jpg',
  },
  {
    id: 'jar-5',
    name: 'Business Enhancement Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Intention jar layered with green aventurine, clove, and rosemary botanicals to inspire creative vision and entrepreneurial energy.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/cat-crystal-jewellery.jpg',
  },
  {
    id: 'jar-6',
    name: 'Reconcile Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Symbolic harmony jar with blue lace agate chips, lavender, and chamomile for inner calm, peace, and compassionate communication.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/cat-session-booking.jpg',
  },
  {
    id: 'jar-7',
    name: 'Happiness Spell Jar',
    category: 'Spell Jars & Intention Collections',
    description: 'Uplifting intention blend of sun-charged citrine, dried orange peel, and chamomile for cultivating radiant joy and optimistic energy.',
    price: '₹1,250',
    tag: 'Spell Jar',
    image: '/deal-gift-box.jpg',
  },
];

export default function ProductsGrid() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [wishlist, setWishlist] = useState({});

  const filterTabs = [
    'All',
    'Handcrafted Candles',
    'Spell Jars & Intentions',
    'Other Offerings & Gifting',
  ];

  const filteredProducts = approvedProducts.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Handcrafted Candles') {
      return p.category === 'Handcrafted Candle Collections';
    }
    if (selectedFilter === 'Spell Jars & Intentions') {
      return p.category === 'Spell Jars & Intention Collections';
    }
    return false;
  });

  const toggleWishlist = (name) => {
    setWishlist((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2>Official Brand Offerings</h2>
        <p>Handcrafted Candle Collections and Authentic Spell Jars from the Glow Alchemy Studio</p>
      </div>

      {/* Filter Tabs */}
      <div className="product-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`filter-tab-btn${selectedFilter === tab ? ' active' : ''}`}
            onClick={() => setSelectedFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Other Offerings Empty Catalogue / Configuration State */}
      {selectedFilter === 'Other Offerings & Gifting' ? (
        <div className="other-offerings-state">
          <div className="empty-catalogue-box">
            <FiInfo className="info-icon" />
            <h3>Crystals & Accessories • Gift Hampers & Seasonal Gifting • Customized Products</h3>
            <p>
              The individual product catalog for these categories is currently being finalized by the studio.
              We create bespoke intention products and custom gift sets on request.
            </p>
            <a
              href="https://wa.me/919876543210"
              className="custom-inquiry-btn"
              target="_blank"
              rel="noreferrer"
            >
              Inquire for Custom Products via WhatsApp →
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="symbolic-notice-banner">
            <p>
              <em>Notice:</em> Our spell jars and intention collections are symbolic, spiritual, and reflection-based offerings
              designed to support personal mindfulness, grounding, and positive intention-setting.
            </p>
          </div>

          <div className="products-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-card-image">
                  <img src={p.image} alt={p.name} className="product-img" loading="lazy" />
                  {p.tag && <span className="product-discount">{p.tag}</span>}
                  <button
                    type="button"
                    className={`product-wishlist${wishlist[p.name] ? ' active' : ''}`}
                    onClick={() => toggleWishlist(p.name)}
                    aria-label={`Add ${p.name} to wishlist`}
                  >
                    <FiHeart className={wishlist[p.name] ? 'filled' : ''} />
                  </button>
                </div>
                <div className="product-card-body">
                  <span className="product-category-tag">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="product-description">{p.description}</p>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span className="current">{p.price}</span>
                    </div>
                    <a href="https://wa.me/919876543210" className="add-to-cart-btn">
                      <FiShoppingBag className="icon" />
                      <span>Inquire / Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
