import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Room, Info } from 'pages'
import './Lecture.css'

const Lecture = ({match}) => {
    const activeStyle = {
        'text-decoration': 'underline'
    };

    const id = match.params.id;

    return (
        <div>
            <div className="lecture-menu">
                <ul>
                    <li className="lecture-menu-li"><NavLink className="lecture-menu-nav" to={`/lecture/${id}/room`} activeStyle={activeStyle}>수업</NavLink></li>
                    <li className="lecture-menu-li"><NavLink className="lecture-menu-nav" to={`/lecture/${id}/info`} activeStyle={activeStyle}>수업 관리</NavLink></li>
                </ul>
                <hr/>
            </div>
            <div className="lecture-contents">
                <Route path={`/lecture/:id/room`} component={ Room }/>
                <Route path={`/lecture/:id/info`} component={ Info }/>
            </div>
        </div>
    )
};

export default Lecture;