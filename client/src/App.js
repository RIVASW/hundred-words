import React, { Component } from 'react';
import Router from './components/Router'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className='ui four column centered padded grid'>
      <h2 className='ui header'> 100 words per day </h2>
      <Router/>
    </div>);
  }
}

export default App;
