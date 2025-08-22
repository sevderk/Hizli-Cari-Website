import React from 'react';
import '../styles/hero.css';

import Logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.png';
import playStoreBadge from '../assets/icons/google-play-badge.svg';
import appStoreBadge from '../assets/icons/app-store-badge.svg';
import phoneImage from '../assets/phone.png';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <img src={heroBg} alt="Background" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-left">
          <img src={Logo} alt="Hızlı Cari Logo" className="hero-logo" />
          <h1>Cari Masraf Takip</h1>

          <p>
            Hızlı Cari ile saniyeler içinde cari hesap oluşturun, borç-alacak işlemlerinizi
            girin, masraflarınızı yönetin ve detaylı raporlarla finansal durumunuzu anlık takip edin.
          </p>

          <p className="hero-highlight">
            Üstelik<span className="highlighted">tamamen ücretsiz, hızlı</span>ve kullanımı<span className="highlighted">çok kolay.</span>
          </p>

          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.proder.hizlicari"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={playStoreBadge} alt="Google Play" className="store-badge" />
            </a>
            <a
              href="https://apps.apple.com/us/app/hızlı-cari-cari-masraf-takip/id6746715804?platform=iphone"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={appStoreBadge} alt="App Store" className="store-badge" />
            </a>
          </div>
        </div>

        <div className="hero-phone">
          <img src={phoneImage} alt="App Screenshot" className="phone-image" />
        </div>
      </div>

      <div className="scroll-arrow">
        <a href="#features" aria-label="Özelliklere geç">
          <ChevronDown size={36} strokeWidth={1} color="#fff" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
