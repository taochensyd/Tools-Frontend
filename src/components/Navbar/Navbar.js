import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link> {/* Link to the main page */}
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
