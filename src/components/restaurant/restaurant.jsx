const Restaurant =({restaurants})=>{

return (
    <>
 
<h1>all Restaurants</h1>   
<ul>
{restaurants.map((res)=>(<>
<li><h1>{res.name}</h1>
<p>{res.category}</p>


</li>


</>
))}
</ul>
</>
)







}

export default Restaurant ; 