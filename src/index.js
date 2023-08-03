import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import UsersProvider from './Context/UsersContext';
// import App from './testContext/App'

import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="react-6-1">
    <Provider store={store}>
      <UsersProvider>
        <App />
      </UsersProvider>
    </Provider>
  </BrowserRouter>
);
