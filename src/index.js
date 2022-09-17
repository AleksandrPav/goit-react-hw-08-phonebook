import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';

/*REDUX*/
import {store, persistor} from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);