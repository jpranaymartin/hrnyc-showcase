import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
const projects = require('../../data/data.json');

ReactDOM.render(<App projects={projects} />, document.getElementById('app'));
