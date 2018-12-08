import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="gray-bg">

                <div className="home-intro">
                    <span id="star" className="oi oi-star"></span>
                    <h1>What is this Website About?</h1>

                    <div >
                        <p>Discover the "Top Stuff" to your heart's content, anything from popping music to scandalous news to delicious restaurants. </p>
                        <p>When you discover something, you can add it to the the notebook on the left. </p>
                    </div>



                </div>

                <div className="saved-notes-container">
                    <h4>Recent Saved Notes:</h4>

                    <div className="flex-cont">
                        <div className="rend-note">
                            <h5>
                                Title
                        </h5>
                            <p>Body</p>
                        </div>
                        <div className="rend-note">
                            <h5>
                                Title
                        </h5>
                            <p>Body</p>
                        </div>
                        <div className="rend-note">
                            <h5>
                                Title
                        </h5>
                            <p>Body</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}