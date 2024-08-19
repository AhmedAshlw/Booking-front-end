import { Link } from 'react-router-dom';
const MyRestaurants = ({myrestaurant})=>{


return (
    <>
        all owned restaurant
        <ul>
            {myrestaurant.map((res) => (
                <>
                    <Link to={`/MyRestaurants/${res._id}`}>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{res.name}</h5>
                                <p class="card-text">{res.category}</p>
                               
                            </div>
                        </div>
                    </Link>
                </>
            ))}
        </ul>
    </>
);



}


export default MyRestaurants;