import React from 'react';
import ReactDOM from 'react-dom/client';
import 'stylesheets/index.css';
import App from "App"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'reduxs/store';
import { ThemeProvider } from 'utils/ThemeContext';
import Background from 'utils/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Background>
          <App />
        </Background>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
