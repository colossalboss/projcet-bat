import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import TwitterLogin from 'react-twitter-auth';


const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialButton = styled(Button)`
  margin-top: 10px;
`

export default class SocialLogins extends React.Component {
  constructor() {
    super()

    this.twitterSuccess = this.twitterSuccess.bind(this)
    this.twitterFailure = this.twitterFailure.bind(this)
  }

  twitterSuccess(e) {
    console.log('success', e)
  }

  twitterFailure(e) {
    console.log('failure', e)
  }

  render() {
    return (
      <SocialButtons>
        <TwitterLogin
          loginUrl="http://localhost:4000/api/v1/auth/twitter"
          onFailure={this.twitterFailure}
          onSuccess={this.twitterSuccess}
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter-token"
        />
        <SocialButton bsSize="large" bsStyle="primary">Login With Facebook</SocialButton>
        <SocialButton bsSize="large" bsStyle="info">Login With Twitter</SocialButton>
      </SocialButtons>
    );
  }
}