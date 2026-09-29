export default function Footer({ onOpenBooking }) {
  const handleTarotClick = (e, sessionTitle) => {
    if (onOpenBooking) {
      e.preventDefault();
      onOpenBooking({ name: sessionTitle });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text" style={{ fontSize: '24px', marginBottom: '12px' }}>
              Glow Alchemy
            </div>
            <p>
              Handcrafted candles, authentic intention spell jars, sacred crystals, and intuitive tarot consultations.
              Infused with pure botanicals and positive intention.
            </p>
            <div className="footer-contact-mini">
              <p>WhatsApp: +91 98765 43210</p>
              <p>Email: care@glowalchemy.com</p>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="footer-column">
            <h4>Handcrafted Candles</h4>
            <ul>
              <li><a href="#scented-decorative-candles">Scented Decorative Candles</a></li>
              <li><a href="#herbs-candles">Herbs Candles</a></li>
              <li><a href="#crystal-herbs-candles">Crystal & Herbs Candles</a></li>
              <li><a href="#customized-candles">Customized Candles</a></li>
              <li><a href="#gift-hamper-candles">Gift Hamper Candles</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Spell Jars & Offerings</h4>
            <ul>
              <li><a href="#love-spell-jar">Love Spell Jar</a></li>
              <li><a href="#career-spell-jar">Career Spell Jar</a></li>
              <li><a href="#money-spell-jar">Money Spell Jar</a></li>
              <li><a href="#negativity-removal-spell-jar">Negativity Removal Spell Jar</a></li>
              <li><a href="#happiness-spell-jar">Happiness Spell Jar</a></li>
              <li><a href="#crystals-accessories">Crystals & Accessories</a></li>
              <li><a href="#gift-hampers">Gift Hampers & Gifting</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Tarot Sessions</h4>
            <ul>
              <li>
                <a href="#tarot-sessions" onClick={(e) => handleTarotClick(e, 'Quick Session')}>
                  Quick Session (30 mins — ₹1,000)
                </a>
              </li>
              <li>
                <a href="#tarot-sessions" onClick={(e) => handleTarotClick(e, 'Elaborated Session')}>
                  Elaborated Session (1 hour — ₹1,500)
                </a>
              </li>
              <li>
                <a href="#tarot-sessions" onClick={(e) => handleTarotClick(e, 'Deep Dive Session')}>
                  Deep Dive Session (2 hours — ₹2,500)
                </a>
              </li>
              <li><a href="#about-story">About Glow Alchemy</a></li>
              <li><a href="#membership">Free Glow Notes</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Help & Policies</h4>
            <ul>
              <li><a href="#contact-info">Contact & Help</a></li>
              <li><a href="https://wa.me/919876543210">WhatsApp Support</a></li>
              <li><a href="#shipping-policy">Shipping & Delivery</a></li>
              <li><a href="#safety-privacy">Safety & Privacy</a></li>
              <li><a href="#glow-journal">Glow Journal</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Glow Alchemy. All rights reserved. Handcrafted with intention in India.</p>
        </div>
      </div>
    </footer>
  );
}
