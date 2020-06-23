import React from 'react';

const StudentInfo = ({students, currentStudents}) => {

    function showStudents(){
        try{
            return students.map(student => {
                return (currentStudents.find(function (n) {
                    return n === String(student['id']-1) }))
                    ? <li key={student['id']}>{student['name']} 출석</li>
                    : <li key={student['id']}>{student['name']} 결석</li>
            })
        } catch (e) {
            return null;
        }
    }

    return (
        <div>
            <div>{showStudents()}</div>
        </div>
    );
};

export default StudentInfo;