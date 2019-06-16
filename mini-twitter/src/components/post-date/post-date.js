import React from 'react';

import styled from 'styled-components';

const DatePost = styled.p`
    font-size: .75rem;
    font-style: italic;
    line-height: 35px;
`;

const PostDate = ({time, timeText}) => { 
    const date = time,
    insertZero = (num) => {
        if (`${num}`.length === 1) return `0${num}`
        else return num
    },
    dateStr = `${insertZero(date.getDate())}/${insertZero(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${insertZero(date.getMinutes())}:${insertZero(date.getSeconds())}`;

    return (
        <DatePost>
            Запись {timeText}: {dateStr}
        </DatePost>
    )
}

export default PostDate;