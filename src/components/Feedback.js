import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(null);

  // Handle the click event to update rating
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className='feedback-wrapper'>
      <section id="feedback">
        <h2>Feedback</h2>
        <form className="feedback-form">
          <input type="text" placeholder="Enter Full Name" required />
          <textarea placeholder="Enter your feedback" required />
          
          {/* Star Rating System */}
          <div className="feedback-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star}
                onClick={() => handleStarClick(star)} 
                className={rating >= star ? 'star selected' : 'star'}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit" className="feedback-button">
            Give Feedback
          </button>
        </form>
      </section>
    </div>
  );
};

export default Feedback;
