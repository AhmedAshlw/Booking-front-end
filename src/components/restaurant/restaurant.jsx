//restaurant component
import { Link } from "react-router-dom";
import "./restaurant.css";
const Restaurant = ({ restaurants }) => {
  return (
    <>
      <div className="restCont">
        <h1>All Restaurants</h1>
        <ul className="restCard">
          {restaurants.map((res) => (
            <li>
              <Link to={`/restaurants/${res._id}`}>
                <>
                  <h1>{res.name}</h1>
                  <p>{res.category}</p>
                </>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Restaurant;
