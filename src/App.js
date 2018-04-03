import React, { Component } from 'react';
import './App.css';
import Header from './component/header.js';
import Layout from './component/layout.js';
class App extends Component {
  render() {
    return (
        <div>
      <Header />

      <Layout />
      </div>
      )
        }

}

export default App;
