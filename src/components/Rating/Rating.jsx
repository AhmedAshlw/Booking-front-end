import { useState } from "react";
 import { FaStar } from "react-icons/fa";

import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="ratingStars">
      {[...Array(5)].map((star, idx) => {
        const currentRating = idx + 1;
        return (
          <label>
            <input
              name="rating"
              type="radio"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            ></input>
            <FaStar
              size={50}
              class="star"
              color={currentRating <= (hover || rating) ? "#FFC107" : "#E4E5E9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
