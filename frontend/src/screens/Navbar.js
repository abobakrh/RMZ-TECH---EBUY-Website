import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    function openMenu ()  {
        document.getElementById("side-menu").style.display="block";
        document.getElementById("menu-btn").style.display="none";
        document.getElementById("close-btn").style.display="block";

    }
    function closeMenu ()  {
        document.getElementById("side-menu").style.display="none";
        document.getElementById("menu-btn").style.display="block";
        document.getElementById("close-btn").style.display="none";

    }
    return (
        <div className="top-nav-bar">
            <i className="fa fa-bars" id="menu-btn" onClick={openMenu()}></i>
            <i className="fa fa-times" id="close-btn" onClick={closeMenu()}></i>
            <img src="/images/E-BUY.png" alt="logo" className="logo"></img>
            <div className="search-box">
                <input type="text" className="form-control"></input>
                <span className="input-group-text"> <i className="fa fa-search"></i> </span>
            </div>
            <div className="menu-bar">
                <ul>
                    <li> <Link to="/cart"> <i className="fa fa-shopping-basket"></i> </Link> </li>
                    <li> <Link to="/signin"> <i className="fa fa-sign-in"></i> </Link> </li>
                    <li><Link to="/register"> <i className="fa fa-user-plus"></i> </Link> </li>
                </ul>
            </div>
        </div>
    )
}
