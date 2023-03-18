import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/styles.css";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/RoutesApp';
import store from './store/store';
import { ThemeApp } from './theme/ThemeApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/AldrosHouseApp">
      <Provider store={ store }>
        <ThemeApp>
          <RoutesApp />
        </ThemeApp>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);