// Booking list component
import { Link } from "react-router-dom";
import "./BookingList.css";

const BookingList = ({ Bookings, handleDeleteBook }) => {
 const books = Bookings.filter((book)=>{return book.restaurantId !== null})
  if(books.length == 0){return <h1>No Bookings</h1>}
  return (
    <>
     
     


      <div className="vhomeCont">
       
        <div className="starter">
         
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
              <div key={book._id}>

                {book?.restaurantId?.name ? (
                  <li  className="BookingList" >
                    <h1>{book?.restaurantId?.name}</h1>
                    <p>Seats: {book.seats}</p>
                    <p>Date: {new Date(book.date).toLocaleDateString()}</p>
                    <p>Time: {book.time}</p>
                    <div>
                      <button >
                        <Link to={`/restaurants/${book._id}/edit`}>Edit</Link>
                      </button>
                      <button onClick={() => { handleDeleteBook(book._id) }}>
                        Delete
                      </button>
                    </div>
                  </li>
                ) : null}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookingList;
