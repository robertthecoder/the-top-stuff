import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="gray-bg">
                <span id="star" class="oi oi-star"></span>
                <h1>What is this website about?</h1>
                <p>Discover the "Top Stuff" to your heart's content, anything from popping music to scandalous news to delicious restaurants. </p>
                <p>When you discover something, you can add it to the the notebook on the left. </p>
            </div>
        );
    }
}