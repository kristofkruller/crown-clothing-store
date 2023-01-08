import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
//ROUTE
import { BrowserRouter } from 'react-router-dom';
//REDUX
import { Provider as ReduxProvider }  from 'react-redux';
import { persistor, store } from './assets/redux/store';
// CACHE
import { PersistGate } from 'redux-persist/integration/react';
// STRIPE
import { Elements as StripeProvider } from '@stripe/react-stripe-js';
import { stripeReg } from './assets/stripe/stripe';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <StripeProvider stripe={stripeReg}>
            <App />
          </StripeProvider>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
