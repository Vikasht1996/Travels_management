import React, { Component } from 'react';
import axios from 'axios'

class london extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            Users:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/londoninfo')
        .then(res => { 
        this.setState({Users: res.data});
        console.log(this.state.Users);
        });
        }
    render() {
        return (
            <div>
                {this.state.Users.map(london => {
                    return(
<div>
<h1>{london.Hotelname}</h1> 
<h2>{london.Cityname}</h2> 
<p>{london.Numberofreviews}</p>
<p>{london.Discription}</p>
<p>{london.Amount}</p>
</div>)
})}   
                
            </div>
        );
    }
}

export default london;

