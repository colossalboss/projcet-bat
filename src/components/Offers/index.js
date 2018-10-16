import React from 'react';
import styled from 'styled-components';
import {Panel, Image, Button} from 'react-bootstrap'

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`

const OFFERS = [
    {
    bookmaker: {
      name: 'Nairabet',
      logo_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
    },
    title: 'Get Free $500 when you signup',
    amount: '$500',
    details: 'plenty rubbish',
  },
    {
    bookmaker: {
      name: 'Nairabet',
      logo_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
    },
    title: 'Get Free $500 when you signup',
    amount: '$500',
    details: 'plenty rubbish',
  },
    {
    bookmaker: {
      name: 'Nairabet',
      logo_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
    },
    title: 'Get Free $500 when you signup',
    amount: '$500',
    details: 'plenty rubbish',
  },
    {
    bookmaker: {
      name: 'Nairabet',
      logo_url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
    },
    title: 'Get Free $500 when you signup',
    amount: '$500',
    details: 'plenty rubbish',
  },
]

const url = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

export default class Offers extends React.Component {
  render() {
    return (
      <div>
        {OFFERS.map((offer, index) => (
          <Panel key={index}>
            <Panel.Body>
              <Top>
                <Image src={offer.bookmaker.logo_url} circle height="50px"/>
                <h3>{offer.title}</h3>
                <Button>{offer.amount}</Button>
              </Top>
              <p>{offer.details}</p>
              <Bottom>
                <Button bsStyle="success">CLAIM NOW</Button>
              </Bottom>
            </Panel.Body>
          </Panel>
        ))}
      </div>
    )
  }
}