import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;