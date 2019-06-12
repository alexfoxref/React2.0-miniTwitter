import React, {Component} from 'react';

import PostDate from '../post-date'

import './post-list-item.css';

export default class PostListItem extends Component {

    // Class Fields
    state = {
        important: false,
        like: false
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props,
            {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }
        
        return (
            <div className={classNames}>
                <span 
                    className="app-list-item-label" 
                    onClick={this.onLike}>
                        {label}
                        <PostDate/>
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}