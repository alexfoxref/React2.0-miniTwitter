import React from 'react';
import PostListItem from '../post-list-item'
import { ListGroup, ListGroupItem } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts
        // Фильтруем все элементы массива кроме объектов (пустые объекты тоже фильтруем)
        .filter(item => {
            return (Object.prototype.toString.call(item) === '[object Object]' && Object.keys(item).length !== 0)
        })
        .map(item => {
            const {id} = item;
            return (
                <ListGroupItem id={id} key={id} className="list-group-item">
                    <PostListItem 
                        // es8
                        {...item}
                        // эквивалентно
                        // label={item.label} 
                        // important={item.important}
                        onDelete={() => onDelete(id)}
                    />
                </ListGroupItem>
            )
        });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;