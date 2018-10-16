import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'

export default () => {
  return (
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <ListGroup>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
          <ListGroupItem><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
        </ListGroup>
      </Panel.Body>
    </Panel>
  )
}