import React, { useState } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(null);

  // Handle the click event to update rating
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <section 
      id="feedback" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '20px', 
        height: '100vh' 
      }}
    >
      <h2>Feedback</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '400px' }}>
        <input 
          type="text" 
          placeholder="Enter Full Name" 
          required 
          style={{ padding: '10px', width: '100%' }} 
        />
        <textarea 
          placeholder="Enter your feedback" 
          required 
          style={{ padding: '10px', width: '100%', minHeight: '100px' }}
        />

        {/* Star Rating System without radio buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star}
              onClick={() => handleStarClick(star)} 
              style={{
                fontSize: '24px', 
                cursor: 'pointer', 
                color: rating >= star ? '#FFD700' : '#ccc'
              }}
            >
              ★
            </span>
          ))}
        </div>

        <button 
          type="submit" 
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Give Feedback
        </button>
      </form>
    </section>
  );
};

export default Feedback;
