import React from 'react';
import styled from 'styled-components';
import {Panel, Image} from 'react-bootstrap';
import Stats from '../Tips/Stats';

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
    return (<Panel>
      <Panel.Body>
        <UserDetails>
          <Image src={url} circle height="50px"/>
          <Name href='/'>Name</Name>
        </UserDetails>

        <Stats />
      </Panel.Body>
    </Panel>
    );
  }
}