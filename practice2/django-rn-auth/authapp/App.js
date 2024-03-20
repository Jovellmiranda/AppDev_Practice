import React, { Component } from 'react';
import axios from 'axios'; // Import axios

import Router from './src/Router';

export default class App extends Component {
  componentWillMount() { // Move componentWillMount inside the component
    axios.defaults.baseURL = 'http://192.168.1.12:8000/api';
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      <Router />
    );
  }
}
