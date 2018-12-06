import React, { Component } from 'react';
import './musicStyle.css'
import './musicRespStyle.css'

export default class TopMusic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rightContainer">
                <MusicPage></MusicPage>
            </div>
        );
    }
}
const queryURL = "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3b7073a687cc95da319e6dff74046fac&format=json";

class MusicPage extends Component {
    constructor(props) {
        super(props)
        this.state = { songs: [] }

        // this.state{ songs: [] };
        // this.handleNumChange = this.handleNumChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.fetchNews = this.fetchNews.bind(this)
        // this.handleQueryChange = this.handleQueryChange.bind(this)

        this.fetchSongs = this.fetchSongs.bind(this);
    }

    fetchSongs() {
        fetch(queryURL, {
            method: "GET"
        }).then(res => {
            if (!res.ok) {
                throw Error("error")
            }
            return res.json()
        }).then(data => {
            console.log(data.tracks.track);

            this.setState({ songs: data.tracks.track })

            // console.log(this.state);



            //   let numcopy = this.state.numArticles;
            //   let qcopy = this.state.query;
            //   this.setState({data:data.articles,numArticles:numcopy,query:qcopy})



        }).catch(function (error) {
            console.log(error)
        })

        // console.log("fetchnews");
    }


    render() {
        // console.log(this.state.songs)

        var songArr = this.state.songs
        console.log(songArr)

        var songTiles = songArr.map((song) =>
            <a class="songEl respoSongEl" href={song.url}>
                <img class="imageEl" src={song['image'][3]['#text']} alt=""></img>
                {/* <img class="imageEl" src= /> */}

                <h2 class="songName">{song.name}</h2>
            </a>
        )


        return (
            <div className="music-content">
                {/* <img src="images/news.jpg" alt="A group of students jumping with joy." style={{ width: '100%', height: '600px', padding: '0px' }} /> */}

                <div class="title">
                    <h1 aria-label="Title: The Music Archive">The Music Archive</h1>
                    <h2 aria-label="Subtitle: The Music Archive">"Explore Thy Muse.." </h2>
                </div>

                <div aria-hidden="true" class="black-line"></div>

                <div aria-hidden="true" class="flex-container">
                    <div aria-hidden="true" class="topSongsCont flex-child">
                        <button aria-label="Button for: Get Top Songs" class="getTopSongs" id="getSongs" onClick={this.fetchSongs}>
                            <h3>Get Top Songs Atm (Click Me):</h3>
                        </button>
                        {/* <!-- <h2>On both Desktop / Mobile:</h2> --> */}
                        <p aria-label="Click button above"><strong>Click the button above: to see the Top Songs Right Now! :)</strong></p>

                        {songTiles}
                    </div>
                    <div aria-hidden="true" class="black-line"></div>

                    {/* <div aria-hidden="true" class="topArtistsCont flex-child">
                        <button aria-label="Button for: Get top artists " class="getTopArtists" id="getArtists" >
                            <h3>Get Top Artists Atm (Click Me):</h3>
                        </button>

                        <p aria-hidden="true"><strong>Click ^ : to explore the Top Artists right now!</strong></p>

                        <div aria-hidden="true" id="plotDiv">

                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}