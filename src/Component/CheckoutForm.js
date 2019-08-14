import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import logo from '../image/airlinelogo.png'
import '../css/pay.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) 
    alert("Your booking successfully")
    // if (response.ok) this.setState({complete: true})
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
        <div class="container">
            <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
            <div className="checkout">
                <p>Would you like to book this hotel</p>
                <CardElement />
                <button  class="pay" onClick={this.submit}>Pay</button>
            </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
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

export default injectStripe(CheckoutForm);