import React from 'react';

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