import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="container">
            <div className="header">
                <img src="https://cdn.shortpixel.ai/spai/w_199+q_lossy+ret_img+to_webp/https://assimilatetechnologies.com/wp-content/uploads/2020/04/assimilatet_logo.png" alt="" /></div>
            <div className="main">
                <Link to ="/">Home</Link>
                <Link to ="/about">About Us</Link>
                <Link to ="/services">Services</Link>
                <Link to ="/product">Product Expertise</Link>
                <Link to ="/careers">Careers</Link>
                <Link to ="/contact">Contact Us</Link>
                
            </div>
            <div>
                <p> call us: +91 8888899151</p>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Header;