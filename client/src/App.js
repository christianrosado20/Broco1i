import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Pages
import Landing from './components/Landing';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Landing}></Route>
      </Switch>
    </React.Fragment>
    
  );
}

export default App;
