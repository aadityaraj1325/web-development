// import React from "react";
// import ReactDOM from "react-dom/client"

// const element1 = <h1>Hello adii</h1>
// function greet(name){
//     return <h2>Ram Ram {name}</h2>
// }
// const Root = ReactDOM.createRoot(document.getElementById("root"))
// Root.render(greet("Adityaaa"));
import React from "react";
import ReactDOM from "react-dom/client";

// let obj = {
//     name:"singh",
//     age:21,
// }
// const arr = [20,40,"Adi",10]
//props it mke object
function greet(props) {
    console.log(props);
  return <h1>Ram Ram {props.name} {props.age}</h1>
};
const element2 = <greet name="aditya Singh" age="23"/>

const root = ReactDOM.createRoot(document.getElementById("fruit"));
root.render(greet());
