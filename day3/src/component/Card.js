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
export default Card;