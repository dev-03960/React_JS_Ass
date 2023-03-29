import React from "react";
import reactDom from "react-dom/client";
import logo from './Assets/logo.png';

import icon2 from './Assets/icons8-facebook.svg';
import icon3 from './Assets/icons8-twitter.svg';
import icon4 from './Assets/icons8-instagram.svg';
import './styles/style.css';


const header = () =>{

return (
    <><div className="navbar">
    {image()}
    {search()}
    {icons()}
 </div>
 
    </>
 
);

}
const image = () =>{

    return(
       <div className="left">
        <img src={logo} className = "logo" alt="logo" />
       </div>

    );
}
const search = ()=>{

    return(
           <div className="middle">
            <button>All</button>
            <input type="text" name="search" id="search"></input>
            <button>Search</button>
           </div>
    );
}

const icons = () =>{

    return (
        <div className="right">
        
            
            <a href="#"><img src={icon2} alt="icon2"/></a>
            <a href="#"><img src={icon3} alt="icon3"/></a>
            <a href="#"><img src={icon4} alt="icon4"/></a>
            
        
    </div>
    )
}

   


const root = reactDom.createRoot(document.getElementById("root"));
root.render(header());