import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const api = require('./config/config.js');
const API_KEY = api.default.API_KEY;

// Create new component for produce some HTML
class App extends Component{

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'skate'}, (videos) => {
            this.state({ videos }); // equivelant of {videos: videos}
        });        
    }

    render(){
        return (
            <div>
            <SearchBar />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));