import React, { useState } from 'react';
import '../styles/reviews.css';
import colors from '../styles/colors';
import reviews from '../data/reviewsData';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const review = reviews[currentIndex];

  return (
    <section
      className="reviews-section"
      style={{ backgroundColor: colors.white }}
    >
      <h2
        className="reviews-title"
        style={{ color: colors.primary }}
      >
        Kullanıcı Yorumları
      </h2>
      <div className="single-review-container">
        <button
          className="nav-btn"
          onClick={handlePrev}
          style={{ backgroundColor: colors.primary }}
        >
          ❮
        </button>
        <div className="review-card single">
          <div className="stars">{'★'.repeat(review.stars)}</div>
          <h3 style={{ color: colors.darkblue }}>{review.name}</h3>
          <p style={{ color: colors.graytext }}>{review.comment}</p>
        </div>
        <button
          className="nav-btn"
          onClick={handleNext}
          style={{ backgroundColor: colors.primary }}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
