import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Notepad from './Notepad'

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
                    <NavLink to="/SavedStuff"><li>Saved Stuff</li></NavLink>
                    <li><Notepad></Notepad></li>
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
                    <img className="dave" src={require("../img/dawg.png")} width="125" height="100" />
                </div>
                <div className="displayName">
                    <h6>Hello friend</h6>
                </div>
            </div>
        );
    }
}