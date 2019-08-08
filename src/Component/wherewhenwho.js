import React, { Component } from 'react';
import '../css/where.css'
import BrowserHistory from '../utilize/BrowserHistory'
// import {list_all_task} from '../Component/userfunction'

class wherewhenwho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LocationName:'',
      repos:[]
    }}
    onHandleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
    // onHandlesearch = (e) => {
    //   e.preventDefault();
    //   const reqst = {
    //     LocationName: this.state.LocationName
    //   }
    //   list_all_task(reqst).then(res => {
    //     console.log(res);
    //     if(res===this.state.LocationName)
    //     {
    //       BrowserHistory.push('./paris')
    //     }
    //     else if(res===this.state.LocationName)
    //     {
    //       BrowserHistory.push('./london')
    //     }
    //     else if(res===this.state.LocationName)
    //     {
    //       BrowserHistory.push('./singapore')
    //     }
    //     else{
    //       alert("This place information is not available")
    //     }
    //   })


    // }

    onHandlesearch = (user) => {
      debugger;
      console.log(user);
      let url = 'http://localhost:8000/location?LocationName=' + user
      fetch(url).
      then(response => response.json()).then((repos) => {
      console.log(repos);
      console.log(repos.length);
      this.setState({
      repos: repos
      });
      });
      };
    render() {
        return (
            <div>
                <div class="container" class="loccontainer">
                <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <h3>Where</h3><br />
              <label ><b>Your Destination</b></label><br />
              <input type="text" name="LocationName"  onChange={this.onHandleChange} value={this.state.LocationName}/><br />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>When</h3><br />
              <div class="row">
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check In</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check Out</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>Who</h3><br />
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Rooms</b></label><br />
                  <select>
                    <option value="volvo">Rooms</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Adults</b></label><br />
                  <select>
                    <option value="volvo">Adults</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Kids</b></label><br />
                  <select>
                    <option value="volvo">Kids</option>
                    <option value="volvo">One</option>
                    <option value="saab">Two</option>
                    <option value="opel">Three</option>
                    <option value="audi">Four</option>
                  </select>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1">
              <button  onClick={this.onHandlesearch} class="search">Search</button>
            </div>
          </div><br /><br />
                </div>
            </div>
        );
    }
}

export default wherewhenwho;