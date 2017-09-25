import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';
import AllItems from '../containers/allItems.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllItems />
      </div>
    );
  }
}

export default App;
