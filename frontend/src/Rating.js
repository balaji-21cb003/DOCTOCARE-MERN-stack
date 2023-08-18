import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
    <p>Rating: {rating}</p>
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleRatingChange(value)}
          style={{
            cursor: 'pointer',
            color: value <= rating ? 'orange' : 'gray',
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  </div>
  );
};

export default Rating;
