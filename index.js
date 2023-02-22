import React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import galleryReducer from './gallerSlice';





const store = configureStore({
  reducer: {
   gallery: galleryReducer  //reducer likna hai, and reducer len hai gallery slice se,

   ///gallery kar ke kuch bi naam assign use kar sakte ....hai gallery na,e use selector me use hota hai,
   //
  }
})

ReactDOM.render(
  <Provider store={store}>
     <App /> 
  </Provider>,
  document.getElementById('root')


);
