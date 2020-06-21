import React, { Component } from 'react';
import axios from 'axios'
import Screen from 'components/Lecture/Screen';
import StudentInfo from 'components/Lecture/StudentInfo';

class Room extends Component{

    state={
        class_id : this.props.match.params.id,
        ip : "",
        boxToggleOn : false,
        screenToggleOn : false,
        //학생 명단 <- django
        students : {
        },
        //출석 명단 <- model at
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


    getBox = () => {
        const self = this;
        axios.get('http://34.80.62.248:1219/modelfr?ip=http://218.209.85.168:2020/shot.jpg')
            .then( response => {
                self.setState({
                    box:response.data.box
                });
                console.log(self.state.box);
            }).catch(function (error){
                console.log(error);
            });
    }

    getCurrentStudent = () => {
        const self = this;
        axios.get('http://34.80.62.248:1121/modelat?ip=http://218.209.85.168:2020/shot.jpg')
            .then( response => {
                self.setState({
                    currentStudents:response.data.id
                });
                console.log(self.state.currentStudents);
            }).catch(function (error){
                console.log(error);
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
                    class_id={this.state.class_id}
                    ip={this.state.ip}
                    boxToggleOn={this.state.boxToggleOn}
                    box={this.state.box}
                    currentStudents={this.state.currentStudents}/>
            )
        }
    }

    render(){
        const { class_id, ip, boxToggleOn } = this.state;
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
                수업 {class_id}, {ip}
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" ref={el => this.element = el} placeholder="ip를 입력하세요"/>
                        </label>
                        <button onClick={handleScreenToggle} type="submit">{this.state.screenToggleOn ? '수업 끝' : '수업 시작'}</button>
                    </form>
                    <button onClick={getBox}>modelfr</button>
                    <button onClick={getCurrentStudent}>modelat</button>
                    <label>
                        <input type="checkbox" checked={boxToggleOn} onChange={handleBoxToggle}></input>
                        show box
                    </label>
                </div>
                <div>
                    {validIp()}
                </div>
                <div>
                    <StudentInfo/>
                </div>
            </div>
        );
    };
};

export default Room;