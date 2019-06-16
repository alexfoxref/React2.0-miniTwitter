import React, {Component} from 'react';

import { Input } from 'reactstrap';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({
            term
        });
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <Input
                className="search-input"
                type="text"
                placeholder="Поик по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}