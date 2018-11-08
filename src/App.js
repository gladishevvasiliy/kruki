import React, { Component } from 'react';
import './App.css';
import { KRUKI } from './res/index'
import Category from './Category'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Крюки</h1>
      {
        KRUKI.map((kruk) => <Category symbols={kruk} />)
      }
      </div>
    );
  }
}

export default App;
