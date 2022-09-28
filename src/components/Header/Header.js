import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>Daily Workout</h1>
        </div>
    );
};

export default Header;