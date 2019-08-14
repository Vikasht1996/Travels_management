import React from "react";
import Slider from "react-slick";
import business from '../image/business.jpg'

class SimpleSlider extends React.Component {
  render() {
    var slideset = {
      // dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div class="container">
        <Slider {...slideset}>
          <div>
            <div class="singleroom">
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
                      <h5>Business traveler</h5>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="singleroom">
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
                      <h5>Business traveler</h5>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="singleroom">
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
                      <h5>Business traveler</h5>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;