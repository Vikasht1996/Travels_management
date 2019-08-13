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
import singleroom from '../image/singleroom.jpg'
import doubleroom from '../image/doubleroom.webp'
import Wherewhenwho from '../Component/wherewhenwho'
import Slider from '../Component/slider'
import '../css/Discription.css'
import Icons from '../Component/icons';
import Star from '../Component/star';
import Things from '../Component/thingstodo'
import Write from '../Component/writeareview'
import Review from '../Component/review'

class Discription extends Component {
  render() {
    const headers = ['Description', 'Availability', 'Amenities', 'Reviews', 'Things To Do', 'Write a Review']
    return (
      <div class="body">
        <div class="navbar ">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" /></span>
          <span class="item2">Travels Management</span>
          <span class="item3"><a href="home">Home</a></span>
          <span class="item4"><a href="hotels">Hotels</a></span>
          <span class="item4"><a href="#">Flights</a></span>
          <span class="item4"><a href="#">Destination</a></span>
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
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12" class="tabs">
              <Tabs headers={headers} >
                <Tab ><br /><br />
                  {/* <div class="singleroom">
                    <div class="row" >
                      <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <h6>Hotel Type:3star</h6>
                        <h6>Extra People:2/3</h6>
                        <h6>Minimum Stay:6</h6>
                        <h6>Security Deposit:voter id proof</h6>
                        <h6>Country:German</h6>
                        <h6>City:Frankfurt</h6>
                        <h6>Cancellation Option:yes</h6>

                      </div>
                      <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8"> */}
                        {/* <div class="row">
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
                            <h5>Business traveler</h5>
                          </div>
                          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <div class="container">
                              <input type="radio" class="radio" />
                              <input type="radio" class="radio" />
                              <input type="radio" class="radio" />
                            </div>
                          </div>
                        </div> */}
                        <Slider/>
                      {/* </div>
                    </div>
                  </div> */}
                  {/* <div class="container">
                  <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                  <Slider/>
                  </div>
                  </div>
                  </div> */}

                  <br /><br />
                  <h5>About</h5>
                  <div class="singleroom">
                    <div class="row">
                      <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                        <h6>Leonardo Royal Hotel Frankfurt</h6>
                        <p>Germany</p>
                        <p>Warm, contemporary rooms with colorful decor have balconies
                                 and city views, plus free Wi-Fi, flat-screen TVs, and tea
                                 and coffeemaking facilities. Room service is available.
                </p>
                        <p>Breakfast is available for a surcharge. There's also an international
                          restaurant, a cocktail lounge and a sports bar, as well as a fitness
                           center and a business center. Pets are welcome (fee). Parking is
                    available.</p>
                      </div>

                    </div>
                  </div>

                </Tab>
                <Tab><br /><br />
                  <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                      <Wherewhenwho />
                    </div>
                  </div>
                  <h4>Available Rooms</h4>
                  <div class="singleroom">
                    <div class="row">
                      <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <h5>Single Cot Room</h5>
                        <img src={singleroom} alt="golf" class="business" />

                      </div>
                      <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <h6>Leonardo Royal Hotel Frankfurt</h6>
                        <p>Germany</p>
                        <p>Warm, contemporary rooms with colorful decor have balconies
                                 and city views, plus free Wi-Fi, flat-screen TVs, and tea
                                 and coffeemaking facilities. Room service is available.
                </p>
                      </div>
                      <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                        <p>Ava/Night</p>
                        <p><b>$3,555</b></p>
                        <button class="btn1"><a href='/signup'>Book Now</a></button>
                      </div>
                    </div></div> <br /><br />
                  <div class="singleroom">
                    <div class="row">
                      <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <h5>Double Cot Room</h5>
                        <img src={doubleroom} alt="golf" class="business" />

                      </div>
                      <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <h6>Leonardo Royal Hotel Frankfurt</h6>
                        <p>Germany</p>
                        <p>Warm, contemporary rooms with colorful decor have balconies
                                 and city views, plus free Wi-Fi, flat-screen TVs, and tea
                                 and coffeemaking facilities. Room service is available.
                </p>
                      </div>
                      <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                        <p>Ava/Night</p>
                        <p><b>$5,129</b></p>
                        <button class="btn1"><a href='/signup'>Book Now</a></button>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab><br /><br />
                  <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                      <Icons />
                    </div>
                  </div>
                </Tab>
                <Tab><br /><br />
                   <Review/>  
                </Tab>
                <Tab><br /><br />
                  <Things/>
                </Tab>
                <Tab><br /><br />
                <Write/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <footer>
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={logo} alt="golf" className="logo" />
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <span><a href="https://www.travel.com">www.travelmanagement.com</a></span>
          <span><a href="https://www.facebook.com" class="fa fa-facebook"></a></span>
          <span><a href="https://www.gmail.com" class="fa fa-google"></a></span>
          <span><a href="https://www.instagram.com" class="fa fa-instagram"></a></span>
          <span><a href="https://www.youtube.com" class="fa fa-youtube"></a></span>
          <span><a href="https://www.linkedin.com" class="fa fa-linkedin"></a></span>
          <span><a href="https://www.skype.com" class="fa fa-skype"></a></span>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <h6 class="fh6">copyright@2019</h6>
            </div>
          </div>
        </footer>

      </div>

    );
  }
}
export default Discription;