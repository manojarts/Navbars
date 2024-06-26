import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    const [isMobile,setIsMobile]=useState(false);
    
  return (
    
    <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className={isMobile ? "nav-links-mob":"nav-links"} onClick={() => setIsMobile(false)}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/about" className="about">
                <li>About</li>
            </Link>
            <Link to="/contact" className="contact">
                <li>Contact</li>
            </Link>
            <Link to="/products" className="products">
                <li>Products</li>
            </Link>
            <Link to="/signup" className="signup">
                <li>SignUp</li>
            </Link>
           
        </ul>
    
        <button className="mob-menu-icon" onClick={() => setIsMobile(isMobile)}>
            {isMobile ? alert(<h1>"X"</h1>):<h1>=</h1>}
        </button>

    </nav>
  )
}
/*? ==> is Condition Operator Or Ternary Opertor
The question mark symbol "?" in React is called the "conditional operator" or "ternary operator". 
It's a shorthand for an if-else statement. 
It can be used to render different content based on a condition. 
Here's an example in JavaScript:
condition ? expressionIfTrue : expressionIfFalse
If the condition is true, the expressionIfTrue is executed, 
otherwise, the expressionIfFalse is executed.*/
export default Navbar;