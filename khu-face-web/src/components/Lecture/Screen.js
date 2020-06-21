import React from 'react';
import { Route } from 'react-router-dom';
import './Screen.css'

const Screen = ({ class_id, ip, boxToggleOn, box, currentStudents }) => {
    console.log("Screen now!")
    console.log(box)
    console.log(currentStudents)

    const frame = () => {
        try {
            return box.map(frame => {
                return <button key={frame.id} type="button"
                            className={"button " + ( boxToggleOn ? null : 'ghost')}
                            style={{ left: "25px", top: "30px", width: "50px", height: "50px" }}>
                        </button>
            })
                // <ul>
                //     {box.map(frame => (
                //         <li key={frame.id}>{frame.id} {frame.x1} {frame.y1} {frame.x2} {frame.y2}</li>
                //     ))}
                // </ul>
                // <div>
                //     {box.map(frame => (
                //         <button key={frame.id} type="button"
                //             className={"button " + ( boxToggleOn ? null : 'ghost')}
                //             style={{ left: "25px", top: "30px", width: "50px", height: "50px" }}>
                //         </button>
                //     ))}
                // </div>
        } catch (e) {
            console.log(e);
            return (
                null
            )
        }
    }

    return (
        <div>
            <div>{ip}</div>
            <div>{frame({box})}</div>
            <div className="screen">
                <img className="screen-video" src={`http://${ip}/video`} alt="수업 중이 아닙니다."></img>
                {/* <button type="button"
                    className={"button " + ( boxToggleOn ? null : 'ghost')}
                    style={{ left: "25px", top: "30px", width: "50px", height: "50px" }}>
                </button> */}
                <iframe title="settings" className="screen-video" src={`http://${ip}/settings_window.html`} frameBorder="0"/>
            </div>
            <div>
                <Route></Route>
            </div>
        </div>
    )
};


export default Screen;