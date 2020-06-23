import React, { Fragment, useState } from 'react';
import axios from 'axios'
import './Screen.css'

const Screen = ({ lecture_id, ip, boxToggleOn, box}) => {
    const [ student, setStudent ] = useState(null);

    const getStudent = (student_id) => {
        axios.get('http://121.135.128.15:8000/dashboard/lecture/'+lecture_id+'/'+student_id+'/')
            .then( response => {
                setStudent({student:response.data.student});
                console.log("box student!");
                console.log(student);
            }).catch(function (error){
                // console.log(error);
            });
    }

    const showStudent = (student) => {
        if(student == null){
            return null
        } else {
            return (
                <div>{student['name']}</div>
            )
        }
    }

    const showFrame = () => {
        try {
            return box.map(frame => {
                return <button
                            key={frame.id} type="button"
                            className={"button " + ( boxToggleOn ? null : 'ghost')}
                            onClick={() => getStudent(parseInt(frame.id)+1)}
                            style={{ left: frame.x1*(700/1920), top: frame.y1*(400/1080),
                                    width: (frame.x2-frame.x1)*(700/1920), height: (frame.y2-frame.y1)*(400/1080) }}>
                        </button>
            })
        } catch (e) {
            return (
                null
            )
        }
    }

    return (
        <div>
            <div>
                <div>선택한 학생!</div>
                <div>{showStudent(student)}</div>
            </div>
            <div className="screen">
                <img className="screen-video" src={`http://${ip}/video`} alt="수업 중이 아닙니다."></img>
                <Fragment>{showFrame({box})}</Fragment>
                <iframe title="settings" className="screen-video" src={`http://${ip}/settings_window.html`} frameBorder="0"/>
            </div>
        </div>
    )
};


export default Screen;