// src/components/ReviewCard.jsx
import React from 'react';
import '../styles/reviews.css';

const ReviewCard = ({ name, rating, comment }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <strong>{name}</strong>
        <span className="stars">{"★".repeat(rating)}</span>
      </div>
      <p className="review-text">"{comment}"</p>
    </div>
  );
};

export default ReviewCard;
