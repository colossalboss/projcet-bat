import React from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

const url = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

export default class MainMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showLogin: false,
      showSignup: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    console.log('main menu state', this.state.show)
    return (
      <div>
        <Login show={this.state.showLogin} handleClose={() => this.setState({showLogin: !this.state.showLogin})}/>
        <Register show={this.state.showSignup} handleClose={() => this.setState({showSignup: !this.state.showSignup})}/>
        <nav className="navbar navbar-default">
          <div className="custom-container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand" href="#">
                <img alt="Brand" src="..." />
              </Link>
            </div>
              <ul className="nav navbar-nav">
                <li role="presentation" ><Link to="/">Home</Link></li>
                <li role="presentation" ><Link to="offers">Offers</Link></li>
                <li role="presentation" ><Link to="bookmakers">Bookmakers</Link></li>
                <li role="presentation" ><Link to="competitions">Competition</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="navbar-profile-image"><Link to="profile"><Image src={url} circle height="50px"/></Link></li>
                <button type="button" className="btn btn-default navbar-btn" onClick={() => this.setState({showSignup: !this.state.showSignup})}>Register</button>
                <button type="button" className="btn btn-default navbar-btn" onClick={() => this.setState({showLogin: !this.state.showLogin})}>Log In</button>
                <Link to="post-tip/country"><button type="button" className="btn btn-default navbar-btn">Post Tip</button></Link>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}