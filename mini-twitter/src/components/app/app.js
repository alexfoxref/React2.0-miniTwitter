import React, {Component} from 'react';
// import idGenerator from 'react-id-generator';
import idGenerator from '../id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import DelModal from '../modal/';

// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;
const SearchBlock = styled.div`
    display: flex;
    margin: 1rem 0;
`;

export default class App extends Component {
    state = {
        data : [
            3,
            {label: 'Going to learn React', important: false, id: idGenerator()},
            {label: 'That is good', important: false, id: idGenerator()},
            {label: 'I need a break...', important: true, id: idGenerator()},
            {},
            {id: idGenerator()},
            {label: '  '},
            []      
        ],
        modal: false,
        targetId: ''
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    changeItem = (text, id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                changedItem = {
                    label: text,
                    important: false,
                    id
                },
                newArr = [...data.slice(0, index), changedItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    toggleModal = (id) => {
        const {modal} = this.state;
        this.setState(() => ({
            modal: !modal,
            targetId: id
        }))
    }

    render() {
        const {modal, targetId} = this.state;

        return (
            <AppBlock>
                <AppHeader/>
                <SearchBlock>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchBlock>
                <PostList 
                    posts={this.state.data}
                    onModal={this.toggleModal}
                    onChange={this.changeItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
                <DelModal
                    modal={modal}
                    toggle={this.toggleModal}
                    onDel={() => this.deleteItem(targetId)}
                    className=""/>
            </AppBlock>
        )
    } 
}
