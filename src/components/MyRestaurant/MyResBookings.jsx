// this component is used to show the bookings of the restaurant
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//services

import * as BookServices from '../../services/bookingService'


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

return(<>

{!resbooks ? <h3>there is no Booking</h3>: <>
<ul>
{resbooks.map((book)=>(
<li>
    <p>Customer Name : {book.userId.username}</p>
    <p>Seats : {book.seats}</p>
    <p>Date : {book.date}</p>
    <p>Time :{book.time}</p>


</li>

))}
</ul>
</>


}





</>)




}

export default MyResBookings;