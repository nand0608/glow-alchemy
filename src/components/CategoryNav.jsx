import { useState, useRef, useEffect, Fragment } from 'react';
import { FiChevronDown, FiArrowRight, FiCheck, FiClock, FiStar, FiCalendar } from 'react-icons/fi';

const navData = {
  'Shop': {
    type: 'shop-grid',
    sections: [
      {
        heading: 'Handcrafted Candle Collections',
        items: [
          'Scented Decorative Candles',
          'Herbs Candles',
          'Crystal & Herbs Candles',
          'Customized Candles',
          'Gift Hamper Candles',
        ],
      },
      {
        heading: 'Spell Jars & Intention Collections',
        items: [
          'Love Spell Jar',
          'Career Spell Jar',
          'Money Spell Jar',
          'Negativity Removal Spell Jar',
          'Business Enhancement Spell Jar',
          'Reconcile Spell Jar',
          'Happiness Spell Jar',
        ],
        note: 'Symbolic, spiritual, and reflection-based offerings for personal intention-setting.',
      },
      {
        heading: 'Other Products & Gifting',
        items: [
          'Crystals & Accessories',
          'Gift Hampers & Seasonal Gifting',
          'Customized Products',
        ],
        note: 'Individual product inventory is being configured by the studio. Bespoke inquiries welcome.',
      },
    ],
  },
  'Tarot Sessions': {
    type: 'tarot',
    cols: 3,
    sessions: [
      {
        title: 'Quick Session',
        price: '₹1,000',
        duration: '30 minutes',
        tagline: 'Focused clarity on 1–2 urgent questions',
        description: 'Ideal for quick crossroads, daily guidance, or rapid answers to pressing life decisions delivered with audio summary and card spreads.',
        highlights: [
          '30 minutes focused reading',
          '1–2 specific questions answered',
          'Card spread photo & voice guidance',
        ],
      },
      {
        title: 'Elaborated Session',
        price: '₹1,500',
        duration: '1 hour',
        tagline: 'In-depth spread for love, career & life paths',
        description: 'Comprehensive exploration of underlying energies, upcoming opportunities, and tailored guidance for your current spiritual journey.',
        highlights: [
          '1 hour comprehensive reading',
          'Multiple spread layouts & oracle guidance',
          'Actionable next steps & remedy advice',
        ],
      },
      {
        title: 'Deep Dive Session',
        price: '₹2,500',
        duration: '2 hours',
        tagline: 'Full spiritual roadmap & energy alignment',
        description: 'Complete immersive reading encompassing life purpose, energy clearing, chakra balance, and detailed personalized guidance.',
        highlights: [
          '2 hours intensive spiritual consultation',
          'Chakra & aura alignment analysis',
          'Full personalized summary report',
        ],
      },
    ],
  },
  'Glow Journal': {
    type: 'journal',
    cols: 3,
    columns: [
      {
        title: 'Divination & Craft',
        categories: [
          {
            name: 'Tarot card meanings and reflective prompts',
            desc: 'Card symbolism, spread interpretations, and intuitive journaling guidance.',
          },
          {
            name: 'Candle care, fragrance notes, and candle-making stories',
            desc: 'Wick trimming, artisanal wax blending, and essential oil lore.',
          },
          {
            name: 'Product launches and community updates',
            desc: 'Latest handcrafted creations, studio updates, and community gatherings.',
          },
        ],
      },
      {
        title: 'Spiritual Lore & Mindfulness',
        categories: [
          {
            name: 'Crystal and herb folklore',
            desc: 'Ancient mineral properties, herbal traditions, and elemental energies.',
          },
          {
            name: 'Journaling, grounding, gratitude, and intention-setting',
            desc: 'Daily mindfulness practices, shadow work, and gratitude rituals.',
          },
        ],
      },
      {
        title: 'Celestial Cycles & Radiant Living',
        categories: [
          {
            name: 'Lunar phases and rituals',
            desc: 'Moon transits, new moon intentions, and full moon release practices.',
          },
          {
            name: 'Seasonal articles and festivals',
            desc: 'Solstices, equinoxes, and seasonal celebrations of nature.',
          },
          {
            name: 'Food, beauty, and lifestyle content',
            desc: 'Holistic wellness, herbal tea infusions, and mindful living spaces.',
          },
        ],
      },
    ],
  },
  'Membership / Subscribe': {
    type: 'membership',
    cols: 3,
    plans: [
      {
        title: 'Free Glow Notes',
        price: 'Free',
        badge: 'Official Newsletter',
        description: 'Receive weekly celestial updates, lunar phase insights, and digital ritual journaling prompts straight to your inbox.',
        features: [
          'Weekly celestial forecasts & reflections',
          'Moon phase calendar & intention prompts',
          'Digital ritual and candle care guides',
          'First access to new studio creations',
        ],
        cta: 'Subscribe to Free Glow Notes',
        status: 'Active',
      },
      {
        title: 'Monthly Moon Letter',
        price: 'To be finalised',
        badge: 'Coming Soon',
        description: 'In-depth monthly celestial roadmap and dedicated astrological energy forecasts tailored for your spiritual practice.',
        features: [
          'Comprehensive monthly moon transit guide',
          'Audio meditation and energy forecast',
          'Exclusive ritual spreads and recipes',
          'Pricing & launch date to be finalised',
        ],
        cta: 'Join Waitlist',
        status: 'To be finalised',
      },
      {
        title: 'Glow Alchemy Inner Circle',
        price: 'To be finalised',
        badge: 'Proposed Tier',
        description: 'Our dedicated membership community offering priority tarot bookings, seasonal surprises, and maker consultations.',
        features: [
          'Priority booking for Tarot Sessions',
          'Exclusive member offerings and perks',
          'Private spiritual journal circle access',
          'Pricing & launch date to be finalised',
        ],
        cta: 'Join Waitlist',
        status: 'To be finalised',
      },
    ],
  },
  'About Glow Alchemy': {
    type: 'info',
    cols: 4,
    cards: [
      {
        title: 'Brand Story',
        subtitle: 'Our Genesis',
        description: 'Born from a reverence for ancient earth wisdom, mystical arts, and modern mindfulness. We formulate soul-nurturing alchemy to help you reconnect with your highest inner radiance.',
        linkText: 'Learn More →',
        href: '#about-story',
      },
      {
        title: 'Vision & Values',
        subtitle: 'Conscious & Pure',
        description: 'Committed to natural soy wax, authentic crystals, sustainably sourced herbs, and plastic-free packaging crafted with positive intention.',
        linkText: 'Our Values →',
        href: '#about-values',
      },
      {
        title: 'Maker Story',
        subtitle: 'Handcrafted With Care',
        description: 'Meet our passionate artisans, herbalists, and tarot practitioners who pour love and energy into every single candle, spell jar, and consultation.',
        linkText: 'Meet Makers →',
        href: '#about-makers',
      },
      {
        title: 'Contact Details',
        subtitle: 'Studio & Support',
        description: 'Direct inquiries, studio consultations, bespoke gifting, and client assistance. Reach our team anytime via email or WhatsApp.',
        linkText: 'Contact Us →',
        href: '#contact',
      },
    ],
  },
  'Contact & Help': {
    type: 'info',
    cols: 4,
    cards: [
      {
        title: 'Contact Information',
        subtitle: 'Reach Our Studio',
        description: 'Helpline: +91 98765 43210\nStudio: Bangalore, Karnataka, India\nHours: Mon – Sat, 10:00 AM – 7:00 PM IST',
        linkText: 'View Studio Details →',
        href: '#contact-info',
      },
      {
        title: 'WhatsApp & Email',
        subtitle: 'Quick Assistance',
        description: 'WhatsApp: +91 98765 43210\nEmail: care@glowalchemy.com\nPrompt response for product recommendations and tarot bookings.',
        linkText: 'Chat on WhatsApp →',
        href: 'https://wa.me/919876543210',
      },
      {
        title: 'Shipping & Delivery',
        subtitle: 'Safe Pan-India Transit',
        description: 'Carefully packaged, bubble-cushioned, and transit-insured. Pan-India delivery with real-time tracking for every order.',
        linkText: 'Shipping Policy →',
        href: '#shipping-policy',
      },
      {
        title: 'Safety & Privacy',
        subtitle: 'Care & Certifications',
        description: 'Candle burning safety guidelines, crystal cleansing instructions, 7-day hassle-free returns, and complete user privacy protection.',
        linkText: 'Safety Guide →',
        href: '#safety-privacy',
      },
    ],
  },
};

