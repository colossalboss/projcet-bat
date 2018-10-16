import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const BETS = [
  'Home Win',
  'Draw',
  'Away Win'
]

export default class Leagues extends React.Component {
  render() {
    const countryId = this.props.match.params.countryId
    const leagueId = this.props.match.params.leagueId
    const matchId = this.props.match.params.matchId
    return (
      <ListGroup>
        {BETS.map((bet, index) => {
          return (
            <Link to={`/post-tip/countries/${countryId}/leagues/${leagueId}/matches/${matchId}/thought`} key={index}><ListGroupItem>{bet}</ListGroupItem></Link>
          );
        })}
      </ListGroup>
    );
  }
}