import React from 'react';
import '../styles/download.css';
import colors from '../styles/colors';

import playBadge from '../assets/icons/google-play-badge2.svg';
import appStoreBadge from '../assets/icons/app-store-badge2.svg';
import dlBg from '../assets/download-bg.png';
import phoneMock from '../assets/phone2.png';

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="dl-section"
      style={{
        backgroundColor: colors.primary,
        backgroundImage: `url(${dlBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '--white': colors.white
      }}
    >
      <div className="dl-wrap">
        <div className="dl-left">
          <h2 className="dl-title">Hazır mısın?</h2>
          <p className="dl-sub">
            Hızlı Cari ile cari kayıt, hareket ve raporlar elinin altında. <strong>Hemen şimdi dene.</strong>
          </p>

          <div className="dl-badges">
            <a
              className="dl-link"
              href="https://play.google.com/store/apps/details?id=com.proder.hizlicari"
              target="_blank"
              rel="noopener"
              aria-label="Google Play'den indirin"
            >
              <img className="dl-badge" src={playBadge} alt="Google Play" loading="lazy" decoding="async" />
            </a>

            <a
              className="dl-link"
              href="https://apps.apple.com/us/app/hızlı-cari-cari-masraf-takip/id6746715804?platform=iphone"
              target="_blank"
              rel="noopener"
              aria-label="App Store'dan indirin"
            >
              <img className="dl-badge" src={appStoreBadge} alt="App Store" loading="lazy" decoding="async" />
            </a>
          </div>
        </div>

        <div className="dl-right">
          <img className="dl-phone" src={phoneMock} alt="Hızlı Cari mobil uygulama" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
