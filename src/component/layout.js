
import React, { Component } from 'react';
import {  Grid, Row, Col, Panel} from 'react-bootstrap';


class Layout extends Component{

  render(){
    return (
        <Grid>
        <Row className="show-grid">
        <Col xs={12} md={8} >
        <Panel>
        <Panel.Body>
        ISI
        </Panel.Body>
        </Panel>
        </Col>
        <Col xs={6} md={4}>
        <Panel>
        <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
        </Panel>
        </Col>
        </Row>

        </Grid>
        )
  }
}

392050-202796-656483-187120-183791-149843-081281-678070

export default Layout;
