import React, { useState } from 'react';
import './SearchBar.css';

const recentSearches = [
    'chup cafe',
    'Trạm Cafe',
    'trạm',
    'coffe hà nội',
    'coffe',
    'cofe',
    'tramcreamcoffee',
    'grapacoffee'
];

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar">
            <p className='p1'>TÌM KIẾM</p>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="timkiem">
                <div className='dondep'>
                    <h4>Gần đây</h4>
                    <button className="clear-btn">Xóa tất cả</button>
                </div>
                <div className='recent-searches'>
                    <ul>
                        {recentSearches.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
