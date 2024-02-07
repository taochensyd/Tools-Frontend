import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/HomartPrinterTonerLevel">Printer Tower Level</Link>
                </li>
                <li>
                    <Link to="/HomartIGuard">iGuard Time</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
