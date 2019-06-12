import React from 'react';
import PostListItem from '../post-list-item'

import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts
        // Фильтруем все элементы массива кроме объектов
        .filter(item => {
            return Object.prototype.toString.call(item) === '[object Object]'
        })
        .map(item => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem 
                        // es8
                        {...itemProps}
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