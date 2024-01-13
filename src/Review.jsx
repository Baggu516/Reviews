import React, { useState } from 'react';
import { Data } from './data';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const showPreviousReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  const showRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * Data.length);
    setCurrentIndex(randomIndex);
  };

  const { author, job, text, image } = Data[currentIndex];

  return (
    <div >
      <div id="review-heading">
        <h1>Our Reviews</h1>
      </div>
      <div className='container'>
        
    
      <div id="review-container" className="review">
        <div id={`author-id-${Data[currentIndex].id}`} className="name">
          {author}
        </div>
        <div className="job">{job}</div>
        <div className="text">{text}</div>
        <img src={image} alt={`Person ${currentIndex + 1}`} className="person-img" />
      </div>
      <div className='btns'>
      <button className="prev-btn" onClick={showPreviousReview}>
        Previous
      </button>
      <button className="random-btn" onClick={showRandomReview}>
        Surprise Me
      </button>
      <button className="next-btn" onClick={showNextReview}>
        Next
      </button>
      </div>
    </div>
    </div>
  );
};

export default Review;
