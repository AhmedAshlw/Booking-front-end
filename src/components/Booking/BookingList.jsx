// Booking list component
import { Link } from "react-router-dom";
import "./BookingList.css";

const BookingList = ({ Bookings, handleDeleteBook }) => {
  return (
    <>
      <div className="vhomeCont">
        <div className="starter">
          <h1>My Bookings</h1>
        </div>
        <video autoPlay muted loop id="myVideoo">
          <source
            src="https://videos.pexels.com/video-files/3769033/3769033-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="myBookingContainer">
          <ul className="myBookingCard">
            {Bookings.map((book) => (
              <>
                {book?.restaurantId?.name ? (
                  <li className="BookingList" key={book._id}>
                    <h1>{book?.restaurantId?.name}</h1>
                    <p>Seats: {book.seats}</p>
                    <p>Date: {new Date(book.date).toLocaleDateString()}</p>
                    <p>Time: {book.time}</p>
                    <div>
                      <button>
                        <Link to={`/restaurants/${book._id}/edit`}>Edit</Link>
                      </button>
                      <button onClick={() => { handleDeleteBook(book._id) }}>
                        Delete
                      </button>
                    </div>
                  </li>
                ) : null}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookingList;
