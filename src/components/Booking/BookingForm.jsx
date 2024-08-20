import { useState } from "react";
import { useParams } from "react-router-dom";

import "./BookingForm.css";
//we need to use params
const BookingForm = ({ handleAddBooking }) => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    seats: "",
  });

  const { resId } = useParams();

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddBooking(bookingData, resId);
  };

  return (
    <main className="BookingFormCont">
      <h3>Select Your Booking Details</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="Date"
            id="date"
            value={bookingData.date}
            name="date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={bookingData.time}
            name="time"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="seats">Seats:</label>
          <input
            type="number"
            id="seats"
            value={bookingData.seats}
            name="seats"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn2">
            Book it
          </button>
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
