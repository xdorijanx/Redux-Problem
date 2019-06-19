import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// store constant is used to create a store that contains the entire application state
const store = createStore(); 

// We wrap our App with a Provider component that enables us to connect our React app to the store/ our redux state
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
