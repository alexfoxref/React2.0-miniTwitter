import React, {Component} from 'react';

import PostDate from '../post-date';

import './post-list-item.css';

export default class PostListItem extends Component {

    // Class Fields
    state = {
        label: this.props.label,
        important: false,
        like: false,
        editForm: true,
        pushBtn: true,
        time: new Date()
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

    // Показываем форму при клике на кнопку редактирования
    onEdit = () => {
        this.setState(({editForm}) => ({
            editForm: !editForm
        }))
    }

    // Показываем кнопку добавить при редактировании поста 
    // (нужно бы ограничение на заполнение строки, чтобы переносить слова)
    onInput = () => {
        const elem = document.getElementById(this.props.id),
            textarea = elem.querySelector('textarea'),
            {label} = this.state;

        if (textarea.value !== '' && textarea.value !== label) {
            this.setState(() => ({
                pushBtn: false
        }))
        } else {
            this.setState(() => ({
                pushBtn: true
            }))
        }
    }

    // Изменяем пост при клике на кнопку добавить
    onPush = () => {
        const elem = document.getElementById(this.props.id),
            textarea = elem.querySelector('textarea');

        this.setState(({editForm, pushBtn}) => ({
            label: textarea.value,
            editForm: !editForm,
            pushBtn: !pushBtn,
            time: new Date()
        }))
    }

    render() {
        const {onDelete} = this.props;
        const {important, like, label, time, editForm, pushBtn} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between',
            classEdit = 'edit-form',
            classBtn = 'btn btn-outline-secondary';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        if (editForm) {
            classEdit += ' invisible';
        }

        if (pushBtn) {
            classBtn += ' invisible';
        }

        return (
            <div className={classNames}>
                <div className="app-list-item-note">
                    <span 
                        className="app-list-item-label" 
                        onClick={this.onLike}>
                            {label}
                    </span>

                    {/* Время добавления записи */}
                    <PostDate value={time}/>

                    {/* Кнопки редактирования записи */}
                    <div className="edit-block">
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={this.onEdit}>
                                Редактировать
                        </button>
                        <button 
                            type="button" 
                            className={classBtn}
                            onClick={this.onPush}>
                                Добавить
                        </button>
                    </div>
                </div>

                {/* Форма редактирования поста */}
                <form className={classEdit}>
                    <textarea
                        defaultValue={label}
                        className="form-control new-post-label"
                        onInput={this.onInput}>
                    </textarea>
                </form>

                <div className="app-list-item-reactions d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}