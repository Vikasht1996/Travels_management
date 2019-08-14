import React, { Component } from 'react';
import park from '../image/park.jpg'
import '../css/write.css'
import { reviewInfo } from './userfunction';
class writeareview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Yourreviews: '',
        };
    }
    onHandleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }


    onHandleClick = (e) => {
        debugger;
        e.preventDefault();
        const reqst2 = {
            Title: this.state.Title,
            Yourreviews: this.state.Yourreviews,
        }
        reviewInfo(reqst2).then(res => {
        })
    }
    render() {
        return (
            <div>
                <div class="container" class="write">
                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <div class="container" class="review">
                                <div class="row" >
                                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                        <img src={park} alt="golf" class="parks" /><br />
                                        <h5>Park Grand London Hyde Park</h5>
                                        <p><i class="fa fa-map-marker google" aria-hidden="true"></i>LONDON</p>
                                    </div>
                                </div>
                                <br /><br />
                                <hr />
                                <div class="row">
                                    <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                    <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                                    </div>
                                    <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">
                                        <p>270 REVIEWS</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                            <div class="container" class="review">
                                <div class="row">
                                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                        <h2>Your overall Ratings for this property</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                        <span class="fa fa-star rates"></span>
                                        <span class="fa fa-star rates"></span>
                                        <span class="fa fa-star rates"></span>
                                        <span class="fa fa-star rates"></span>
                                        <span class="fa fa-star rates1"></span>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">SERVICE</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">VALUE</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">SLEEP QUALITY</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">CLEANLINESS</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">LOCATION</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">ROOMS</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">SWIMMING POOL</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <h6 class="blue">FITNESS FACILITIES</h6>
                                    </div>
                                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate"></span>
                                        <span class="fa fa-star rate1"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br />
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <lable>Title of your review</lable><br />
                            <input type="text" name="Title" placeholder="enter a review" onChange={this.onHandleChange} class="enterreview" />
                            <br /><br />
                            <lable>Your review</lable><br />
                            <input type="text" name="Yourreviews" onChange={this.onHandleChange} placeholder="enter a review(minimum 200 character)" class="yourreview" onChange="" />
                        </div>
                    </div>

                    <br /><br />
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <h5>Share with your friends(optional)</h5>
                            <p>Share your review with your friends on with different socila media networks</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <i class="fa fa-instagram icon1"></i>
                            <i class="fa fa-facebook-square icon2"></i>
                            <i class="fa fa-twitter icon3"></i>
                            <i class="fa fa-youtube-play icon4"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <button class="subrive" onClick={this.onHandleClick}>SUBMIT REVIEW</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default writeareview;