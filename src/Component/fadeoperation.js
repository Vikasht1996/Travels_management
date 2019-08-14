import React, { Component } from 'react';
import '../css/fade.css'
import hotel from '../image/hotel1.jpg'
import hotel2 from '../image/hotel3.jpg'
import hotel3 from '../image/hotel3.jpeg'
import hotel4 from '../image/hotel4.jpg'
import hotel5 from '../image/hotel8.jpg'
import hotel9 from '../image/hotel9.webp'
class fadeoperation extends Component {
    render() {
        return (
            <div>
                <div id="ritu" >
                    <img src={hotel} />
                    <img src={hotel2} />
                    <img src={hotel3} />
                    <img src={hotel4} />
                    <img src={hotel5} />
                    <img src={hotel9} />
                </div>
            </div>
        );
    }
}

export default fadeoperation;