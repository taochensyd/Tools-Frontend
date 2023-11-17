import React from 'react';
import HomartPrinterTonerLevel from '../../components/HomartPrinterTonerLevel/HomartPrinterTonerLevel';
import './MainPage.css'; // Import the CSS for MainPage

const MainPage = () => {
    return (
        <div className="main-container">
            <h1>Welcome to Homart Printer Management</h1>
            <HomartPrinterTonerLevel />
        </div>
    );
};

export default MainPage;
