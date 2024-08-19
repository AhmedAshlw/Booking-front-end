const MyRestaurants = ({myrestaurant})=>{


return (<>all owned restaurant
<ul>
{myrestaurant.map((res)=>(<>
              <h1>{res.name}</h1>
              <p>{res.category}</p>
              </>
))}
</ul>
</>)



}


export default MyRestaurants;