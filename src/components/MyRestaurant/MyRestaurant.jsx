//my restaurant
import { Link } from "react-router-dom";

import "./MyRestaurant.css";

const MyRestaurants = ({ myrestaurant }) => {
  return (
    <>

      <div className="myrestCont">
        <h1>All Owned Restaurants</h1>
        <ul className="myrestCard">
          {myrestaurant.map((res) => (
            <Link to={`/MyRestaurants/${res._id}`}>
              <li key={res._id}>
              
                  <>
                    <h1>{res.name}</h1>
                    <p>{res.category}</p>
                  </>
                
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyRestaurants;
