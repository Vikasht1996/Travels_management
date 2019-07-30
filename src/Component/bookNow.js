import React, { Component } from 'react';
import logo from '../image/airlinelogo.png'
import '../css/book.css'
class bookNow extends Component {
    render() {
        return (
            <div class="body">
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
                    <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                    
                    </div>
                    <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                        <div class="container" class="userinfo">
                        <div class="row">
                    <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">

                    <h1>Information</h1>
              
              <label><b>First Name</b></label><br />
              <input type="text" name="Firstname" className="one" onChange={this.onHandleChange} /><br />
              
              <label><b>Last Name</b></label><br />
              <input type="text" name="Lastname" className="one" onChange={this.onHandleChange} /><br />
              

              <label ><b>Email</b></label><br />
              <input type="text" name="Email" className="one" onChange={this.onHandleChange} /><br />
              
              <label ><b>Verify Email</b></label><br />
              <input type="text" name="Vemail" className="one" onChange={this.onHandleChange} /><br /><br />
            
              <label ><b>Country Code</b></label><br />
              <input type="text" name="countrycode" className="one" onChange={this.onHandleChange} /><br /><br />
              
              <label ><b>Phone Number</b></label><br />
              <input type="text" name="phonenumber" className="one" onChange={this.onHandleChange} /><br /><br />
                        </div> 


                        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">

<h1>CardInformation</h1>

<label><b>CardType</b></label><br />
<input type="text" name="CardType" className="one" onChange={this.onHandleChange} /><br />

<label><b>CardHolderName</b></label><br />
<input type="text" name="CardHolderName" className="one" onChange={this.onHandleChange} /><br />


<label ><b>CardNumber</b></label><br />
<input type="text" name="CardNumber" className="one" onChange={this.onHandleChange} /><br />

<label ><b>CardIdentificationNumber</b></label><br />
<input type="text" name="CardIdentificationNumber" className="one" onChange={this.onHandleChange} /><br /><br />

<label ><b>ExpirationDate</b></label><br />
<input type="date" name="ExpirationDate" className="one" onChange={this.onHandleChange} /><br /><br />

<label ><b>MonthYear</b></label><br />
<input type="text" name="MonthYear" className="one" onChange={this.onHandleChange} /><br /><br />
<label ><b>BillingZipCode</b></label><br />
<input type="text" name="BillingZipCode" className="one" onChange={this.onHandleChange} /><br /><br />
    </div> 
                    </div>
                    <center><button onClick={this.onHandleClick} className="btn1"><b>Save</b></button><a href="" onClick={this.onHandleClicks}>Cancel</a></center>                    </div>

                        </div>
                    <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2"></div>
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

export default bookNow;