import react from "react";
import reactDom from "react-dom";

const heading1 = react.createElement(
    "h1",
    {
        id: "title",
        key: "heading1"
    },
    "Heading1 for project",
)

const heading2 = (<h1 id = "title" key = " heading2">
    Namaste React</h1>);


// const container = react.createElement(
//     "div",
//     {
// id: "wrapper",

//     },
//     [heading1,heading2],
//)
 var x = function  x(){
    for (let index = 0; index < 10; index++) {
        {heading1}
        
      }
}
console.log(x);
const Container = () =>{
    return (
        <div id="wrapper">
      {heading1}
      {heading2}
    </div>
    );
}


const root  = reactDom.createRoot(document.getElementById("root"));

root.render(Container());