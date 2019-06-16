import React, {Component} from 'react';

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

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onValueChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <Form 
                onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    className="new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit"
                    outline 
                    color="secondary">
                Добавить</Button>
            </Form>
        )
    }
}
