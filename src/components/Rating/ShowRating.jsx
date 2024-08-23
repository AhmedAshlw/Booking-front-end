import { useEffect, useState } from "react";
 import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";


//Services
import * as resService from  '../../services/restaurant';


//css
import "./Rating.css";


const Rating = ({rating}) => {
 
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
