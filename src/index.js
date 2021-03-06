
import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
//import Loadable from 'react-loadable';
import App from './App'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
      {/* <Switch>
        <Route path="/" component={ App }></Route>
      </Switch> */}
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


