//my restaurant
import { Link } from "react-router-dom";


import "../restaurant/restaurant.css"
const MyRestaurants = ({ myrestaurant }) => {
  return (
    <>

      <div className="restCont">
        <h1>All Owned Restaurants</h1>
        <ul className="restCard">
        {myrestaurant ? <>
          {myrestaurant.map((res) => (
            <Link key={res._id} className="restLink" to={`/MyRestaurants/${res._id}`}>
              <li >
              <div className="imgr">     <img className="resimage" src={res.resimage} alt={res.name} /></div>
                  <>
                    <h1>{res.name}</h1>
                    <p>{res.category}</p>
                  </>
                
              </li>
            </Link>
          ))}

</> : <><main>
        <h3>Loading...</h3>
      </main></>}
        </ul>
      </div>
    </>
  );
};

export default MyRestaurants;
