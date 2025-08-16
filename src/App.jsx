import React from 'react';
import './styles/tailwind.css';
import HeroSection from './views/HeroSection';
import FeaturesSection from './views/FeaturesSection';
import ScreenshotsSection from './views/ScreenshotsSection';
import ReviewsSection from './views/ReviewsSection';
import Footer from './components/Footer';
import HelpSection from './views/HelpSection';
import DownloadSection from './components/DownloadSection';
import { usePageMeta } from './utils/usePageMeta';

function App() {
  usePageMeta({
    title: 'Hızlı Cari — Ücretsiz Cari Takip ve Ön Muhasebe',
    description:
      'Hızlı Cari; işletmeler için ücretsiz, hızlı ve kolay cari hesap takibi. Detaylı raporlar, çoklu para birimi, Android desteği.'
    // canonical: domain gelince ekleyeceğim
  });

  return (
    <div className="font-sans bg-white text-blackish">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HelpSection />
      <ReviewsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
