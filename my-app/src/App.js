import React, { Component } from 'react';
import logo from './logo.svg';
import SideBar from './components/sidebar.js';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TopMusic from './components/TopMusic';
import TopNews from './components/TopNews';
import TopFood from './components/TopFood';
import SavedStuff from './components/SavedStuff';
import login from './components/login';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div className="pageContainer">
            <SideBar></SideBar>
            <Switch>
              <Route exact path="/" component={login} />
              <Route path="/About" component={About} />
              <Route path="/TopMusic" component={TopMusic} />
              <Route path="/TopNews" component={TopNews} />
              <Route path="/TopFood" component={TopFood} />
              <Route path="/SavedStuff" component={SavedStuff} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
