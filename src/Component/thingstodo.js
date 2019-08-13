import React, { Component } from 'react';
import Star from '../Component/star';
import park from '../image/park1.jpg'
import museum from '../image/museum.jpg'
import '../css/thingstodo.css'
class thingstodo extends Component {
    render() {
        return (
            <div class="body">
                <div class="container" class="things">
                    <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                    <h3>Things To Do</h3>
                    </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            Maecenas viatee turips condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan. 
                            Duis laoreet sagittis elit et vehicula. Cras viverra posuere condimentum. Donec urna arcu, venenatis
                            quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing,arcu 
                            metus luctus libero, nec vulputate risus elit id nibh.
                        </div>
                    </div>
                    <br/><br/>

                    <div class="row">
                       
                        <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                        <img src={park} alt="golf" class="park" />
                        </div>
                        <div class="col-sm-9 col-lg-9 col-md-9 col-xs-9">
                            <div class="row">
                            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">
                                <h6>Central Park Walking Tour</h6>
                           </div>  
                           <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1">
                           
                           </div>
                           <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                           {/* <Star/> */}

                           <span class="fa fa-star checks"></span>
               <span class="fa fa-star checks"></span>
                  <span class="fa fa-star checks"></span>
                          <span class="fa fa-star"></span>
                           <span class="fa fa-star"></span>



                           </div>
                           <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                           <p>25 REVIEWS</p>
                           </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolor magna aliquam erat volutpat wisi enim don't look even slightly 
                                    believable. 
                                </p>
                                
                                </div>  
                            </div>
                            <div class="row">
                            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                <button><b>More</b></button>
                            </div>
                            </div>
                           
                           </div>
                    </div>

                    <hr/>


                    <div class="row">
                        
                        <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                        <img src={museum} alt="golf" class="park" />
                        </div>
                        <div class="col-sm-9 col-lg-9 col-md-9 col-xs-9">
                            <div class="row">
                            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">
                                <h5>Museum of Modern Art</h5>
                           </div>  
                           <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1">
                           
                           </div>
                           <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                           {/* <Star/> */}

                           <span class="fa fa-star checks"></span>
               <span class="fa fa-star checks"></span>
                  <span class="fa fa-star checks"></span>
                          <span class="fa fa-star"></span>
                           <span class="fa fa-star"></span>


                           </div>
                           <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                           <p>25 REVIEWS</p>
                           </div>
                            </div>
                            <hr/>
                            <div class="row">
                            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolor magna aliquam erat volutpat wisi enim don't look even slightly 
                                    believable. 
                                </p>
                                
                                </div>  
                            </div>
                            <div class="row">
                            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                <button><b>More</b></button>
                            </div>
                            </div>
                           
                           </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default thingstodo;