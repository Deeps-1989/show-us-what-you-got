import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import '../static/sass/component.scss';
//sync server state and client state and pass it as props
const data = window.__PRELOADED_STATE__;
ReactDOM.render(
    <App data= {data}/>,
    document.getElementById('main')
);
