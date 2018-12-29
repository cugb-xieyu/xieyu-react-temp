

import '@/App.less';

import React, { Component } from 'react';
import MainView from '@/views/MainView'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <MainView></MainView>
    );
  }
}

export default App;
