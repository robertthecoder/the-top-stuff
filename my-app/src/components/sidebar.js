import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        let linkStyle = {
            textDecoration: 'none',
            color: '#efefef'
        };
        return (
            <div className="sideBar">
                <ul className="navList">
                    <li><Profile></Profile></li>
                    <NavLink to="/"><li id="Home">Home</li></NavLink>
                    <NavLink to="/About"><li>About</li></NavLink>
                    <NavLink to="/TopMusic"><li>Top Music</li></NavLink>
                    <NavLink to="/TopNews"><li>Top News</li></NavLink>
                    <NavLink to="/TopFood"><li>Top Food</li></NavLink>
                    <NavLink to="/SavedStuff"><li>SavedStuff</li></NavLink>
                </ul>
            </div>
        );
    }
}

class Profile extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="profile">
                <div className="avatar">
                    <img className="dave" src={require("../img/oppa.jpg")} width="100" height="100" />
                </div>
                <div className="displayName">
                    <h6>Dave Lee</h6>
                </div>
            </div>
        );
    }
}