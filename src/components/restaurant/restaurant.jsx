
import { Link } from 'react-router-dom';
const Restaurant = ({ restaurants }) => {
  return (
    <>
      <h1>all Restaurants</h1>
      <ul>
        {restaurants.map((res) => (<Link to={`/restaurants/${res._id}`}>
          <>
            <li>
              <h1>{res.name}</h1>
              <p>{res.category}</p>
            </li>
          </></Link>
        ))}
      </ul>
    </>
  );
};

export default Restaurant;
