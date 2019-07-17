import React, { Component } from 'react';
import '../css/hotel.css'
import Fadeoperation from './fadeoperation'
import hotel7 from '../image/hotel7.webp'
import canada from '../image/canada-hotel.webp'
import nigeria from '../image/nigeria.webp'
import malaysia from '../image/malaysia.webp'
import germany from '../image/germany.webp'
class hotel extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                     <Fadeoperation/>            
                    </div>                    
                    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <center><h3>Recommended Hotels</h3></center>
                    <div class="row">
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={canada} alt="golf" className="hotel4" /><br /><br/>
                      <h6>The Harbourview</h6><br />
                      <p>Canada</p>
                      <p><b>$5,537</b></p>
                      <p>A/N</p>
                      <button class="btn1">Select</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={nigeria} alt="golf" className="hotel4" /><br /><br/>
                      <h6>Hotel ibis Lagos Airport</h6><br />
                      <p>Nigeria</p>
                      <p><b>$6,400</b></p>
                      <p>A/N</p>
                      <button class="btn1">Select</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={malaysia} alt="golf" className="hotel4" /><br /><br/>
                      <h6>Seri Pacific Hotel Kuala Lumpur</h6><br />
                      <p>Kuala Lumpur</p>
                      <p><b>$2,314</b></p>
                      <p>A/N</p>
                      <button class="btn1">Select</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                  <div class="card"  >
                    <div class="card-body" class="recomended">
                      <img src={germany} alt="golf" className="hotel4" /><br/><br/>
                      <h6>Leonardo Royal Hotel Frankfurt</h6><br />
                      <p>Germany</p>
                      <p><b>$5,129</b></p>
                      <p>A/N</p>
                      <button class="btn1">Select</button>
                    </div>
                  </div>
                </div>
                    </div>
                <div class="row">
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <img src={canada} alt="golf" className="hotel4" /><br /><br/>
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                <h6>The Harbourview</h6><br />
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
                      <p><b>$5,129</b></p>
                      <button class="btn1">Select</button>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <img src={nigeria} alt="golf" className="hotel4" /><br /><br/>
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                </div>
                
                </div>
                
            </div>
        );
    }
}
export default hotel;