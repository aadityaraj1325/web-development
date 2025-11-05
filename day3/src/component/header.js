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

export default Header;