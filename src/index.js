import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'G-20PXJ85YZ5',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
 