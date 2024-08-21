import { useState } from "react";
 import { FaStar } from "react-icons/fa";

import "./Rating.css";
import { useParams } from "react-router-dom";

const Rating = ({avgRate}) => {
  const [rating, setRating] = useState(avgRate);
  const [hover, setHover] = useState();

 const {resId} = useParams();
 

  
  return (
    
    <div className="ratingStars">
      {[...Array(5)].map((star, idx) => {
        const currentRating = idx + 1;
        return (
          <label>

          
            <FaStar
              size={25}
              className="star"
              color={currentRating <= ( rating) ? "#FFC107" : "#E4E5E9"}
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
