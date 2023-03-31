import { useState } from "react";
import {restaurantsList} from "../Config/conatins.js";
import Body from "./Body.js";



const Header = () => {

    return (
    <>
    <div className="navbar">
        <Image/>
     <Search/>
     <Icons/>
 </div>
 
    </>);
};
const Image = () => {

    return (
        <div className="left">
            <img src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" className="logo" alt="logo" />
        </div>

    );
}
function filterData(SearchText, restaurants) {
     return( restaurants.filter((restaurant) =>
        restaurant.data.name.includes(SearchText)
      ));
    }
function Search() {
    const [restaurants, SetRestaurantlist] = useState(restaurantsList);
    const [SearchText, SetSearchText] = useState("");

    return (
        <div className="middle">
            <button>All</button>
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
                    document.getElementById("Card").style.justifyContent = "flex-start";
                    
                } }

            >Search</button>
            
        </div>
    );
}



const Icons = () =>{

    return (
        <div className="right">
    <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
    </ul>
        
    </div>
    )
}

export default Header;
