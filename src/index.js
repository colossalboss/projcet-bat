import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import PostTip from './components/PostTip';
import Dashboard from './components/Dashboard';
import Match from './components/Match';
import League from './components/League';
import Bet from './components/Bet';
import Profile from './components/Profile';
import Offers from './components/Offers';
import Bookmakers from './components/Bookmakers';
import Competition from './components/Competitions';


import {Provider} from 'mobx-react';
import AppStore from './services/AppStore';
import TipStore from './services/TipStore';

const tipStore = TipStore.create()

const appStore = AppStore.create({tipStore: tipStore})

const stores = {
  tipStore,
  appStore
}

ReactDOM.render(<Router>
    <Provider {...stores}>
      <App>
        <Route exact path='/' component={Dashboard} />

        <Route path='/post-tip' component={PostTip} />

        <Route path='/matches/:matchName' component={Match} />
        <Route path='/leagues/:leagueName' component={League} />
        <Route path='/bets/:betName' component={Bet} />
        <Route path='/users/:userName' component={Profile} />
        <Route path='/offers' component={Offers} />
        <Route path='/bookmakers' component={Bookmakers} />
        <Route path='/competitions' component={Competition} />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
