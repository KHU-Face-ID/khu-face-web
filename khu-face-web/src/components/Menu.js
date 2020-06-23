import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    const activeStyle = {
        color:'#3399ff',
        background: 'white'
    };

    return (
        <div className="menu">
            <ul className="links">
                <li className="li-link"><NavLink className="menu-link" exact to="/about" activeStyle={activeStyle}>계정</NavLink></li>
                <li className="li-link"><NavLink className="menu-link" exact to="/dashboard" activeStyle={activeStyle}>과목</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;