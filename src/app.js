import React, {Component} from 'react';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {Sidebar} from './features/sidebar';

import { MainContent } from './routes';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {id: 1, name: 'React', parent: null},
                {id: 2, name: 'Redux', parent: null},
                {id: 3, name: 'Immutable', parent: 2},
                {id: 4, name: 'React Router', parent: 1},
                {id: 5, name: 'Cache', parent: 3}
            ],
            tasks: [
                {id: 1, name: 'React basics', category: 1, description: '', dod: '', isDone: true, startDate: new Date(), endDate: new Date()},
                {id: 2, name: 'Virtual DOM', category: 1, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
                {id: 3, name: 'Hooks', category: 1, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
                {id: 4, name: 'Redux actions', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
                {id: 5, name: 'Middleware', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
                {id: 6, name: 'react-redux', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
                {id: 7, name: 'Nav and Links', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()}
            ],
            isSidebarVisible: true
        };
    }

    toggleDone = (id, value) => {
        this.setState((state) => {
            const task = state.tasks.find(v => v.id === id);
            task.isDone = value;

            /*@todo: find out how async setState works*/
            return state;
        });
    };

    saveTask = (task) => {
        this.setState((state) => {
            return { ...state, tasks: state.tasks.map( t => {
                if (t.id === task.id) {
                    return task;
                }

                return t;
            }) };
        });
    };

    toggleSidebar = () => {
        this.setState(state => ({
            ...state,
            isSidebarVisible: !state.isSidebarVisible
        }))
    };

    addCategory = (name) => {
        this.setState(state => {
            const updatedCategories = state.categories.slice();

            updatedCategories.push({
                id: state.categories[state.categories.length - 1].id + 1,
                name,
                parent: null
            });
            return {
                ...state,
                categories: updatedCategories
            }
        });
    };

    render() {

        return (
            <div className="app">
                <div className="wrapper">
                    <Header toggleSidebar={ this.toggleSidebar }
                            isOpened={ this.state.isSidebarVisible }
                    />
                    {
                        this.state.isSidebarVisible && (
                            <div className="sidebar">
                                <Sidebar categories={ this.state.categories }
                                         addCategory={ this.addCategory }
                                />
                            </div>
                        )
                    }
                    <MainContent tasks={ this.state.tasks }
                                 toggleDone={ this.toggleDone }
                                 saveTask={ this.saveTask }
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
