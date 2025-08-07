import React from 'react';
import './styles/tailwind.css';
import HeroSection from './views/HeroSection';
import FeaturesSection from './views/FeaturesSection';
import ScreenshotsSection from './views/ScreenshotsSection'; 
import ReviewsSection from './views/ReviewsSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans bg-white text-blackish">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
