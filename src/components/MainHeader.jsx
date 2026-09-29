import { FiSearch, FiUser, FiMapPin, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { HiOutlineQrCode } from 'react-icons/hi2';

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header-inner">
        {/* Logo */}
        <div className="logo-container">
          <span className="logo-text">Glow Alchemy</span>
          <span className="logo-tagline">Magical Store</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search Candles, Spell Jars, Crystals, Tarot..." />
        </div>

        {/* Actions */}
        <div className="header-actions">
          {/* Sign Up */}
          <button className="header-action-btn signup-btn">
            <FiUser className="icon" />
            <span className="label">Sign Up</span>
            <span className="sub-label">Get ₹500 Off</span>
          </button>

          <div className="divider-line"></div>

          {/* Find a Store */}
          <button className="header-action-btn store-btn" aria-label="Find a Store">
            <FiMapPin className="icon" />
            <span className="label">Store</span>
          </button>

          {/* Wishlist */}
          <button className="header-action-btn wishlist-btn" aria-label="Wishlist">
            <FiHeart className="icon" />
          </button>

          {/* Cart */}
          <button className="header-action-btn cart-btn" aria-label="Shopping Cart">
            <FiShoppingCart className="icon" />
            <span className="badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
