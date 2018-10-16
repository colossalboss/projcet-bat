import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import SocialButtons from './SocialButtons';
import TextInput from './TextInput';


export default class Register extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registered</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <TextInput
                label='Username'
                placeholder='Enter Username'
                onChange={() => undefined}
                value={'Username'}
                type='text'
              />

              <TextInput
                label='Email'
                placeholder='Enter Email'
                onChange={() => undefined}
                value={'Value'}
                type='email'
              />

              <TextInput
                label='Password'
                placeholder='Enter Password'
                onChange={() => undefined}
                value={'Password'}
                type='password'
              />
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}