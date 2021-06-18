import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FavouriteContextProvider } from './store/favourites-context';

ReactDOM.render(
  <FavouriteContextProvider><App /></FavouriteContextProvider>
    ,
  document.getElementById('root')
);

