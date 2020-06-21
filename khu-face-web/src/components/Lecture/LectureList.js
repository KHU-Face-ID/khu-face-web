import React, { useEffect, useReducer, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

function reducer(state, action){
    switch (action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function LectureList(){
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchLectures = async () => {
        dispatch({ type: 'LOADING'});
        try{
            const response = await axios.get(
                'http://121.135.128.15:8000/dashboard/'
            );
            dispatch({ type: 'SUCCESS', data: response.data});
        } catch (e){
            dispatch({ type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchLectures();
    }, []);

    const { loading, data: lectures, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lectures) return null;
    return (
        <Fragment>
            <ul>
                {lectures.map(lecture => (
                    <li key={lecture.id}><NavLink to={`/lecture/${lecture.id}`}>{lecture.lecture_name}</NavLink></li>
                ))}
            </ul>
            <button onClick={fetchLectures}>다시 불러오기</button>
        </Fragment>
    );
}

export default LectureList;