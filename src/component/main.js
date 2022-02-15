import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./Home";
import About from "./Aboute";
import Services from "./Services";
import ProductExpertise from "./ProductExpertise";
import Careers from "./Careers";
import Contact from "./Contact";
import Footer from "./footer";
function Main(){
    return(
        <Router>
        <div>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="/about" element={<About></About>} />
                <Route exact path="/services" element={<Services></Services>} />
                <Route exact path="/product" element={<ProductExpertise></ProductExpertise>} />
                <Route exact path="/careers" element={<Careers></Careers>} />
                <Route exact path="/contact" element={<Contact></Contact>} />
            </Routes>
            <Footer></Footer>
        </div>
        </Router>
    )
}
export default Main;