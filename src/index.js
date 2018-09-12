import React from 'react';
import ReactDOM from 'react-dom';

// Create new component for produce some HTML
const App = () => {
    return <div>Hello React!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));