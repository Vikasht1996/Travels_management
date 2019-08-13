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
import Signup from './Component/Registrationfrom'
import Login from './Component/Loginform'
import Booknow from './Component/bookNow'
import Modal from './Component/model'
import Paris from './Component/paris'
import London from './Component/london'
import Singapore from './Component/singapore'
import Dummy from './Component/dummy'
import writereview from './Component/writeareview'

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
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/booknow' component={Booknow}></Route>
        <Route exact path='/paris' component={Paris}></Route>
        <Route exact path='/london' component={London}></Route>
        <Route exact path='/singapore' component={Singapore}></Route>
        <Route exact path='/dummy' component={Dummy}></Route>
        <Route exact path='/writereview' component={writereview}></Route>

      </Switch>
    </Router>
  );
}

export default App;