import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'store/store';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/test">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
