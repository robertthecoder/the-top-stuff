import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="rightContainer">
                <span id="star" class="oi oi-star"></span>
                <h1>TOP STUFF</h1>
            </div>
        );
    }
}