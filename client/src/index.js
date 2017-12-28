import React from 'react';
import ReactDOM from 'react-dom';
import {routeSetup} from 'react-hash-route';
import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';

function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

routeSetup(render);
