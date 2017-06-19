import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import logo from './logo.svg';
// import './App.css';

import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  componentWillMount(){
    this.AppState = this.context.ctxStore.AppState // get reference to master state
  }
  render(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    )
  }
}
Nav.contextTypes = {
  ctxStore: PropTypes.object // so component receives relevant context
}
export default Nav
