import { Link } from "react-router-dom";
import "./restaurant.css";

const Restaurant = ({ restaurants }) => {

 
 
  return (
    <div className="restCont">
      <h1>All Restaurants</h1>
      <ul className="restCard">
        {restaurants ? <>
        {restaurants.map((res) => (
           <Link className="restLink" key={res._id} to={`/restaurants/${res._id}` }>
          <li key={res._id}>
           
            
       <div className="imgr">     <img className="resimage" src={res.resimage} alt={res.name} /></div>
            
              <h1>{res.name}</h1>
              <p>{res.category}</p>
            
          </li>
         </Link> 
        ))}
        
        
        
        </> : <><main>
        <h3>Loading...</h3>
      </main></>}
        
      </ul>
    </div>
  );
};

export default Restaurant;
