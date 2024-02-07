import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import HomartPrinterTonerLevel from './components/HomartPrinterTonerLevel/HomartPrinterTonerLevel';
import HomartIGuard from './components/HomartIGuard/HomartIGuard';

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/HomartPrinterTonerLevel" element={<HomartPrinterTonerLevel />} />
                    <Route path="/HomartIGuard" element={<HomartIGuard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
