
import { Link } from "react-router-dom";
const BookingList = ({Bookings,handleDeleteBook})=>{


return (<>

<ul>
{Bookings.map((book)=>(


<li><h1>{book.restaurantId.name}</h1>
<p>Seats :{book.seats}</p>
<p>Date : {new Date(book.date).toLocaleDateString()}</p>
<p> Time :{book.time}</p>
<Link to={`/restaurants/${book._id}/edit`}>Edit</Link>
<button onClick={()=>{handleDeleteBook(book._id)}}>Delete</button>
</li>

))}




</ul>

</>);


}
export default BookingList;