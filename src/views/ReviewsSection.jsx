import React, { useEffect, useMemo, useState } from 'react';
import '../styles/reviews.css';
import colors from '../styles/colors';
import reviews from '../data/reviewsData';

const ReviewsSection = () => {
  const getVisibleCount = () =>
    typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 2;

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    setVisibleCount(getVisibleCount());
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const len = reviews.length;

  const visibleItems = useMemo(() => {
    if (!len) return [];
    const out = [];
    for (let i = 0; i < visibleCount; i += 1) {
      out.push(reviews[(startIndex + i) % len]);
    }
    return out;
  }, [startIndex, visibleCount, len]);

  const prev = () => setStartIndex((p) => (p - visibleCount + len) % len);
  const next = () => setStartIndex((p) => (p + visibleCount) % len);

  return (
    <section
      className="rvs-section"
      id="reviews"
      style={{
        backgroundColor: colors.white,
        '--primary': colors.primary,
        '--white': colors.white
      }}
    >
      <div className="rvs-title-wrap">
        <h2 className="rvs-title" style={{ color: colors.darkblue }}>
          Hızlı Cari için Ne Diyorlar?
        </h2>
        <div className="rvs-underline" />
      </div>

      <div className="rvs-container">
        <button type="button" aria-label="Önceki yorumlar" className="rvs-nav rvs-nav--prev" onClick={prev}>
          <span className="rvs-arrow rvs-arrow--left" />
        </button>

        <div className={`rvs-grid ${visibleCount === 1 ? 'rvs-grid--single' : ''}`}>
          {visibleItems.map((r, i) => (
            <article className="rvs-card" key={`${r.name}-${i}`}>
              <p className="rvs-quote">“{r.comment}”</p>
              <div className="rvs-meta">
                <span className="rvs-name">{r.name}</span>
                <span className="rvs-stars">{'★'.repeat(r.stars || 5)}</span>
              </div>
            </article>
          ))}
        </div>

        <button type="button" aria-label="Sonraki yorumlar" className="rvs-nav rvs-nav--next" onClick={next}>
          <span className="rvs-arrow rvs-arrow--right" />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
