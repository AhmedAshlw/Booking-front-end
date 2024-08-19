import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//service
import * as resService from "../../services/restaurant";

const MyResDetails = ()=>{

    const { resId } = useParams();
    const [res, setres] = useState();
    const [showComponent, setShowComponent] = useState(false);
  
    useEffect(() => {
      async function getRes() {
        const resData = await resService.show(resId);
        setres(resData);
      }
      getRes();
    }, [resId]);
  
    if (!res) {
      return (
        <main>
          <h3>Loading...</h3>
        </main>
      );
    }
  
 
    return (
      <>
        <h1>{res.name}</h1>
        <p>Location :{res.location}</p>
        <p>Rating : {res.rating}</p>
        <p>Category : {res.category}</p>
        <p>operatingHours :{res.operatingHours}</p>
       
      </>
    );





}

export default MyResDetails ;