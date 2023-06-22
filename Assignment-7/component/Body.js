import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";


function filterData(SearchText, restaurants) {
    return( restaurants.filter((restaurant) =>
       restaurant?.data?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
     ));
   }

   
   const Body = () => {
    const [Allrestaurants, SetAllRestaurantlist] = useState([]);
     const [Filteredrestaurants, SetFilterRestaurantlist] = useState([]);
     const [SearchText, SetSearchText] = useState("");

     useEffect(()=>{
  
      getRestaurants();
     },[])
     
     async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      // Optional Chaining
      SetAllRestaurantlist(json?.data?.cards[2]?.data?.data?.cards);
      SetFilterRestaurantlist(json?.data?.cards[2]?.data?.data?.cards);
    }
  

       if(!Allrestaurants) return null;
      //  if(Allrestaurants?.length === 0) return (
      //   <h1>No Result match!!</h1>
      //  )

    return Allrestaurants.length === 0?(
<Shimmer/>
    ):(
  <div className="body" id = "Card">
    <div className="middle" >
            <input type="text"
                className="search"
                id="search"
                placeholder=" Search the item"
                value={SearchText}
                onChange={(e) => {

                    SetSearchText(e.target.value);
                } }
            ></input>
            <button
                onClick={() => {
                  
                    
                    SetFilterRestaurantlist( filterData(SearchText, Allrestaurants));
                    document.getElementById("Card").style.alignContent = "flex-start";
                    
                    SetSearchText("")
                } }

            >Search</button>
            
           
        </div>
        <div className="ResCard" >
    {
        
        Filteredrestaurants.length>0?Filteredrestaurants.map(restaurant =>{
             return <ReastaurantCard {...restaurant.data} key = {restaurant.data.id}/>
        }):(<h2>NO Result Found</h2>)
    }
    </div>
  </div>
  
    );
  };
  const ReastaurantCard = ({name,lastMileTravelString,address,cloudinaryImageId})=>{
    
    return( <div className="card">
       <div className="card-image">
        <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId} alt="restaurant image" />
        </div>
        <div className="card-context">
        <h3 className="ResName">{name.substring(0, 25)}
        
        </h3>
        <h3>{lastMileTravelString}  minutes</h3>
        <h3>{address.substring(0,20) + " ..."}</h3>
        </div>
        
     </div>);
};

export default Body;