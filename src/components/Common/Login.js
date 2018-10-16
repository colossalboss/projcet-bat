import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import TextInput from './TextInput';


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
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
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}