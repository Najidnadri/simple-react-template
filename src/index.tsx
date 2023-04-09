import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import GlobalStore from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStore>
      {<RouterProvider router={router} />}
    </GlobalStore>
  </React.StrictMode>
);

