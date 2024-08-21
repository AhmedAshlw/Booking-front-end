//booking form component
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import * as bookingService from "../../services/bookingService";
import "./BookingForm.css";
//we need to use params
const BookingForm = ({ handleAddBooking ,handleUpdateBook}) => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    seats: "",
  });

  const { bookId,resId } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await bookingService.show(bookId);
      const date = new Date(bookData.date);
      const formattedDate = date.toISOString().split('T')[0];
      bookData.date = formattedDate;
      setBookingData(bookData);
    };
    if (bookId) fetchBook();
  }, [bookId]);

 

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bookId){
      handleUpdateBook(bookId,bookingData);
    }else {
      handleAddBooking(bookingData, resId);
    }
    
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
            {bookId ? <>Update</> : <>Book</>}
          </button>
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
