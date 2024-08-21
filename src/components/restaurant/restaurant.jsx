import { Link } from "react-router-dom";
import "./restaurant.css";

const Restaurant = ({ restaurants }) => {

  if (!restaurants) {
    return (
      <main>
        <h3>Loading...</h3>
      </main>
    );
  }
 
  return (
    <div className="restCont">
      <h1>All Restaurants</h1>
      <ul className="restCard">
        {restaurants ? <>
        {restaurants.map((res) => (
          <li key={res._id}>
            {console.log(res.resimage)}
       <div className="imgr">     <img className="resimage" src={res.resimage} alt="background Image" /></div>
            <Link to={`/restaurants/${res._id}`}>
              <h1>{res.name}</h1>
              <p>{res.category}</p>
            </Link>
          </li>
        ))}
        
        
        
        </> : <><main>
        <h3>Loading...</h3>
      </main></>}
        
      </ul>
    </div>
  );
};

export default Restaurant;
