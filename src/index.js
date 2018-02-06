import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import setupStore from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './components/App';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
