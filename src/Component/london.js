import React, { Component } from 'react';
import axios from 'axios'
import logo from '../image/airlinelogo.png'
import continental from '../image/continental.jpg'
import park from '../image/park.jpg'



class london extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/londoninfo')
            .then(res => {
                this.setState({ Users: res.data });
                console.log(this.state.Users);
            });
    }
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
                </div><br /><br />

                {this.state.Users.map(london => {
                    if (london.Hotelname === "Park Grand London Hyde Park") {
                        return (

                            <div class="container book">
                                <div class="row">
                                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                                        <img src={park} alt="golf" class="hotel2" />

                                    </div>
                                    <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                                        <h6>HotelName:{london.Hotelname}</h6>
                                        <p>Place:{london.Cityname}</p>
                                        <p>Riviews:{london.Numberofreviews}</p>
                                        <p>{london.Discription}</p>
                                    </div>
                                    <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                                        <p>Ava/Night</p>
                                        <p><b>Praise:{london.Amount}</b></p>
                                        <button class="btn1"><a href='/booknow'>Book Now</a></button>
                                    </div>
                                </div>
                            </div>)
                    }
                })}

                <br /><br />
                {this.state.Users.map(london => {
                    if (london.Hotelname === "InterContinental London - The O2") {
                        return (

                            <div class="container book">
                                <div class="row">
                                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                                        <img src={continental} alt="golf" class="hotel2" />

                                    </div>
                                    <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                                        <h6>HotelName:{london.Hotelname}</h6>
                                        <p>Place:{london.Cityname}</p>
                                        <p>Riviews:{london.Numberofreviews}</p>
                                        <p>{london.Discription}</p>
                                    </div>
                                    <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                                        <p>Ava/Night</p>
                                        <p><b>Praise:{london.Amount}</b></p>
                                        <button class="btn1"><a href='/booknow'>Book Now</a></button>
                                    </div>

                                </div>
                            </div>)
                    }
                })}

                <br /><br />
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

export default london;

