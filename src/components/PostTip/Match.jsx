import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import {today, daysFromToday } from '../../lib/time';
import footballData from '../../lib/footballData';

export default class Leagues extends React.Component {
  state = {countries: []};
  async componentWillMount() {
    const countryId = this.props.match.params.countryId
    const leagueId = this.props.match.params.leagueId
    const countries = await footballData({action: 'get_events', from: today(), to: daysFromToday(7), country_id: countryId, league_id: leagueId})
    this.setState({countries: countries})
    console.log('countries', this.state.countries)
  }

  render() {
    console.log('render countries', this.state.countries)
    return (
      <ListGroup>
        {this.state.countries.map((league, index) => {
          return (
            <Link to={`/post-tip/countries/${league.country_id}/leagues/${league.league_id}/matches/${league.match_id}`} key={index}><ListGroupItem>{league.match_hometeam_name} -vs- {league.match_awayteam_name}</ListGroupItem></Link>
          );
        })}
      </ListGroup>
    );
  }
}