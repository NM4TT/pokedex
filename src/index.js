import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from '@reduxjs/toolkit';
import { logger } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const redux_dev_toolkit = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhancers = compose(redux_dev_toolkit, applyMiddleware(logger));

const store = legacy_createStore(
    pokemonsReducer,
    composedEnhancers
  );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);