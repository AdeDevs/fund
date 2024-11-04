import { useState } from "react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      // Function to toggle cart
    const toggleCart = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="intro-nav">
                <h1>Fund</h1>
                <ul className="about">
                    <li>Home</li>
                    <li>Donation</li>
                    <li>How It Works</li>
                    <li>About Us</li>
                </ul>
            </div>
                <button className="download">Download App</button>
            <span className="toggle-menu"><ion-icon name="menu-outline" onClick={toggleCart} /></span>
            {isMenuOpen && (
        <div
          className={`overlay ${isMenuOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <span className="toggle-menu"> <ion-icon name="close-outline" onClick={toggleCart} /> </span>
        <ul>
                <li>Home</li>
                <li>Donation</li>
                <li>How It Works</li>
                <li>About Us</li>
                <li>Download App</li>
        </ul>
      </div>
        </nav>
    )
}

export default NavBar;