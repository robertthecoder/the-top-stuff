import React, { Component } from 'react'
import firebase from 'firebase/app';

export default class Notepad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }

        // this.setState({ 'user': this.props.user });

        console.log(this.state.user);
        // console.log(this.state.user.user);
    }

    // get current user

    // when the text in the notebook form changes
    updateNoteTitle = (event) => {
        this.setState({ title: event.target.value });
        console.log(this.state);
    }

    // when the text in the notebook form changes
    updateNoteBody = (event) => {
        this.setState({ body: event.target.value });
        console.log(this.state);
    }

    //post a new chirp to the database
    postNote = (event) => {
        // event.preventDefault(); //don't submit

        let newNote = {
            title: this.state.title,
            body: this.state.body
        };

        // console.log(this.props.currentUser.userId);

        // let newChirp = {
        //     text: this.state.post,
        //     userId: this.props.currentUser.uid,
        //     userName: this.props.currentUser.displayName,
        //     userPhoto: this.props.currentUser.photoURL,
        //     time: firebase.database.ServerValue.TIMESTAMP
        // };

        // console.log(this.props.currentUser.uid);

        let notesRef = firebase.database().ref()
        // .catch(err => console.log(err.message));

        // notesRef.push(newNote);
        // notesRef.set({ title: "hello", body: "body text" });

        console.log(newNote);
        // notesRef.child("Notes").set("body text");
        notesRef.child("Notes").push(newNote);

        console.log(notesRef);

        /* TODO: add a new Chirp to the database */

        // this.setState({ post: '' }); //empty out post for next time
    }

    render() {
        // this.postNote();
        console.log(this.props)
        return (
            <div className="notepad">
                <h2>Your Notebook</h2>
                <div className="title">
                    <label>Title:</label>
                    <input onChange={this.updateNoteTitle} />
                </div>
                <div className="note">
                    <label>Note:</label>
                    <textarea onChange={this.updateNoteBody}></textarea>
                </div>
                <button onClick={this.postNote}>Save this Note! :)</button>
            </div>
        );
    }
}