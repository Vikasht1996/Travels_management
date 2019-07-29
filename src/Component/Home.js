import React, { Component } from 'react';
import Fadeoperation from './fadeoperation'
import '../css/Home.css'
import logo from '../image/airlinelogo.png'
import hotel2 from '../image/hotel2.webp'
import hotel3 from '../image/hotel3.jpeg'
import hotel4 from '../image/hotel3.jpg'
import hotel5 from '../image/hotel4.jpg'
import hotel6 from '../image/summer.jpg'
import hotel7 from '../image/hotel7.webp'
import hotel8 from '../image/hotel8.jpg'
import hotel9 from '../image/hotel9.webp'
import hirecar from '../image/hirecar.jpg'
import cruise from '../image/cruise.jpg'
import things from '../image/things.jpg'
import fly from '../image/fly.jpg'
import bestprice from '../image/bestprice.webp'
import travelinsurence from '../image/travelinsurence.jpg'
import why from '../image/why-you.jpg'
import needhelp from '../image/needhelp.jpg'
import Wherewhenwho from '../Component/wherewhenwho'
// import Footer from './Footer'




class Home extends Component {
  render() {
    return (
      <div class="body">
        <nav class="navbar navbar-fixed-top">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" /></span>
          <span class="item2">Travels Management</span>
          <span class="item3"><a href="home">Home</a></span>
          <span class="item4"><a href="hotels">Hotels</a></span>
          <span class="item4"><a href="#">Flights</a></span>
          <span class="item4"><a href="#">Destination</a></span>
        </nav>
        <div className="container"><br /><br />
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
            <Fadeoperation/>            
            </div>
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
            <Wherewhenwho/>            
            </div> 
            </div>  <br/><br/>   
          <h3>Popular Destination</h3><br/>
          <div class="container" class="popular">
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel2} alt="golf" className="hotel2" /><br />
              <h5>Sun City International Hotel</h5>
              Dubai      $1,567
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel3} alt="golf" className="hotel2" /><br />
              <h5>Hotel Royal Ascot</h5><br />
              Dubai      $.2,266
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel4} alt="golf" className="hotel2" /><br />
              <h5>Vinnca West Downs Heritage Resort</h5>
              Ooty      $4,837
          </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel5} alt="golf" className="hotel2" /><br />
              <h5>Piccadily Hotel New Delhi</h5>
              New Delhi      $4,500
            </div>
          </div>
          </div><br /><br />
          <div class="container" class="best">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <img src={hotel6} alt="golf" className="hotel3" />
            </div>
            <div class="col-sm-8col-lg-8 col-md-8 col-xs-8">
              <h3>Best places in summer vacation</h3>
              <p>Students are out of school, parents are ready for a break,
                the weather is begging you to spend time together outdoors — summer
                 vacations are the perfect time for family bonding. Spending time with
                  your friends and family is a huge reason why you should be taking
                   a summer vacation.
                   Summer time is a time for fun in the sun. Whether you prefer relaxing
                    a beach, hiking in the wilderness or any other outdoor activity,
                    summer vacations are the perfect time of the year to enjoy everything
                  the outdoors has to offer.</p>
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel7} alt="golf" className="hotel4" /><br />
                      <h6>Novotel Paris Est</h6><br />
                      <p>Paris(31)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel8} alt="golf" className="hotel4" /><br />
                      <h6>Bulgari Hotel, London</h6>
                      <p>London(10)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel9} alt="golf" className="hotel4" /><br />
                      <h6>HotelVillage Hotel Albert Court</h6>
                      <p>Singapore(47)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br />
          </div><br/><br/>
          <div class="container" class="total">
          <div class="container" class="discription">
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={hirecar} alt="golf" className="travel" /><br />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h3>Hire Cars</h3>
                  <p>A car rental, hire car, or car hire agency is a company that
                    rents automobiles for short periods of time, generally ranging
               a few hours to a few weeks.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={cruise} alt="golf" className="travel" /><br />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h3>Cruise Deals</h3>
                  <p>A cruise ship is a passenger ship used for pleasure voyages when
                    voyage itself, the ship's amenities, and sometimes the different
                    destinations along the way (i.e., ports of call), form part of
                    the passengers' experience</p>
                </div>
              </div>
            </div>
          </div><br /><br />
          </div><br/><br/>
          <div class="container" class="discription">
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={things} alt="golf" className="travel" /><br />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h3>Things To Do</h3>
                  <p>Things to Make and Do is the third album by the electronic/dance
                  duo Moloko, released in the UK by Echo Records in 2000. It was a
                  sonic departure for Moloko, with tracks less reliant on electronics
                  and more on live musicians</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={fly} alt="golf" className="travel" /><br />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h3>Fly In Comfort</h3>
                  <p>First class is a travel class on some passenger airliners intended
                    to be more luxurious than business class, premium economy, and economy
                    class.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div><br/><br/>
          <div class="container" class="offers">
          <center><h3>Company Offers</h3>
            <p>The company provide offers like </p></center>
          <div class="row">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
          <div class="card"  >
                    <div class="card-body" class="offer">
                      <img src={bestprice} alt="golf" className="hotel4" /><br />
                      <p>Best Rate Guaranteed (BRG), is one of the latest pricing 
                        mechanisms, increasingly used by hotels and hotel chains around 
                        the world. It was introduced as a result of the hotel industry
                         mimicking the airline industry, which sets price by forecasting 
                         demand.</p>
                    </div>
                  </div>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
          <div class="card"  >
                    <div class="card-body" class="offer">
                      <img src={travelinsurence} alt="golf" className="hotel4" /><br />
                      <p>Travel insurance is insurance that is intended to 
                        cover medical expenses, trip cancellation, lost luggage, 
                        flight accident and other losses incurred while traveling, 
                        either internationally or domestically.
                      </p>
                    </div>
                  </div>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
          <div class="card"  >
                    <div class="card-body" class="offer">
                      <img src={why} alt="golf" className="hotel4" /><br />
                      <p>A travel agency is a private retailer or public service that provides 
                        travel and tourism related services to the public on behalf of suppliers 
                        such as activities, airlines, car rentals, cruise lines, hotels,
                         railways, travel insurance.</p>
                    </div>
                  </div>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
          <div class="card"  >
                    <div class="card-body" class="offer">
                      <img src={needhelp} alt="golf" className="hotel4" /><br />
                      <p>If you need any help for realted to travels ask the company
                         will help you </p>
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
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-">
              <h6 class="fh6">copyright@2019</h6>
            </div>
          </div>
        </footer>
        {/* <Footer/> */}
      </div>
    );
  }
}
export default Home;