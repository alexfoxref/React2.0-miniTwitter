import React from 'react';

// import './post-add-form.css';
import styled from 'styled-components';
import { Button, Input } from 'reactstrap';

const Form = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <Form>
            <Input
                type="text"
                placeholder="О чем Вы думаете сейчас?"
                className="new-post-label"
            />
            <Button
                type="submit"
                outline 
                color="secondary"
                onClick={() => onAdd('Hello!')}>
            Добавить</Button>
        </Form>
    )
}

export default PostAddForm;