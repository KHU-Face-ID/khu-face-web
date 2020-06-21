import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const menu={
        // background: 'blue',
        display: 'inline-block',
        width: '100px',
    }
    const activeStyle = {
        color:'green',
        // fontSize: '2rem'
        background: 'white'
    };

    return (
        <div style={menu}>
            <ul>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>계정</NavLink></li>
                <li><NavLink exact to="/dashboard" activeStyle={activeStyle}>과목</NavLink></li>
                {/* <li><NavLink to="/about/foo" activeStyle={activeStyle}>About foo</NavLink></li>
                <li><NavLink to="/todo" activeStyle={activeStyle}>Todo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li> */}
            </ul>
            <hr/>
        </div>
    )
}

export default Menu;