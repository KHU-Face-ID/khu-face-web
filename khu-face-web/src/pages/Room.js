import React, { Component } from 'react';
import axios from 'axios'
import Screen from 'components/Lecture/Screen';
import StudentInfo from 'components/Lecture/StudentInfo';

class Room extends Component{

    state={
        lecture_id : this.props.match.params.id,
        ip : "",
        boxToggleOn : false,
        screenToggleOn : false,
        //수업 정보
        lectureInfo : {
        },
        //학생 명단(id and info) <- django
        students : {
        },
        //출석 명단(id) <- model at
        currentStudents : {
        },
        //box <- model fr
        box : {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.screenToggleOn === true){
            this.setState(
                { ip: this.element.value }
            );
        } else {
            this.setState(
                { ip: "" }
            );
        }
    }

    handleBoxToggle = (e) => {
        this.setState(state => ({
            boxToggleOn: !state.boxToggleOn
        }));
    }

    handleScreenToggle = (e) => {
        this.setState(state => ({
            screenToggleOn: !state.screenToggleOn
        }));
    }

    getLectureInfo = () => {
        const self = this;
        axios.get('http://121.135.128.15:8000/dashboard/lecture/'+this.state.lecture_id+'/')
            .then( response => {
                self.setState({
                    lectureInfo:response.data.lecture
                });
                // console.log(self.state.lectureInfo);
            }).catch(function (error){
                // console.log(error);
            });
    }

    getStudent = () => {
        const self = this;
        axios.get('http://121.135.128.15:8000/dashboard/lecture/'+this.state.lecture_id+'/students/')
            .then( response => {
                self.setState({
                    students:response.data.students
                });
                // console.log(self.state.students);
            }).catch(function (error){
                // console.log(error);
            });
    }

    getBox = () => {
        const self = this;
        // http://34.80.62.248:1219/modelfr?ip=http://218.209.85.168:2020/shot.jpg
        // http://34.80.62.248:1121/modelat?ip=http://121.135.128.15:2021/shot.jpg
        axios.get('http://35.201.192.108:1219/modelfr?ip=http://121.135.128.15:2021/shot.jpg')
            .then( response => {
                self.setState({
                    box:response.data.box
                });
                // console.log(self.state.box);
            }).catch(function (error){
                // console.log(error);
            });
    }

    getCurrentStudent = () => {
        const self = this;
        axios.get('http://35.201.192.108:1121/modelat?ip=http://121.135.128.15:2021/shot.jpg')
            .then( response => {
                self.setState({
                    currentStudents:response.data.id
                });
                // console.log(self.state.currentStudents);
            }).catch(function (error){
                // console.log(error);
            });
    }

    validIp = () => {
        if(this.state.ip==="") {
            return (
                <div>수업 중이 아닙니다.</div>
            )
        } else {
            return (
                <Screen
                    lecture_id={this.state.lecture_id}
                    ip={this.state.ip}
                    boxToggleOn={this.state.boxToggleOn}
                    box={this.state.box}/>
            )
        }
    }

    UNSAFE_componentWillMount() {
        this.getLectureInfo();
        this.getStudent();
    }

    UNSAFE_componentDidMount() {
        this.getBox();
    }

    render(){
        const {
            boxToggleOn,
            lectureInfo,
            students,
            currentStudents,
        } = this.state;

        const {
            handleSubmit,
            handleBoxToggle,
            handleScreenToggle,
            getBox,
            getCurrentStudent,
            validIp
        } = this;

        return (
            <div>
                {getBox()}
                <p className="classname">{lectureInfo['lecture_name']}</p>
                <div className="attendance-list">
                    <p>--- 출석 명단 ---</p>
                    <StudentInfo students={students} currentStudents={currentStudents}/>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" ref={el => this.element = el} placeholder="ip를 입력하세요"/>
                        </label>
                        <button onClick={handleScreenToggle} type="submit">{this.state.screenToggleOn ? '수업 끝' : '수업 시작'}</button>
                    </form>
                    <button onClick={getCurrentStudent}>출석체크</button>
                    <label>
                        <input type="checkbox" checked={boxToggleOn} onChange={handleBoxToggle}></input>
                        show box
                    </label>
                </div>
                <div>
                    {validIp()}
                </div>
            </div>
        );
    };
};

export default Room;