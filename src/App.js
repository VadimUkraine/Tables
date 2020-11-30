import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './global/styles/index.css';
import Sponsorships from './components/Sponsorships';
import Tiles from './components/Tiles';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/" component={Sponsorships} />
          <Route exact path="/tiles" component={Tiles} />
          <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;
