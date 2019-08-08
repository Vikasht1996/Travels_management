import React, { Component } from 'react';
import logo from '../image/airlinelogo.png'
import avenue from '../image/avenue.jpg'
import hampton from '../image/hampton.jpg'
import astor from '../image/astor.webp'

import axios from 'axios';
class paris extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            contacts:[]
        };
    }

    componentDidMount(){
        debugger;
    //    axios.get('http://localhost:8000/p')
    //     . then(res => { 
    //     this.setState({contacts: res.data});
    //     console.log(this.state.contacts);
    //     });
    console.log("axios ====", axios)
    axios.get('http://localhost:8000/p')
    //   .then((res) => {}
    //     )
      .then((data) => {
        this.setState({ contacts: data.data.response });
      })
      .catch((error) => {
          debugger
          console.log("error ====", error)
    });
  }


        // componentDidMount() {
        //     debugger;
        //     console.log("After componentDidMount");
        //     axios.get('http://localhost:8000/p')
        //     //   .then(res => res.json())
        //       .then((data) => {
        //         this.setState({ contacts: data.data })
        //       })
        //       .catch(console.log)
        //   }





    render() {
        debugger
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

{this.state.contacts.map(paris => {
    if(paris.Hotelname==="Hôtel Tourisme Avenue"){
    return(
       
<div class="container">
    <div class="row">
    <img src={avenue} alt="golf" className="hotel2" /><br />
    
<h1>{paris.Hotelname}</h1> 
<h2>{paris.Cityname}</h2> 
<p>{paris.Numberofreviews}</p>
<p>{paris.Discription}</p>
<p>{paris.Amount}</p>
</div>
</div>)}
})}  

<br/><br/>
{this.state.contacts.map(paris => {
    if(paris.Hotelname==="Hampton by Hilton Paris Clichy"){
    return(
       
<div class="container">
    <div class="row">
    <img src={hampton} alt="golf" className="hotel2" /><br />
    
<h1>{paris.Hotelname}</h1> 
<h2>{paris.Cityname}</h2> 
<p>{paris.Numberofreviews}</p>
<p>{paris.Discription}</p>
<p>{paris.Amount}</p>
</div>
</div>)}
})}   
<br/><br/>
{this.state.contacts.map(paris => {
    if(paris.Hotelname==="Maison Astor Paris, Curio Collection by Hilton"){
    return(
       
<div class="container">
    <div class="row">
    <img src={astor} alt="golf" className="hotel2" /><br />
    
<h1>{paris.Hotelname}</h1> 
<h2>{paris.Cityname}</h2> 
<p>{paris.Numberofreviews}</p>
<p>{paris.Discription}</p>
<p>{paris.Amount}</p>
</div>
</div>)}
})}   

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

export default paris;