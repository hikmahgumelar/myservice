import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
        <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
        </Navbar.Header>
        </Navbar>
        );
  }
}

export default App;
