import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Registrationfrom.css'
import BrowserHistory from '../utilize/BrowserHistory'
import { handle } from '../Action/Registeraction'
import { success } from '../Action/Loginaction'
import { signup,login } from './userfunction';

class Registrationfrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      Email: '',
      Password: '',
      ConfirmPassword:'',
      Mobilenumber:'',
      ferr: '',
      lerr: '',
      uerr: '',
      perr: '',
      cperr: '',
      phnerr: '',


    };
  }
  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });

  }
  onHandleClicks = (e) => {
    debugger;
    e.preventDefault();
    const reqst = {
      Email: this.state.Email,
      Password: this.state.Password
    }
    login(reqst).then(res => {
      if(res.data==="Login successfully"){
        alert("login succesfull")
        BrowserHistory.push('/booknow');
        }
        else
        alert("login fail")
})

  }


  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const reqst = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Email: this.state.Email,
      Password: this.state.Password,
      ConfirmPassword: this.state.ConfirmPassword,
      Mobilenumber: this.state.Mobilenumber

    }
    signup(reqst).then(res => {
      if(res.data==="User Created Succesfully"){
        alert("UserCreated Successfully")
        BrowserHistory.push('/login')
      }
      
})
      
      if (this.state.Firstname.length === 0 && this.state.Lastname.length === 0 && this.state.Email.length === 0 && this.state.Password.length === 0 && this.state.ConfirmPassword.length===0 && this.state.Mobilenumber.length===0) {
      this.setState({
        ferr: "Firstname is required", lerr: "Lastname is required",
        uerr: "Email is required",
        perr: "Password is required",
        cperr: "ConrimPassword is required",
        phnerr: "Phonumber is required"

      })
    }
    else if (this.state.Firstname.length === 0) {
      this.setState({ ferr: "Firstname is required" })
    }
    else if (this.state.Lastname.length === 0) {
      this.setState({ lerr: "Lastname is required" })
    }
    else if (this.state.Email.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.Password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.ConfirmPassword.length === 0) {
      this.setState({ Cperr: "Password is required" })
    }
    else if (this.state.Mobilenumber.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }

    else if (this.state.Firstname.match(/^[A-Za-z]{5}$/)) {
      this.setState({ ferr: "Please enter the valid fname" })
    }
    // else if (this.state.Lastname.match(/^[A-Za-z]{5}$/)) {
    //   this.setState({ lerr: "Please enter the valid lname" })
    // }
    // else if (this.state.Email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
    //   this.setState({ uerr: "Please enter the valid email" })
    // }
    else if (this.state.Password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
    else if (this.state.ConfirmPassword.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ cperr: "Please enter the valid password" })
    }
    else if (this.state.Mobilenumber.match(/^[0-9]{9}$/)) {
      this.setState({ phnerr: "Please enter the valid number" })
    }

    else {
      BrowserHistory.push('/login')
      // this.Loginaction.props.success("Register Successfully")
    }
  }


  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <h1>Signup</h1>
              
                <label><b>First Name</b></label><br />
                <input type="text" name="Firstname" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.ferr}</p>
                <label><b>Last Name</b></label><br />
                <input type="text" name="Lastname" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.lerr}</p>

                <label ><b>Email</b></label><br />
                <input type="text" name="Email" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.uerr}</p>
                <label ><b>Password</b></label><br />
                <input type="password" name="Password" className="one" onChange={this.onHandleChange} /><br /><br />
                <p >{this.state.perr}</p>
                <label ><b>Confirmpassword</b></label><br />
                <input type="password" name="ConfirmPassword" className="one" onChange={this.onHandleChange} /><br /><br />
                <p >{this.state.cperr}</p>
                <label ><b>Mobilenumber</b></label><br />
                <input type="text" name="Mobilenumber" className="one" onChange={this.onHandleChange} /><br /><br />
                <p >{this.state.phnerr}</p>
                <button onClick={this.onHandleClick}  className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClicks}>Cancel</a>
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
  const { message } = state.Registerreducer;


  return { message };
};
export default connect(mapStoreToProps,{handle,success})(Registrationfrom);
