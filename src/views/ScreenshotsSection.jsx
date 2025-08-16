import React from 'react';
import '../styles/screenshots.css';
import screenshots from '../data/screenshotsData';
import colors from '../styles/colors';

const ScreenshotsSection = () => {
  return (
    <section className="screenshots-section" id="screenshots">
      <h2 className="section-title" style={{ color: colors.darkblue }}>
        Hızlı Cari'ye Hızlı Bir Bakış
      </h2>

      <div className="screenshots-grid">
        {screenshots.slice(0, 4).map((shot, index) => (
          <div key={index} className="screenshot-card" style={{ backgroundColor: colors.white }}>
            <img src={shot.image} alt={shot.title} className="screenshot-img" />
            <h3 style={{ color: colors.darkblue }}>{shot.title}</h3>
            <p style={{ color: colors.graytext }}>{shot.description}</p>
          </div>
        ))}
      </div>

      <div className="screenshots-grid mt-section-gap">
        {screenshots.slice(4).map((shot, index) => (
          <div key={index + 4} className="screenshot-card" style={{ backgroundColor: colors.white }}>
            <img src={shot.image} alt={shot.title} className="screenshot-img" />
            <h3 style={{ color: colors.darkblue }}>{shot.title}</h3>
            <p style={{ color: colors.graytext }}>{shot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotsSection;
