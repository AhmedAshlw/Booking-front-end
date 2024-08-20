

const BookingList = ({Bookings})=>{


return (<>

<ul>
{Bookings.map((book)=>(


<li><h1>{book.restaurantId.name}</h1>
<p>Seats :{book.seats}</p>
<p>Date : {book.date}</p>
<p> Time :{book.time}</p>
</li>

))}




</ul>

</>);


}
export default BookingList;