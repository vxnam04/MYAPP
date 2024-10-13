import React from 'react';
import SearchBar from './SearchBar.js';
import './Timkiem.css';
import New from './New.js';

function Timkiem() {
    return (
        <div className="app-container">
            <div className="search-container">
                <SearchBar />
            </div>
            <div className="newsfeed-container">
                <New />
            </div>
        </div>
    );
}

export default Timkiem;
