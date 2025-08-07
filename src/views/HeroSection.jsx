import React from 'react';
import '../styles/hero.css';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.png';
import playStoreBadge from '../assets/icons/google-play-badge.svg';
import arrowDown from '../assets/icons/down-arrow.svg';

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroBg} alt="Background" className="hero-bg" />
      <div className="hero-overlay" />

      <a href="#footer" className="contact-link">İletişim</a>

      <div className="hero-content">
        <div className="hero-left">
          <img src={logo} alt="Hızlı Cari Logo" className="hero-logo" />
          <h1>Hızlı ve Pratik Cari Takip</h1>
          <p>Hızlı Cari ile saniyeler içinde cari hesap oluşturun, borç-alacak işlemlerini girin, masraflarınızı yönetin ve detaylı raporlarla finansal durumunuzu anlık takip edin. </p>
          <p>Üstelik ücretsiz, hızlı ve kullanımı çok kolay.</p>
          <div className="download-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.proder.hizlicari">
              <img src={playStoreBadge} alt="Google Play" className="store-badge" />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-arrow">
        <a href="#features">
          <img src={arrowDown} alt="Aşağı Kaydır" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
