import React, { Component } from 'react'

export default class Notepad extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="notepad">
                <h2>Your Notebook</h2>
                <div className="title">
                    <label>Title:</label>
                    <input />
                </div>
                <div className="note">
                    <label>Note:</label>
                    <textarea></textarea>
                </div>
                <button>Save this Note! :)</button>
            </div>
        );
    }
}