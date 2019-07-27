import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { appConnector } from './connector';

import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { setStoreInstance } from './helpers/store';

const MyAwesomeAppComponent = appConnector(App);

const store = initStore();

setStoreInstance(store);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <MyAwesomeAppComponent/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
