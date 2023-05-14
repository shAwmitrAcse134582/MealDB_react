import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <h1>MealDb</h1>
            </div>
            <div className='right'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>menu</a>
                <a href='#order'>order</a>
                <a href='#contact'>contact</a> 
            </div>
            
        </div>
    );
};

export default Header;