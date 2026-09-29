export default function TopNav({ onOpenBooking }) {
  const links = [
    { label: 'About Glow Alchemy', href: '#about-story', highlight: false },
    { label: 'Tarot Sessions', href: '#tarot-sessions', highlight: false, isBooking: true },
    { label: 'Glow Journal', href: '#glow-journal', highlight: false },
    { label: 'Free Glow Notes', href: '#membership', highlight: false },
    { label: 'Track Order', href: '#shipping-policy', highlight: false },
    { label: 'Contact & Help', href: '#contact-info', highlight: false },
    { label: 'WhatsApp Care', href: 'https://wa.me/919876543210', highlight: true },
  ];

  const handleClick = (e, link) => {
    if (link.isBooking && onOpenBooking) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <nav className="top-nav" aria-label="Utility navigation">
      <div className="top-nav-inner">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={`top-nav-link${link.highlight ? ' highlight' : ''}`}
            onClick={(e) => handleClick(e, link)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
