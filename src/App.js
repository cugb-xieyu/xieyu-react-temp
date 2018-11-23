

import '@/App.less';

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import LayoutOne from '@/layouts/LayoutOne'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/project-list"></Redirect>
        <Route path="/(order-list|project-list)/" component={LayoutOne}></Route>
      </Switch>
    );
  }
}

export default App;
