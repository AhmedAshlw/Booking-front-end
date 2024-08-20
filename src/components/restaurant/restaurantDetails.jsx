import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookingForm from "../Booking/BookingForm";

import "./restaurant.css";

//service
import * as resService from "../../services/restaurant";

const RestaurantDetails = ({ handleAddBooking }) => {
  const { resId } = useParams();
  const [res, setres] = useState();
  const [showComponent, setShowComponent] = useState(false);

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

  return (
    <>
      <div className="RestrBookCont">
        <div className="ShowRestCont">
          <h1>{res.name}</h1>
          <p>Location :{res.location}</p>
          <p>Rating : {res.rating}</p>
          <p>Category : {res.category}</p>
          <p>operatingHours :{res.operatingHours}</p>
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
