import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Grid, Col} from 'react-bootstrap';
import Dashboard from './components/Dashboard'
import MainMenu from './components/Common/MainMenu';
import Ranking from './components/Dashboard/Ranking';
import Trending from './components/Dashboard/Trending';
import Login from './components/Common/Login'
import Profile from './components/Dashboard/Profile';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainMenu />
        <Grid>
          <Col md={3}>
            <Profile />
            <Trending />
          </Col>
          <Col md={6} sm={12}>
            {this.props.children}
          </Col>
          <Col md={3}>
            <Ranking />
          </Col>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
