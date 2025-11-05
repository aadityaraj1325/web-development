import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/header";
import Card from "./component/Card";
import arr from "./utils/dummy";

function Card(props){
    return(
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VxQK24ynzsb8AL5_DtevcZRoQmta6CEidg&s" height="200px" width="200px" alt={props.cloth}/>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    );
}

function Header(){
    return(
        <div className="heading">
            <img src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" height="80px" width="80px" alt="Myntra"/>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>

            </div>
            <input className="searchbar" placeholder="Search for Brands and more" />
            <div className="profile">
                <button className="pro">Profiles</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
                
            </div>

        </div>
    );
}

const arr = [{cloth:"Tshirt", offer:"20-40%off"},{cloth:"Pant",offer:"20-80%off"},{cloth:"Kurta",offer:"20-80%off"},{cloth:"pajma", offer:"20-80%off"},{cloth:"Kurta" ,offer:"20-80%off"},{cloth:"Kurta" ,offer:"20-80%off"},{cloth:"Soap" ,offer:"20-80%off"}]

function App(){
    return(<>
        <Header />
        <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="jeans" offer="20-80%off"/>
            <Card cloth="Pant" offer="20-80%off"/>
            <Card cloth="Kurta" offer="20-80%off"/>
            <Card cloth="Pajama" offer="20-80%off"/>
            <Card cloth="Suit" offer="20-80%off"/>
            <Card cloth="shoes" offer="20-80%off"/>
            <Card cloth="socks" offer="20-80%off"/>
            <Card cloth="cold drink" offer="20-80%off"/>
            <Card cloth="sandal" offer="20-80%off"/>
            <Card cloth="books" offer="20-80%off"/> */}

            {
                arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }
 
        </div>
        </>
    );
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);