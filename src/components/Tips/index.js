import React, {Component} from 'react';
import {ListGroup } from 'react-bootstrap'
import {values} from 'mobx';
import {inject} from 'mobx-react';
import Tip from './Tip'
class Tips extends Component {
  state = {tips: {}}
  async componentWillMount() {
    const tips = await this.props.tipStore.fetchTips();
    this.setState({tips: tips})
  }
  render() {
    console.log('state', this.props.tipStore.todos)
    return <ListGroup>
      {/* {tips.map((tip, index) => (
        <Tip key={index} thought={tip.message}/>
      ))} */}
  </ListGroup>;
  }
}

export default inject('tipStore')(Tips)