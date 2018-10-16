import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Country from './Country';
import League from './League';
import Match from './Match';
import Bet from './Bet';
import Thoughts from './Thoughts';


export default class PostTip extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={`/post-tip/countries/:countryId/leagues/:leagueId/matches/:matchId/thought`} component={Thoughts} />
          <Route path={`/post-tip/countries/:countryId/leagues/:leagueId/matches/:matchId`} component={Bet} />
          <Route path='/post-tip/countries/:countryId/leagues/:leagueId' component={Match} />
          <Route path='/post-tip/countries/:countryId' component={League} />
          <Route exact path='/post-tip/country' component={Country} />
        </Switch>
      </div>
    )
  }
}