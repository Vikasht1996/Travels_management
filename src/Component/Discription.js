import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import { Tabs, Tab } from 'react-tab-view'

import logo from '../image/airlinelogo.png'
import horbour1 from '../image/harbour1.webp'
import horbour2 from '../image/horbour2.webp'
import horbour3 from '../image/horbour3.webp'
import horbour4 from '../image/horbour4.webp'
import horbour5 from '../image/horbour5.webp'
import horbour6 from '../image/horbour6.webp'
import horbour7 from '../image/horbour7.webp'
import horbour8 from '../image/horbour8.webp'
import business from '../image/business.jpg'
class Discription extends Component {
  render() {
    const headers = ['Description', 'Availability', 'Amenities', 'Reviews', 'Things To Do','Write a Review']
    return (
      <div class="body">
        <div class="navbar ">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" /></span>
          <span class="item2">Travels Management</span>
          <span class="item3">Home</span>
          <span class="item4"><a href="hotels">Hotels</a></span>
          <span class="item4">Flights</span>
          <span class="item4">Destination</span>
        </div><br /><br />
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
              <Carousel autoPlay>
                <div>
                  <img src={horbour1} />
                </div>
                <div>
                  <img src={horbour2} />
                </div>
                <div>
                  <img src={horbour3} />
                </div>
                <div>
                  <img src={horbour4} />
                </div>
                <div>
                  <img src={horbour5} />
                </div>
                <div>
                  <img src={horbour6} />
                </div>
                <div>
                  <img src={horbour7} />
                </div>
                <div>
                  <img src={horbour8} />
                </div>
              </Carousel>

            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          </div>
          <div class="row">
            <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
            <Tabs headers={headers}>
              <Tab>
                <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                {/* Hotel Type
Extra People
Minimum Stay
Security Deposit
Country
City
Cancellation Option. */}
                <h6>Hotel Type:3star</h6>
                <h6>Extra People:2/3</h6>
                <h6>Minimum Stay:6</h6>
                <h6>Security Deposit:voter id proof</h6>
                <h6>Country:German</h6>
                <h6>City:Frankfurt</h6>
                <h6>Cancellation Option:yes</h6>

                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <div class="row">
                  <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                  <p>I am business man and every time i am going to business trip.
                     I shared my experiene.When i went to germany the hotels and restorents are
                     good. German people very friendly.
                  </p>

                  </div>
                  </div>
                  <div class="row">
                  <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={business} alt="golf" class="business" />
                  </div>
                  <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <h2>Business traveler</h2>
                  </div>
                  <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="container">
                  <input type="radio"/>
                  <input type="radio"/>
                  <input type="radio"/>
                </div>
                  </div>
                  </div>
                </div>
                </div>
              </Tab>
              <Tab>
              </Tab>
              <Tab>
                <p>This is the third tab</p>
              </Tab>
              <Tab>
                <p>This is the third tab</p>
              </Tab>
              <Tab>
                <p>This is the third tab</p>
              </Tab>
              <Tab>
                <p>This is the third tab</p>
              </Tab>
            </Tabs>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        <footer>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <img src={logo} alt="golf" className="logo" />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <p>www.travels.com</p>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h6>@2019</h6>
            </div>
          </div>
        </footer>

      </div>

    );
  }
}
export default Discription;