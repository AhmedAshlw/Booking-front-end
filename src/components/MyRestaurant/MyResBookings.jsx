// this component is used to show the bookings of the restaurant
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//services

import * as BookServices from '../../services/bookingService'
//css 
import "../Booking/BookingList.css";

const MyResBookings = ()=>{

    const {resId} = useParams();
    const [resbooks,setresbooks]=useState([]);
    
    
    useEffect(() => {
        const getbook=async()=> {
          const resData = await BookServices.resBook(resId);
          
          setresbooks(resData);
          
        }
        getbook();
      }, [resId]);

if (resbooks.length === 0) {
    return <h1>No Bookings</h1>;
  }


return(



 
<div className="myBookingContainer">

<ul className="myBookingCard">
{resbooks.map((book)=>(
<li key={book._id}>
    <p>Customer Name : {book.userId.username}</p>
    <p>Seats : {book.seats}</p>
    <p>Date : {new Date(book.date).toLocaleDateString()}</p>
    <p>Time :{book.time}</p>


</li>

))}

</ul>
</div>


)










}

export default MyResBookings;