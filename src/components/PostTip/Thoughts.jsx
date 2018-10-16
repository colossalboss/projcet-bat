import React from 'react';
// import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, PageHeader, Button} from 'react-bootstrap';
import TextInput from '../Common/TextInput';
import Tip from '../Tips/Tip'



export default class Thoughts extends React.Component {
  state = {thought: ''}
  handleInput = (e) => {
    e.preventDefault();
    this.setState({thought: e.target.value})
  }
  render() {
    console.log(this.state.thought)
    return (
      <div>
        <PageHeader>Example page header</PageHeader>
        <Tip thought={this.state.thought}/>

        <TextInput
          label='Thoughts'
          placeholder='Enter Thought'
          onChange={this.handleInput}
          value={this.state.thought}
          type='text'
        />
        <Button bsSize="large">Post Tip</Button>
      </div>
    );
  }
}