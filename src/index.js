import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const api = require('./config/config.js');
const API_KEY = api['API_KEY'];

// Create new component for produce some HTML
const App = () => {
    return (
        <div>
        <SearchBar />
     </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));