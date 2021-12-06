import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { mainReducer } from './Utils/mainReducer';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import contactsWatcher from './Contacts/Saga/contactsSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(contactsWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