const categories = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop', hasDropdown: true },
  { label: 'Tarot Sessions', href: '#tarot-sessions', hasDropdown: true },
  { label: 'Glow Journal', href: '#glow-journal', hasDropdown: true },
  { label: 'Membership / Subscribe', href: '#membership', hasDropdown: true },
  { label: 'About Glow Alchemy', href: '#about', hasDropdown: true },
  { label: 'Contact & Help', href: '#contact', hasDropdown: true },
];

export default function CategoryNav({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navData[label]) {
      setActiveCategory(label);
    } else {
      setActiveCategory(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  };

  const handleLinkClick = (e, cat) => {
    if (cat.hasDropdown) {
      e.preventDefault();
      setActiveCategory((prev) => (prev === cat.label ? null : cat.label));
    }
  };

  const handleBookingClick = (session) => {
    setActiveCategory(null);
    if (onOpenBooking) {
      onOpenBooking(session);
    }
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveCategory(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCategory(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeData = activeCategory ? navData[activeCategory] : null;

  return (
    <nav
      className="category-nav"
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      aria-label="Main Navigation"
    >
      <div className="category-nav-inner">
        {categories.map((cat, i) => (
          <Fragment key={cat.label}>
            {i > 0 && <span className="nav-divider" aria-hidden="true">|</span>}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => {
                if (window.matchMedia('(hover: hover)').matches) {
                  handleMouseEnter(cat.label);
                }
              }}
            >
              <a
                href={cat.href}
                className={`category-link${activeCategory === cat.label ? ' bold active' : ''}`}
                onClick={(e) => handleLinkClick(e, cat)}
                aria-expanded={cat.hasDropdown ? activeCategory === cat.label : undefined}
                aria-haspopup={cat.hasDropdown ? 'true' : undefined}
              >
                <span>{cat.label}</span>
                {cat.hasDropdown && (
                  <FiChevronDown
                    className={`category-chevron${activeCategory === cat.label ? ' open' : ''}`}
                    aria-hidden="true"
                  />
                )}
              </a>
            </div>
          </Fragment>
        ))}
      </div>

      {/* Mega Menu Dropdown */}
      {activeCategory && activeData && (
        <>
          <div
            className="mega-menu-backdrop"
            onClick={() => setActiveCategory(null)}
          />
          <div
            className="mega-menu"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
          >
            <div className="mega-menu-header-mobile">
              <span className="mega-menu-mobile-title">{activeCategory}</span>
              <button
                className="mega-menu-close-btn"
                onClick={() => setActiveCategory(null)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Shop Layout: Exactly 5 Candle Collections, 7 Spell Jars, Other Products & Gifting */}
            {activeData.type === 'shop-grid' && (
              <div className="mega-menu-inner shop-layout">
                {activeData.sections.map((sec, i) => (
                  <div key={i} className="mega-menu-column shop-section-col">
                    <h4 className="mega-menu-title">{sec.heading}</h4>
                    <ul className="mega-menu-list">
                      {sec.items.map((item, j) => (
                        <li key={j}>
                          <a
                            href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setActiveCategory(null)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {sec.note && <p className="section-col-note">{sec.note}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Tarot Sessions Layout: Quick (30m, ₹1000), Elaborated (1h, ₹1500), Deep Dive (2h, ₹2500) */}
            {activeData.type === 'tarot' && (
              <div className="mega-menu-inner cols-3 tarot-layout">
                {activeData.sessions.map((session, i) => (
                  <div key={i} className="mega-menu-card tarot-card">
                    <div className="tarot-card-top">
                      <span className="tarot-badge">Tarot Consultation</span>
                      <span className="tarot-price-tag">{session.price}</span>
                    </div>
                    <h4 className="tarot-card-title">{session.title}</h4>
                    <div className="tarot-duration">
                      <FiClock className="icon" /> {session.duration}
                    </div>
                    <p className="tarot-tagline">{session.tagline}</p>
                    <p className="tarot-desc">{session.description}</p>
                    <ul className="tarot-highlights">
                      {session.highlights.map((h, j) => (
                        <li key={j}>
                          <FiCheck className="check-icon" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="card-action-btn tarot-btn"
                      onClick={() => handleBookingClick(session)}
                    >
                      <FiCalendar className="btn-icon" />
                      <span>Book {session.title} ({session.duration})</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Glow Journal Layout: The 7 exact content topics from the PDF */}
            {activeData.type === 'journal' && (
              <div className="mega-menu-inner cols-3 journal-layout">
                {activeData.columns.map((col, i) => (
                  <div key={i} className="mega-menu-column journal-column">
                    <h4 className="mega-menu-title">{col.title}</h4>
                    <div className="journal-items-group">
                      {col.categories.map((cat, j) => (
                        <a
                          key={j}
                          href={`#${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="journal-topic-link"
                          onClick={() => setActiveCategory(null)}
                        >
                          <span className="topic-name">{cat.name}</span>
                          <span className="topic-desc">{cat.desc}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Membership / Subscribe Layout: Free Glow Notes, Monthly Moon Letter, Glow Alchemy Inner Circle */}
            {activeData.type === 'membership' && (
              <div className="mega-menu-inner cols-3 membership-layout">
                {activeData.plans.map((plan, i) => (
                  <div
                    key={i}
                    className={`mega-menu-card membership-card${i === 0 ? ' featured' : ''}`}
                  >
                    <div className="membership-card-top">
                      <span className="membership-badge">{plan.badge}</span>
                      <span className="membership-price">{plan.price}</span>
                    </div>
                    <h4 className="membership-title">{plan.title}</h4>
                    <p className="membership-desc">{plan.description}</p>
                    <ul className="membership-features">
                      {plan.features.map((f, j) => (
                        <li key={j}>
                          <FiStar className="sparkle-icon" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#membership"
                      className={`card-action-btn${i === 0 ? ' featured-btn' : ''}`}
                      onClick={() => setActiveCategory(null)}
                    >
                      <span>{plan.cta}</span>
                      <FiArrowRight className="btn-icon" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Info Cards Layout: About Glow Alchemy, Contact & Help */}
            {activeData.type === 'info' && (
              <div className="mega-menu-inner cols-4 info-layout">
                {activeData.cards.map((card, i) => (
                  <div key={i} className="mega-menu-card info-card">
                    <div className="info-card-header">
                      <span className="info-subtitle">{card.subtitle}</span>
                      <h4 className="info-title">{card.title}</h4>
                    </div>
                    <p className="info-desc">{card.description}</p>
                    <a
                      href={card.href}
                      className="info-link"
                      onClick={() => setActiveCategory(null)}
                    >
                      <span>{card.linkText}</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}
