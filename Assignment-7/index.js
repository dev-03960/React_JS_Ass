import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './styles/style.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";




const Foodvila = () => {
    return (
        <>
           <Header/>
            <Body />
            <Footer/>
        </>

    )
}




  
  





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foodvila/>);
