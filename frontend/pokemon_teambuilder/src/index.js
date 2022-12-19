import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import dexReducer from './reducers/dexReducer';
import statsReducer from './reducers/statsReducer';
import teamReducer from './reducers/teamReducer';

const store = createStore(combineReducers({
  dexReducer,
  statsReducer,
  teamReducer
})) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

