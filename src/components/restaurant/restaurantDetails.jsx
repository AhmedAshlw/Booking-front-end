import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//components
import BookingForm from "../Booking/BookingForm";
import Rating from "../Rating/Rating";
import ShowRating from '../Rating/ShowRating'

//css
import "./restaurant.css";

//service
import * as resService from "../../services/restaurant";

const RestaurantDetails = ({ handleAddBooking ,handleAddRating}) => {
  const { resId } = useParams();
  const [res, setres] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const [rate,setrate]=useState();
  useEffect(() => {
    async function getRes() {
      const resData = await resService.show(resId);
      setres(resData);
    }
    
    getRes();

    
  }, [resId]);

  if (!res) {
    return (
      <main>
        <h3>Loading...</h3>
      </main>
    );
  }

  function deriveButtonText() {
    if (showComponent) {
      setShowComponent(false);
      
    } else {
      setShowComponent(true);
    }
  }
let avg ;


  return (
    <>
    
    
    
    
      <div className="RestrBookCont">
        <div className="ShowRestCont">
          <h1>{res.name}</h1>
          <p>Location :{res.location}</p>
          <p>Rating : </p>
          <p>Category : {res.category}</p>
          <p>operatingHours :{res.operatingHours}</p>
          <div>
           <p>Avg Rating : <ShowRating avgRate={ res.rating.reduce((accumulator, currentObject) => accumulator + currentObject.rate, 0)/ res.rating.length}/></p> 
          </div>
          <div>
            <Rating handleAddRating={handleAddRating}/>
          </div>
          
        </div>
        <div className="ShowBookingCont">
          <button onClick={deriveButtonText}>Book</button>
          {showComponent && <BookingForm handleAddBooking={handleAddBooking} />}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
