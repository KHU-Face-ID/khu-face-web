import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Room, Info } from 'pages'

const Lecture = ({match}) => {
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

    const id = match.params.id;

    return (
        <div>
            <div style={menu}>
                <ul>
                    <li><NavLink to={`/lecture/${id}/room`} activeStyle={activeStyle}>수업</NavLink></li>
                    <li><NavLink to={`/lecture/${id}/info`} activeStyle={activeStyle}>수업 관리</NavLink></li>
                </ul>
                <hr/>
            </div>
            <div>
                <Route path={`/lecture/:id/room`} component={ Room }/>
                <Route path={`/lecture/:id/info`} component={ Info }/>
            </div>
        </div>
    )
};

export default Lecture;