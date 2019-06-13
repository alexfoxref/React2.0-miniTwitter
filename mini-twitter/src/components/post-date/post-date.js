import React from 'react';

import './post-date.css';

const PostDate = ({value}) => {
    const date = value,
    insertZero = (num) => {
        if (`${num}`.length === 1) return `0${num}`
        else return num
    },
    dateStr = `${insertZero(date.getDate())}/${insertZero(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${insertZero(date.getMinutes())}:${insertZero(date.getSeconds())}`;

    return (
        <p className="post-date-text">
            Запись добавлена: {dateStr}
        </p>
    )
}

export default PostDate;