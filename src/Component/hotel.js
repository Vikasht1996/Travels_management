import React, { Component } from 'react';
import '../css/hotel.css'
import Fadeoperation from './fadeoperation'
import hotel7 from '../image/hotel7.webp'
import canada from '../image/canada-hotel.webp'
import nigeria from '../image/nigeria.webp'
import malaysia from '../image/malaysia.webp'
import germany from '../image/germany.webp'
import business from '../image/business.jpg'
import logo from '../image/airlinelogo.png'

class hotel extends Component {
    render() {
        return (
            <div class="body" class="hoteldetails">
          <div class="navbar ">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" /></span>
          <span class="item2">Travels Management</span>
          <span class="item3"><a href="home">Home</a></span>
          <span class="item4"><a href="hotels">Hotels</a></span>
          <span class="item4"><a href="#">Flights</a></span>
          <span class="item4"><a href="#">Destination</a></span>
        </div><br/><br/>

                <div class="container">
                    <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                     <Fadeoperation/>            
                    </div>                    
                    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div class="container" class="recommended">
                    <center><h3>Recommended Hotels</h3></center><br/>
                    <div class="row">
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={canada} alt="golf" className="hotel4" /><br />
                      <h6>The Harbourview</h6>
                      <p>Canada</p>
                      <p><b>$5,537</b></p>
                      <p>A/N</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={nigeria} alt="golf" className="hotel4" /><br />
                      <h6>Hotel ibis Lagos Airport</h6>
                      <p>Nigeria</p>
                      <p><b>$6,400</b></p>
                      <p>A/N</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={malaysia} alt="golf" className="hotel4" /><br />
                      <h6>Seri Pacific Hotel Kuala Lumpur</h6>
                      <p>Kuala Lumpur</p>
                      <p><b>$2,314</b></p>
                      <p>A/N</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={germany} alt="golf" className="hotel4" /><br/>
                      <h6>Leonardo Royal Hotel Frankfurt</h6>
                      <p>Germany</p>
                      <p><b>$5,129</b></p>
                      <p>A/N</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                    </div>
                    </div><br/><br/>
                    <div class="container" class="famous">
                    <h3>Famous Hotel Details</h3><br/>
                <div class="row">
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <img src={canada} alt="golf" className="canada" />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                <h6>The Harbourview</h6>
                <p>Canada</p>
                <p>The traditional rooms and suites feature homey details such 
                    as patterned quilts, plus flat-screen TVs, DVD players and 
                    coffeemakers. Some units add views of flower gardens or 
                     Annapolis Basin. Cozy suites in the 19th-century house offer
                      verandas or decks, plus whirlpool tubs, microwaves, and 
                      minifridges.</p>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                      <p>Ava/Night</p>
                      <p><b>$5,537</b></p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <img src={germany} alt="golf" className="german" />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                <h6>Leonardo Royal Hotel Frankfurt</h6>
                <p>Germany</p>
                <p>Warm, contemporary rooms with colorful decor have balconies
                         and city views, plus free Wi-Fi, flat-screen TVs, and tea 
                         and coffeemaking facilities. Room service is available.
                </p>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <p>Ava/Night</p>
                      <p><b>$5,129</b></p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                </div>
                </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                <h3>What Travelers say?</h3>
                <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                <img src={business} alt="golf" class="business" />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h3>Business traveler</h3>
                  <p>I am business man and every time i am going to business trip.
                     I shared my experiene.When i went to germany the hotels and restorents are
                     good. German people very friendly.
                  </p>
                </div>
                </div>
                </div>
                </div>  
                </div><br/><br/>
                <div class="container" class="traveler">
                <h3>Travels Hotels Choice</h3><br/>
                <div class="row">

                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="choice">
                      <img src={canada} alt="golf" className="hotel4" /><br />
                      <h6>The Harbourview</h6>
                      <p>Canada</p>
                      <p><b>$5,537</b></p>
                      <p>A/N</p>
                      <p>****(5.5k)views</p><br/>

                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="choice">
                      <img src={nigeria} alt="golf" className="hotel4" /><br />
                      <h6>Hotel ibis Lagos Airport</h6>
                      <p>Nigeria</p>
                      <p><b>$6,400</b></p>
                      <p>A/N</p>
                      <p>***(4.0k)views</p><br/>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="choice">
                      <img src={malaysia} alt="golf" className="hotel4" /><br />
                      <h6>Seri Pacific Hotel Kuala Lumpur</h6>
                      <p>Kuala Lumpur</p>
                      <p><b>$2,314</b></p>
                      <p>A/N</p>
                      <p>**(3.5k)views</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="choice">
                      <img src={germany} alt="golf" className="hotel4" /><br/>
                      <h6>Leonardo Royal Hotel Frankfurt</h6>
                      <p>Germany</p>
                      <p><b>$5,129</b></p>
                      <p>A/N</p>
                      <p>*****(6.0k)views</p>
                      <a href="booknow"><button class="btn1" >Select</button></a>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div><br/><br/>
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
export default hotel;