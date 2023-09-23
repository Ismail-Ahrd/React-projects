import React from "react";

export default function Navbar(){
    return(
        <nav className="nav">
            <img src="../public/react-logo.png" alt="React logo" className="nav--icon" />
            <h1 className="nav--logo_text">ReactFacts</h1>
            <h3 className="nav--title">React Course-Project 1</h3>
        </nav>
    )
}