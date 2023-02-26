import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider
        store={createStoreWithMiddleware(Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    );

reportWebVitals();