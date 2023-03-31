
import { restaurantsList } from "../Config/conatins";
import { useState } from "react";


function filterData(SearchText, restaurants) {
    return( restaurants.filter((restaurant) =>
       restaurant.data.name.includes(SearchText)
     ));
   }
const Body = () => {
    const [restaurants, SetRestaurantlist] = useState(restaurantsList);
    const [SearchText, SetSearchText] = useState("");

    return (
  <div className="body">
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
                     
                    SetRestaurantlist( filterData(SearchText, restaurants));
                } }

            >Search</button>
            
           
        </div>
        <div className="ResCard" id = "Card">
    {
        
        restaurants.map(restaurant =>{
             return <ReastaurantCard {...restaurant.data} key = {restaurant.data.id}/>
        })
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