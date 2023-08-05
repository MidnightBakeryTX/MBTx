import React, { useState } from "react";
import logo from "../Assets/Images/Midnight Bakery Logo (1).png";
import "./Header.css"

const Header = ({ currentPage, pageSwitch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePageClick = (page) => {
        pageSwitch(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo for Midnight Bakery" />
            <nav className={isMenuOpen ? 'nav open' : 'nav'}>
                <ul className="navMenu">
                    <li className="navItem">
                        <button
                            className={currentPage === 'Home' ? 'selected' : ''}
                            onClick={() => handlePageClick('Home')}>Home</button>
                    </li>
                    <li className="navItem">
                        <button
                            className={currentPage === 'About' ? 'selected' : ''}
                            onClick={() => handlePageClick('About')}>About</button>
                    </li>
                    <li className="navItem">
                        <button
                            className={currentPage === 'Menu' ? 'selected' : ''}
                            onClick={() => handlePageClick('Menu')}>Menu</button>
                    </li>
                    <li className="navItem">
                        <button
                            className={currentPage === 'Contact' ? 'selected' : ''}
                            onClick={() => handlePageClick('Contact')}>Contact</button>
                    </li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </nav>
        </header>
    )
}

export default Header