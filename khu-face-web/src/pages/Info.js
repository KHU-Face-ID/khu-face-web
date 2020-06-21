import React from 'react';

const Info = ({match}) => {
    return (
        <div>
            수업 정보 {match.params.id}
        </div>
    );
};

export default Info;