import React from 'react';

import './post-date.css';

const date = new Date(),
    insertZero = (num) => {
        if (`${num}`.length === 1) return `0${num}`
        else return num
    },
    dateStr = `${insertZero(date.getDate())}/${insertZero(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${insertZero(date.getMinutes())}`;

const PostDate = () => {
    return (
        <p className="post-date-text">
            Запись добавлена: {dateStr}
        </p>
    )
}

export default PostDate;