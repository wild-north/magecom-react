import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { appConnector } from './connector';

import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';


const MyAwesomeAppComponent = appConnector(App);



const store = initStore();

setTimeout(() => {
    store.dispatch({ type: 'SOME_ACTION', payload: 123123 });
}, 2000);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <MyAwesomeAppComponent/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
