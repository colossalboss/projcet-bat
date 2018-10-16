import React from 'react';
import {Table, Well, ButtonGroup, Button} from 'react-bootstrap'
import styled from 'styled-components'
import Tips from '../Tips';

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Name = styled.a`
  color: #14171a;
  font-size: 14px;
  font-weight: bold;
`
const url = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <Well>
          <StatsTable />
        </Well>

        <Tips />
      </div>
    )
  }
}

const Stats = () => {
  return (
    <ButtonGroup>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="success">W</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
      <Button bsSize="xsmall" bsStyle="danger">L</Button>
    </ButtonGroup>
  )
}

const StatsTable = () => {
  return (
    <Table>
      <thead>
        <th>Tips</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>%</th>
        <th>Streak</th>
      </thead>
      <tbody>
        <tr>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </tbody>
    </Table>
  )
}