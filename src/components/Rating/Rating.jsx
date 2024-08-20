import { useState } from "react";
 import { FaStar } from "react-icons/fa";

import "./Rating.css";
import { useParams } from "react-router-dom";

const Rating = ({handleAddRating}) => {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();
  const [formData,setformData] =useState ({
    rating: ""
  })
  const {resId} = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
     
      handleAddRating(resId,formData);
    setRating(null);
    
  };

  const handleChange = (e) => {
    setformData({ [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="ratingStars">
      {[...Array(5)].map((star, idx) => {
        const currentRating = idx + 1;
        return (
          <label>
            <input
              name="rate"
              type="radio"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              onChange={handleChange}
            ></input>
            <FaStar
              size={50}
              className="star"
              color={currentRating <= (hover || rating) ? "#FFC107" : "#E4E5E9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
    <button type="submit">rate</button>
    </form>
  );
};

export default Rating;
