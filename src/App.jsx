import { useState } from 'react';
import PromoBanner from './components/PromoBanner';
import TopNav from './components/TopNav';
import MainHeader from './components/MainHeader';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import HeroCategoryCards from './components/HeroCategoryCards';
import FeaturesBar from './components/FeaturesBar';
import CategoryBrowse from './components/CategoryBrowse';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';
import TarotBookingModal from './components/TarotBookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingSession, setSelectedBookingSession] = useState(null);

  const handleOpenBooking = (session) => {
    setSelectedBookingSession(session || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingSession(null);
  };

  return (
    <div className="app">
      {/* === HEADER SECTION === */}
      <PromoBanner />
      <TopNav onOpenBooking={() => handleOpenBooking({ name: 'Quick Session' })} />
      <MainHeader />
      <CategoryNav onOpenBooking={handleOpenBooking} />

      {/* === BODY === */}
      <HeroSection onOpenBooking={() => handleOpenBooking({ name: 'Quick Session' })} />
      <FeaturesBar />
      <HeroCategoryCards />
      <CategoryBrowse onOpenBooking={handleOpenBooking} />
      <ProductsGrid />

      {/* === FOOTER === */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* === INTERACTIVE TAROT BOOKING MODAL === */}
      <TarotBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialSession={selectedBookingSession}
      />
    </div>
  );
}

export default App;
