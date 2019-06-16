import React, {Component} from 'react';

import PostDate from '../post-date';
import PostEdit from '../post-edit';

import './post-list-item.css';

export default class PostListItem extends Component {

    // Class Fields
    state = { 
        invisible: true,
        time: new Date(),
        timeText: 'добавлена'
    }

    onImportant = () => {
        const {important} = this.state;
        this.setState(() => ({
            important: !important
        }))
    }

    onLike = () => {
        const {like} = this.state;
        this.setState(() => ({
            like: !like
        }))
    }

    // Функция добавления редактированной записи
    onPush = (text) => {
        this.setState(() => ({
            invisible: true,
            time: new Date(),
            timeText: 'отредактирована'
        }));
        this.props.onPush(text);
    }

    // Функция открытия окна редактирования
    onEdit = (event) => {
        const {invisible} = this.state,
            {label} = this.props;
        this.setState(() => ({
            invisible: !invisible
        }))
        // Индекс кнопки
        let ind;
        const elems = document.querySelectorAll('.btn-pencil');
        elems.forEach((item, index) => {
            const incl = item.querySelectorAll('*');
            incl.forEach(i => {
                if (event.target === i || event.target === item) {
                    ind = index
                }
            })
        })
        // Меняем надпись в окне редактирования на начальную
        document.querySelectorAll('textarea')[ind].value = label;
    }

    render() {
        const {onMod, label, onToggleParam, important, like} = this.props;
        const {invisible, time, timeText} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <div className="app-list-item-note">
                    <span 
                        className="app-list-item-label" 
                        onClick={() => onToggleParam('like')}>
                            {label}
                    </span>

                    {/* Время добавления записи */}
                    <PostDate
                        time={time}
                        timeText={timeText}/>
                </div>

                <PostEdit
                    invisible={invisible}
                    addPost={(text) => this.onPush(text)}
                    label={label}/>

                <div className="app-list-item-reactions d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={() => onToggleParam('important')}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onMod}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    {/* Кнопка редактирования */}
                    <button
                        type="button"
                        className="btn-pencil btn-sm"
                        onClick={this.onEdit}>
                            <i className="fa fa-pencil-square-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}