import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import Reducer from './store/reducers/reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(Reducer, composeEnhances(applyMiddleware(thunk)))

const app=(
  <Provider store={store}>
      <App />
  </Provider>
)

ReactDOM.render(
app,
  document.getElementById('root')
);
