import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home'
import Hotels from './Component/hotel'
import Discription from './Component/Discription'
import Icons from './Component/icons'
import Star from './Component/star'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/hotels' component={Hotels}></Route>
        <Route exact path='/discription' component={Discription}></Route>
        <Route exact path='/icons' component={Icons}></Route>
        <Route exact path='/star' component={Star}></Route>
      </Switch>
    </Router>
  );
}

export default App;