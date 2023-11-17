import React from 'react';
import HomartPrinterTonerLevel from '../../components/HomartPrinterTonerLevel/HomartPrinterTonerLevel'; // Ensure the path is correct
import './MainPage.css'; // Import the CSS for MainPage

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>Welcome to Homart Printer Management</h1>
            <p>This is the home page of your application. Below is the printer toner level:</p>
            <HomartPrinterTonerLevel />
        </div>
    );
};

export default MainPage;
