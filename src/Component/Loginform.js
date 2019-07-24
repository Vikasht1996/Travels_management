import '../css/Loginfrom.css'
import BrowserHistory from '../utilize/BrowserHistory';
import { success } from '../Action/Loginaction'
import {handle} from '../Action/Registeraction'
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      uerr: '',
      perr: ''
    }
  }
  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });
    

  }
  onHandleClick = () => {
    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({
        uerr: "Username is required",
        perr: "Password is required"
      })
    }
    else if (this.state.username.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.username.match(/^[A-Za-z]{5}$/)) {
      this.setState({ uerr: "Please enter the valid uname" })
    }
    else if (this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the strong password" })
    }
    else {
      BrowserHistory.push('/home1')
    }
    
  }
  onHandleClicks = () => {
    BrowserHistory.push('/register')
    const loginDetails = { username: this.state.username, password: this.state.password };
    this.props.submitLogin(loginDetails);
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
              <form >
                <label ><b>Username</b></label><br />
                <input type="text" name="username" className="two" onChange={this.onHandleChange} /><br />
                <p>{this.state.uerr}</p>
                <label ><b>Password</b></label><br />
                <input type="password" name="password" className="two" onChange={this.onHandleChange} /><br /><br />
                <p>{this.state.perr}</p>
              </form>
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
