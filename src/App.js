import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My React Demo</h2>
        </div>
        <p className="App-intro">
          开始编辑 <code>src/App.js</code> ，保存后即可刷新页面.
        </p>
      </div>
    );
  }
}

export default App;
