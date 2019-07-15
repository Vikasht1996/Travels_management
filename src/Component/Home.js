import React, { Component } from 'react';
import '../css/Home.css'
import logo from '../image/airlinelogo.png'
class Home extends Component {
    render() {
        return (
            <div class="body"> 
              
			{/* <nav class="navbar navbar-default" id="nav">
	<div class="container-fluid">
		<div class="navbar-header">
			<i class="fa fa-bars"></i>
		<a class="navbar-brand navcontent" href="#">Home</a>	
		</div>
		<ul class="nav navbar-nav navbar-center">
			<li><a href="#" class="navcontent"><strong><i class="fa fa-quora "></i>qhub</strong></a></li>
		</ul>
		
		<ul class="nav navbar-nav navbar-right">
			<li><i class="fa fa-bell-o fav" style="margin-right: 37px;" ><a href="home.html" style="margin-left: 34px;">Logout</a></i></li>
		</ul>
	</div> */}
{/* </nav>   */}
{/* <Navbar>
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar> */}
<div class="navbar">
					<span class="airlogo"><img src={logo} alt="golf" className="logoairline"/>
</span>
					<span class="item2">Travels Management</span>
					<span class="item3">Home
					</span>
					<span class="item4">Hotels
					</span>
					<span class="item4">Flights
					</span>
					<span class="item4">Destination
					</span>
            </div>
            <div className="container">
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12"></div>             
               </div>
               <div class="row">
              <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                <h3>Where</h3><br/><br/>
                <label ><b>Your Destination</b></label><br />
                <input type="text" placeholder="enter your destination" /><br />
                </div>  
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                <h3>Where</h3><br/><br/>
                <label ><b>Your Destination</b></label><br />
                <input type="text" placeholder="enter your destination" /><br />
                </div> 
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                <h3>Where</h3><br/><br/>
                <label ><b>Your Destination</b></label><br />
                <input type="text" placeholder="enter your destination" /><br />
                </div>            
               </div>
            </div>
			</div>
        );
    }
}

export default Home;