import React, { useState } from 'react';
import logo from "../img/icons/logo.svg"
import search from "../img/icons/search_icon.svg"
import cart from "../img/icons/cart_icon.svg"
//import menu from '../img/icons/menu-icon.svg';
export default function Header() {

    const [isOpen, setOpen] = useState();
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__wrap">
                        <button className='nav__hamburger-menu' onClick={() => setOpen(isOpen)}  ><img className="logo_img" src={cart} alt="menu" /></button>

                        <div className='nav__logo'>
                            <img className="logo_img" src={logo} alt="Organick" />
                            <a className='logo_name'>Organick</a>
                        </div>
                        <ul className={`nav__menu ${isOpen ? "active" : ""} `} id="menu">
                            <li className="menu__nav-link"><a href="#home_page">Home</a></li>
                            <li className="menu__nav-link"><a href="#about-page">About</a></li>
                            <li className="menu__nav-link"><a href="#pages-page">Pages</a></li>
                            <li className="menu__nav-link"><a href="#shop-page">Shop</a></li>
                            <li className="menu__nav-link"><a href="#projects-page">Projects</a></li>
                            <li className="menu__nav-link"><a href="#news-page">News</a></li>
                        </ul>
                        <div className="nav__menu">
                            <div className='menu__search'>
                                <input className='search_input' type="text" placeholder="Search.." name="search"></input>
                                <img className="search_button" src={search} alt="search" />
                            </div>
                            <div className='menu__basket'>
                                <img className='basket_button' src={cart} alt="cart" />
                                <a className='basket_text'>Cart()</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="popup" id="popup"></div>
        </>


    );
}

