import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageTemplate from './containers/mainpage/template';
import { Navigation } from './containers/navigation/navigation';
import { Lessons } from './containers/lessons/lessons';
import { Notes } from './containers/notes/notes';
import { Vocabulary } from './containers/vocabulary/vocabulary';
import { PageNotFound } from './containers/pagenotfound/pagenotfound';
import './App.css';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={PageTemplate} />
              <Route path="/vocabulary" component={Vocabulary} />
              <Route path="/notes" component={Notes} />
              <Route path="/lessons" component={Lessons} />
              <Route component={PageNotFound} />
            </Switch>
        </div>
      </Router>
      );
    }
  }


export default App;