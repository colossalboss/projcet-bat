import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import footbalData from '../../lib/footballData';

export default class Countries extends React.Component {
  state = {countries: []};
  async componentWillMount() {
    const countries = await footbalData({action: 'get_countries'})
    this.setState({countries: countries})
  }

  render() {
    return (
      <ListGroup>
        {this.state.countries.map((country, index) => {
          return (
            <Link to={`/post-tip/countries/${country.country_id}`} key={index}><ListGroupItem>{country.country_name}</ListGroupItem></Link>
          );
        })}
      </ListGroup>
    );
  }
}