import React from 'react';
import ReactDOM from 'react-dom';
//-React-Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//-components :
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
