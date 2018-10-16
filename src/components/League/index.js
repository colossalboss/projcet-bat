import React from 'react';
import {PageHeader} from 'react-bootstrap';
import Tips from '../Tips';

export default class League extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Match</h1>
        <PageHeader><small>Matches in League</small></PageHeader>;
        <Tips />
      </div>
    );
  }
}