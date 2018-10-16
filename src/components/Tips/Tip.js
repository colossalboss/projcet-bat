import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ListGroupItem, Image, ButtonGroup, Button, Glyphicon, Media } from 'react-bootstrap'
import TipActions from './TipActions';
import HashTags from './HashTags';
import Stats from './Stats';

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Name = styled.p`
  color: #14171a;
  font-size: 14px;
  font-weight: bold;
`
const TipText = styled.p`
  font-size: 14px;
  line-height: 20px;
`
const url = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

export default ({thought}) => {
  return (
    <ListGroupItem>
      <Media>
        <Media.Left>
          <Image src={url} circle height="50px"/>
        </Media.Left>

        <Media.Body>
          <UserDetails>
            <Link to='/users/name'><Name>Name</Name></Link>
            <Stats />
          </UserDetails>
          <p>
            {thought}
            <HashTags />
          </p>
          <TipActions />
        </Media.Body>
      </Media>
    </ListGroupItem>
  )
}