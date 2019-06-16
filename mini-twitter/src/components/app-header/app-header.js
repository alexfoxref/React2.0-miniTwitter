import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    };
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    // Редактируем окончание слова
    let end = '';

    if (/1$/.test(allPosts)) {
        end = 'ь'
    } else if (/[2-4]$/.test(allPosts)) {
        end = 'и'
    } else {
        end = 'ей'
    }

    return (
        <Header>
            <h1>Alex Demidenko</h1>
            <h2>{allPosts} запис{end}, из них понравилось {liked}</h2>
        </Header>
    )
};

export default AppHeader;