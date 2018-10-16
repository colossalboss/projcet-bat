import React from 'react';
import {Media, Image} from 'react-bootstrap';

const url = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';


export default class Bookmakers extends React.Component {
  render() {
    return (
      <Media>
        <Media.Left>
          <Image src={url} circle height="50px"/>
        </Media.Left>
        <Media.Body>
         <h3>Bookmaker's name</h3>
         <p>Bookmaker's review</p>
        </Media.Body>
      </Media>
    );
  }
}