import React, { Component } from 'react';
import '../css/Home.css'
import logo from '../image/airlinelogo.png'
class Home extends Component {
  render() {
    return (
      <div class="body">
        <div class="navbar">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" />
          </span>
          <span class="item2">Travels Management</span>
          <span class="item3">Home
					</span>
          <span class="item4">Hotels
					</span>
          <span class="item4">Flights
					</span>
          <span class="item4">Destination
					</span>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12"></div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>Where</h3><br /><br />
              <label ><b>Your Destination</b></label><br />
              <input type="text" placeholder="enter your destination" /><br />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            <h3>When</h3><br /><br />
              <div class="row">
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <label ><b>Check In</b></label><br />
              <input type="Date"/><br />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <label ><b>Check Out</b></label><br />
              <input type="Date" /><br />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            <h3>Who</h3><br /><br />
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <label ><b>Rooms</b></label><br />
              <input type="text" placeholder="enter type of room"/><br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <label ><b>Adults</b></label><br />
              <input type="text" placeholder="enter number of adults" /><br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <label ><b>Kids</b></label><br />
              <input type="text" placeholder="enter number of kids" /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;