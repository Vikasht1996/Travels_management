import React, { Component } from 'react';
import axios from 'axios'
class singapore extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            Users:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/singaporeinfo')
        .then(res => { 
        this.setState({Users: res.data});
        console.log(this.state.Users);
        });
        }
    render() {
        return (
            <div>
            {this.state.Users.map(singapore => {
                return(
                <div>
                <h1>{singapore.Hotelname}</h1> 
                <h2>{singapore.Cityname}</h2> 
                <p>{singapore.Numberofreviews}</p>
                <p>{singapore.Discription}</p>
                <p>{singapore.Amount}</p>
                </div>)
                })}   
            </div>
        );
    }
}
export default singapore;