import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    {/* Define more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
