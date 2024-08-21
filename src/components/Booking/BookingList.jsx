//booking list component
import { Link } from "react-router-dom";
import "./BookingList.css";
const BookingList = ({Bookings,handleDeleteBook})=>{


return (<>
             <h1>My Bookings</h1>
<div  className = "myBookingContainer">
<ul className="myBookingCard">
{Bookings.map((book)=>(
<>
{book?.restaurantId?.name ? (
  <li className="BookingList">
    <h1>{book?.restaurantId?.name}</h1>
    <p>Seats: {book.seats}</p>
    <p>Date: {new Date(book.date).toLocaleDateString()}</p>
    <p>Time: {book.time}</p>
    
<div>
  <button><Link to={`/restaurants/${book._id}/edit`}>Edit</Link></button>
  <button onClick={() => { handleDeleteBook(book._id) }}>Delete</button>
</div>
  </li>
) : <></>}
</>
))}
</ul>
</div>
</>);


}
export default BookingList;

