import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import footbalData from '../../lib/footballData';

export default class Leagues extends React.Component {
  state = {countries: []};
  async componentWillMount() {
    const countryId = this.props.match.params.countryId
    const countries = await footbalData({action: 'get_leagues', country_id: countryId})
    this.setState({countries: countries})
    console.log('countries', this.state.countries)

  }

  render() {
    console.log('render countries', this.state.countries)
    return (
      <ListGroup>
        {this.state.countries.map((league, index) => {
          return (
            <Link to={`/post-tip/countries/${league.country_id}/leagues/${league.league_id}`} key={index}><ListGroupItem>{league.league_name}</ListGroupItem></Link>
          );
        })}
      </ListGroup>
    );
  }
}