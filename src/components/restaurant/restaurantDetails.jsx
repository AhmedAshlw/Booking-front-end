//restaurant details component
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//components
import BookingForm from "../Booking/BookingForm";
import Rating from "../Rating/Rating";
import ShowRating from '../Rating/ShowRating'
import CommentForm from "../comment/commentForm";
//css
import "./restaurantDetails.css";

//service
import * as resService from "../../services/restaurant";
import commentService from "../../services/commentService";
const RestaurantDetails = ({ handleAddBooking}) => {
  const { resId } = useParams();
  const [res, setres] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const [rating, setRating] = useState();
  
  


  async function getrate() {
    const fetchrate = await resService.getRating(resId);
    setRating(fetchrate.averageRating)
  }


  useEffect(() => {
    async function getrate() {
      const fetchrate = await resService.getRating(resId);
      setRating(fetchrate.averageRating)
    }
    
   getrate();
    
  }, []);


//Rating handler

const  handleAddRating =async(resId,formData)=>{
  const rate = await resService.AddRating(resId,formData)
 getrate();
  
}



// comment handler
  const handleAddComment = async (formData) => {
    const newComment = await commentService.create(resId, formData)

    const copyRes = {...res}
    copyRes.comments.push(newComment)

    setres(copyRes);
  };

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

  function deriveButtonText() {
    if (showComponent) {
      setShowComponent(false);
      
    } else {
      setShowComponent(true);
    }
  }



  return (
    <>
    
    
    
    
      <div className="RestrBookCont">
        <div className="ShowRestCont">
          <h1>{res.name}</h1>
          <p>Location :{res.location}</p>
          
          <p>Category : {res.category}</p>
          <p>operatingHours :{res.operatingHours}</p>
          <div>
           <p>Avg Rating : <ShowRating rating={rating} /></p> 
          </div>
          <div>
            <Rating  handleAddRating={handleAddRating}/>
          </div>
           <CommentForm handleAddComment={handleAddComment}/>
          <div>
            
          </div>

          <p>Comments : {res.comments.map((comment)=>(
                  <li> {comment.text}</li>
          ))}</p>
          
        </div>
        <div className="ShowBookingCont">
          <button onClick={deriveButtonText}>Book</button>
          {showComponent && <BookingForm handleAddBooking={handleAddBooking} />}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
