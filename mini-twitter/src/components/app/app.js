import React, {Component} from 'react';
// import idGenerator from 'react-id-generator';
import idGenerator from '../id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import DelModal from '../modal/';

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
            {label: 'Going to learn React', important: false, like: false, id: idGenerator()},
            {label: 'That is good', important: false, like: true, id: idGenerator()},
            {label: 'I need a break...', important: true, like: false, id: idGenerator()},
            {},
            {id: idGenerator()},
            {label: '  '},
            []      
        ],
        modal: false,
        targetId: '',
        term: '',
        filter: 'all'
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

    onToggleParam = (param, id) => {
        this.setState(({data}) => {
            const newParam = {};
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            newParam[param] = !old[param];
            const newItem = {...old, ...newParam};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })    
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        } else {
            return items.filter(item => {
                return item.label.indexOf(term) > -1
            })
        }
    }

    onUpdateSearch = (term) => {
        this.setState({
            term
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {modal, targetId, data, term, filter} = this.state;
        const newData = data
            .filter(item => {
                return (Object.prototype.toString.call(item) === '[object Object]' && item.label && item.label.trim() !== '')
            });

        const liked = data.filter(item => item.like).length;
        const allPosts = newData.length;

        const visiblePosts = this.filterPost(this.searchPost(newData, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <SearchBlock>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </SearchBlock>
                <PostList 
                    posts={visiblePosts}
                    onModal={this.toggleModal}
                    onChange={this.changeItem}
                    onToggleParam={this.onToggleParam}/>
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
