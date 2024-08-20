import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//components



//service
import * as resService from "../../services/restaurant";

const MyResDetails = ({handleDeleteRes})=>{

    const { resId } = useParams();
    const [res, setres] = useState();
    
  
    useEffect(() => {
      async function getRes() {
        const resData = await resService.show(resId);
        setres(resData);
      }
      getRes();
    }, [resId]);
  
    if (!res) {
      return (
        <main>
          <h3>Loading...</h3>
        </main>
      );
    }
   
 

 
    return (
      <>
      
        <h1>{res.name}</h1>
        <p>Location :{res.location}</p>
        
        <p>Category : {res.category}</p>
        <p>operatingHours :{res.operatingHours}</p>
        <Link to={`/restaurants/${resId}/Booking`}> Show all Bookings </Link>
        <Link to={`/update/${resId}`}>Edit</Link>
        <button onClick={()=>{handleDeleteRes(res._id)}} >Delete</button>
      </>
    );





}

export default MyResDetails ;