import React from 'react';
import PostListItem from '../post-list-item'
import { ListGroup, ListGroupItem } from 'reactstrap';


import './post-list.css';

const PostList = ({posts, onModal, onChange}) => {

    const elements = posts
        // Фильтруем все элементы массива кроме объектов (пустые объекты тоже фильтруем)
        .filter(item => {
            return (Object.prototype.toString.call(item) === '[object Object]' && item.label && item.label.trim() !== '')
        })
        .map(item => {
            const {id, ...itemProps} = item;
            return (
                <ListGroupItem key={id} className="list-group-item">
                    <PostListItem 
                        {...itemProps}
                        onMod={() => onModal(id)}
                        onPush={(text) => onChange(text, id)}
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