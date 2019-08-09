import React, { Component } from 'react';
import '../css/where.css'
import BrowserHistory from '../utilize/BrowserHistory'
// import {list_all_task} from '../Component/userfunction'
import axios from 'axios';


class wherewhenwho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // LocationName:'',
      Users: []
    }}
    onHandleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
   

    // onHandlesearch = () => {
    //   debugger;
    //   // LocationName=this.state.LocationName
    //   console.log("axios ====", axios)
    // axios.get('http://localhost:8000/location')
    // //   .then((res) => {}
    // //     )
    //   .then((data) => {
    //     this.setState({ contacts: data.data.response });
    //   })
    //   .catch((error) => {
    //       debugger
    //       console.log("error ====", error)
    // });
    //   }

    // onHnadlesearch(){
    //   axios.get('http://localhost:8000/location')
    //   .then(res => { 
    //   this.setState({contacts: res.data});
    //   console.log(this.state.contacts);
    //   });
    //   }


    componentDidMount() {
      axios.get('http://localhost:8000/location')
          .then(res => {
              this.setState({ Users: res.data });
              console.log(this.state.Users);
          });
        }
          // onHandlesearch()
          // {
          // const check=this.Users.map()
          // if(check.LocationName===this.state.LocationName)
          // {
          //   BrowserHistory.push('./paris')
          // }
          // if(check.LocationName===this.state.LocationName)
          // {
          //   BrowserHistory.push('./london')
          // }
          // if(check.LocationName===this.state.LocationName)
          // {
          //   BrowserHistory.push('./singapore')
          // }
          // }
  
    render() {
        return (
          <div>
          {this.state.Users.map(location => {
            // if(location.LocationName===this.state.LocationName)
           return(
             <h1>{location.LocationName}</h1>
           )
          })}
           {/* {this.state.Users.map(location => {
            if(location.LocationName===this.state.LocationName)
           return(
             BrowserHistory.push('./london')
           )
          })}
 {this.state.Users.map(location => {
            if(location.LocationName===this.state.LocationName)
           return(
             BrowserHistory.push('./singapore')
           )
          })} */}
                <div class="container" class="loccontainer">
                <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <h3>Where</h3><br />
              <label ><b>Your Destination</b></label><br />
              <input type="text" name="LocationName"  onChange={this.onHandleChange} value={this.state.LocationName}/><br />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>When</h3><br />
              <div class="row">
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check In</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check Out</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>Who</h3><br />
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Rooms</b></label><br />
                  <select>
                    <option value="volvo">Rooms</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Adults</b></label><br />
                  <select>
                    <option value="volvo">Adults</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Kids</b></label><br />
                  <select>
                    <option value="volvo">Kids</option>
                    <option value="volvo">One</option>
                    <option value="saab">Two</option>
                    <option value="opel">Three</option>
                    <option value="audi">Four</option>
                  </select>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1">
              <button  onClick={this.onHandlesearch} class="search">Search</button>
            </div>
          </div><br /><br />
                </div>
            </div>
        );
    }
}
export default wherewhenwho;