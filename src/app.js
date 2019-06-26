import React, {Component} from 'react';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {Sidebar} from './features/sidebar';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {id: 1, name: 'React', parent: null},
                {id: 2, name: 'Redux', parent: null},
                {id: 3, name: 'Immutable', parent: 2},
                {id: 4, name: 'React Router', parent: 1}
            ],
            isSidebarVisible: true
        };
    }

    toggleSidebar = () => {
        this.setState(state => ({
            ...state,
            isSidebarVisible: !state.isSidebarVisible
        }))
    };

    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Header toggleSidebar={ this.toggleSidebar }/>
                    {
                        this.state.isSidebarVisible && (
                            <div className="sidebar">
                                <Sidebar categories={ this.state.categories }/>
                            </div>
                        )
                    }
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur, consequuntur
                        distinctio esse excepturi hic illo inventore odio quaerat, rerum sapiente sint, ut veniam!
                        Dolore illum iusto nihil quasi repellat!
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
