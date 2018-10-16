import React from 'react';
import {PageHeader} from 'react-bootstrap';
import Tips from '../Tips';

export default class Bet extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Match</h1>
        <PageHeader><small>Tips in Bet</small></PageHeader>
        <Tips />
      </div>
    );
  }
}