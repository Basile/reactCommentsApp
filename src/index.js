import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers';
import CommentsApi from './util/CommentsApi';
import config from './config/config';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const commentsApi = new CommentsApi(config.baseUrl, config.childEndpoint);
const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument(commentsApi)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
