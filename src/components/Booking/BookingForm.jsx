import { useState } from "react";

const BookingForm = ({ handleAddBooking }) => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    seat: "",
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddBooking(bookingData);
  };

  return (
    <main>
      <h2>Select Your Booking Details</h2>
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
          <label htmlFor="seat">Seat:</label>
          <input
            type="number"
            id="seat"
            value={bookingData.seat}
            name="seat"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Book it</button>
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
