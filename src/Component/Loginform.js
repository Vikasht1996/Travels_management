import '../css/Loginfrom.css'
import BrowserHistory from '../utilize/BrowserHistory';
import { success } from '../Action/Loginaction'
import {handle} from '../Action/Registeraction'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../Component/userfunction'
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      uerr: '',
      perr: ''
    }
  }
  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });
    

  }
  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const reqst = {
      Email: this.state.Email,
      Password: this.state.Password
    }
    login(reqst).then(res => {
      // if (firstname && username && email && password && confirmPassword && mobileNumber) {
      BrowserHistory.push('/login')
})
    if (this.state.Email.length === 0 && this.state.Password.length === 0) {
      this.setState({
        uerr: "Email is required",
        perr: "Password is required"
      })
    }
    else if (this.state.Email.length === 0) {
      this.setState({ uerr: "Email is required" })
    }
    else if (this.state.Password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    // else if (this.state.Email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
    //   this.setState({ uerr: "Please enter the valid email" })
    // }
    else if (this.state.Password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the strong password" })
    }
    else {
      BrowserHistory.push('/book')
    }
    
  }
  onHandleClicks = () => {
    BrowserHistory.push('/signup')
    // const loginDetails = { username: this.state.username, password: this.state.password };
    // this.props.submitLogin(loginDetails);
  }
  componentWillMount()
  {
       this.props.handle();
  }

  render() {
    return (
      <div className="login">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm1">
            <p>{this.props.message}</p>

              <h1>Login</h1>
                <label ><b>Username</b></label><br />
                <input type="text" name="Email" className="two" onChange={this.onHandleChange} /><br />
                <p>{this.state.uerr}</p>
                <label ><b>Password</b></label><br />
                <input type="password" name="Password" className="two" onChange={this.onHandleChange} /><br /><br />
                <p>{this.state.perr}</p>
              
              <button onClick={this.onHandleClick} className="btn2"><b>Login</b></button><a href="" onClick={this.onHandleClicks}>Register</a>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
const mapStoreToProps = (state) => {
  // const { message } = state.Loginreducer;
  const { message } = state.Registerreducer;


  return { message };
}
export default connect(mapStoreToProps, { success,handle })(Loginform);
