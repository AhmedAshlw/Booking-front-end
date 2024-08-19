import { Link } from 'react-router-dom';
const MyRestaurants = ({myrestaurant})=>{


return (<>all owned restaurant
<ul>
{myrestaurant.map((res)=>(<><Link to={`/restaurants/${res._id}`}>
              <h1>{res.name}</h1>
              <p>{res.category}</p>
              </Link></>
))}
</ul>
</>)



}


export default MyRestaurants;