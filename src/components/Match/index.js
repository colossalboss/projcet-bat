import React from 'react';
import {PageHeader} from 'react-bootstrap';
import Tips from '../Tips';

export default class Match extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Match</h1>
        <PageHeader><small>Tips in Matches</small></PageHeader>;
        <Tips />
      </div>
    );
  }
}