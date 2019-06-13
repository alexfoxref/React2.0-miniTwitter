import React from 'react';

// import './search-panel.css';
import { Input } from 'reactstrap';

const SearchPanel = () => {
    return (
        <Input
            className="search-input"
            type="text"
            placeholder="Поик по записям"
        />
    )
}

export default SearchPanel;