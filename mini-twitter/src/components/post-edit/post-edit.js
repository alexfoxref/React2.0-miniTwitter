import React, {Component} from 'react';

import styled from 'styled-components';

const PostEditBlock = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-bottom: calc(20px + 10px);
    width: calc(800px - 4*35px - 117px);
    
    .edit-form {
        height: 100%;
        min-width: calc(800px - 35px - 3px - 117px - 70px);
        padding-right: 35px;
    }

    .edit-form textarea {
        height: 100%;
        font-size: 1.25rem;
        resize: none;
        overflow-wrap: break-word;
    }
    
    .edit-btn-block {
        min-width: 70px;
        height: 100%;
        display: flex;
        align-items: center;

        button {
            width: 35px;
            height: 35px;
            margin: 3px;
            font-size: 17px;
            border: none;
            cursor: pointer;

            :focus {
                outline: none;
            }
        }

        .btn-eraser {
            color: red;
        }
    }

    .invisible {
        display: none;
    }

    .grey {
        color: grey;
    }

    .green {
        color: green;
    }
`;

export default class PostEdit extends Component {

    state = {
        grey: false,
        disabled: false,
        text: this.props.label
    }

    clearInput = (event) => {
        // Индекс кнопки
        let ind;
        const elems = document.querySelectorAll('.btn-eraser');
        elems.forEach((item, index) => {
            const incl = item.querySelectorAll('*');
            incl.forEach(i => {
                if (event.target === i || event.target === item) {
                    ind = index
                }
            })
        })
        // Удаление теста в окне редактирования
        document.querySelectorAll('textarea')[ind].value = '';
        this.setState(() => ({
            grey: true,
            disabled: true
        }))
    }

    onInput = (event) => {
        let value = event.target.value;
        // Меняем цвет кнопки и ее активность при очищенном окне ввода
        if (value.trim() === '') {
            this.setState(() => ({
                grey: true,
                disabled: true
            }))
        } else {
            this.setState(() => ({
                grey: false,
                disabled: false,
                text: value
            }))
        }
    }

    render() {
        const {addPost, invisible} = this.props;
        const {grey, disabled, text} = this.state;
        let emptyClass = '',
            activeClass = 'btn-sm';

        if (invisible) {
            emptyClass += ' invisible'
        }

        if (grey) {
            activeClass += ' grey'
        } else {
            activeClass += ' green'
        }

        return (
            <PostEditBlock className={emptyClass}>
                {/* Форма редактирования поста */}
                <form className="edit-form">
                    <textarea
                        defaultValue={text}
                        className="form-control new-post-label"
                        onInput={this.onInput}>
                    </textarea>
                </form>

                {/* Кнопки управления редактированием */}
                <div className="edit-btn-block">
                    {/* Кнопка добавления записи */}
                    <button
                        type="button"
                        className={activeClass}
                        disabled={disabled}
                        onClick={() => addPost(text)}>
                            <i className="fa fa-check-circle"></i>
                    </button>
                    {/* Кнопка очистки поля редактирования записи */}
                    <button
                        type="button"
                        className="btn-eraser btn-sm"
                        onClick={this.clearInput}>
                            <i className="fa fa-eraser"></i>
                    </button>
                </div>
            </PostEditBlock>
        )
    }
}