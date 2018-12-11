import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'styles/reset.css'

//import { Provider } from 'react-redux'
//import store from './store'

ReactDOM.render(
      <BrowserRouter>
            <App />
      </BrowserRouter>,
document.getElementById('root'))