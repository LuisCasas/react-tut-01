import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const api = require('./config/config.js');
const API_KEY = api.default.API_KEY;

// Create new component for produce some HTML
class App extends Component{

    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null 
        };

        this.videoSerch('snowboard');
    }

    videoSerch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos }); // equivelant of {videos: videos}
            this.setState({ 
                 videos: videos,
                 selectedVideo: videos[0]
             }); 
         });  
    }

    render(){

        const videoSearch = _.debounce((term) => {this.videoSerch(term)}, 300);

        return (
            <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));