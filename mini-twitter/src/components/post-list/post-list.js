import React from 'react';
import PostListItem from '../post-list-item'

import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts
        // Фильтруем все элементы массива кроме объектов (пустые объекты тоже фильтруем)
        .filter(item => {
            return (Object.prototype.toString.call(item) === '[object Object]' && Object.keys(item).length !== 0)
        })
        .map(item => {
            const {id} = item;
            return (
                <li id={id} key={id} className="list-group-item">
                    <PostListItem 
                        // es8
                        {...item}
                        // эквивалентно
                        // label={item.label} 
                        // important={item.important}
                    />
                </li>
            )
        });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;