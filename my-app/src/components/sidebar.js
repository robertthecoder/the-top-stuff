import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Notepad from './Notepad'

import firebase from 'firebase/app';

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        // this.state = {};
    }

    render() {
        let linkStyle = {
            textDecoration: 'none',
            color: '#efefef'
        };

        console.log(this.props.displayName);
        return (
            <div className="sideBar">
                <ul className="navList">
                    <li><Profile displayName={this.props.displayName} ></Profile></li>
                    <NavLink to="/"><li id="Home">Home</li></NavLink>
                    <NavLink to="/About"><li>About</li></NavLink>
                    <NavLink to="/TopMusic"><li>Top Music</li></NavLink>
                    <NavLink to="/TopNews"><li>Top News</li></NavLink>
                    <NavLink to="/TopFood"><li>Top Food</li></NavLink>
                    <NavLink to="/SavedStuff"><li>Saved Stuff</li></NavLink>

                    {this.props.children}
                    <li><Notepad></Notepad></li>
                </ul>
            </div>
        );
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.displayName);
    }



    render() {
        console.log(this.props);
        return (
            <div className="profile">
                <div className="avatar">
                    <img className="dave" src={require("../img/dawg.png")} width="125" height="100" />
                </div>
                <div className="displayName">
                    <h6>Hello {this.props.displayName} </h6>
                </div>
            </div>
        );
    }
}