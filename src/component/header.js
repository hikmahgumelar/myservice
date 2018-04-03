
import React, { Component } from 'react';
import {Navbar, Nav ,NavItem, NavDropdown , MenuItem} from 'react-bootstrap';

class Header extends Component{
  render(){
  return (
      <Navbar fluid>
      <Navbar.Header>
      <Navbar.Brand>
      <img src={require('../img/logo.png')} alt='Logo Starup'/>
      </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
      <NavItem eventKey={1} href="#">
      Tutorial
      </NavItem>
      <NavItem eventKey={2} href="#">
      Serba-serbi
      </NavItem>
      <NavItem eventKey={3} href="#">
      Lacak Service
      </NavItem>
      </Nav>
      <Nav pullRight>
      <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
      </Nav>
      </Navbar>


      )
}
}

export default Header;
