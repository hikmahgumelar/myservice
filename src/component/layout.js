
import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Panel, Media} from 'react-bootstrap';


class Layout extends Component{

  render(){
    return (
        <Grid>
        <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
        <Panel> 
        <Panel.Body>
        ISI
        </Panel.Body>
        </Panel> 
        </Col>
        </Row>
        <Row className="show-grid">
        <Col xs={12} md={8} >
        <div>
        <Jumbotron>
        <Media>
        <Media.Left>
        <img width={64} height={64} src="../img/logo.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
      fringilla. Donec lacinia congue felis in faucibus.
      </p>
      </Media.Body>
      </Media>
      <Media>
      <Media.Left>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
      </Media.Left>
      <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
      fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <Media>
      <Media.Left>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
      </Media.Left>
      <Media.Body>
      <Media.Heading>Nested Media Heading</Media.Heading>
      <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
      in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
      </Media.Body>
      </Media>
      </Media.Body>
      </Media>
      <Media>
      <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
      fringilla. Donec lacinia congue felis in faucibus.
      </p>
      </Media.Body>
      <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
      </Media.Right>
      </Media>
      <Media>
      <Media.Left>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
      </Media.Left>
      <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
      fringilla. Donec lacinia congue felis in faucibus.
      </p>
      </Media.Body>
      <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
      </Media.Right>
      </Media>
      </Jumbotron>
      </div>
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

//392050-202796-656483-187120-183791-149843-081281-678070

export default Layout;
