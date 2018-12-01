import React, { Component } from 'react';
import logo from './logo.svg';
import sideBar from './components/sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar ></Sidebar>
      </div>
    );
  }
}

export default App;
