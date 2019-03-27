import React, { Component } from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faenvelope } from '@fortawesome/free-solid-svg-icons'

class Contacts extends Component {
  render() {
    return (
      <div className="ContactContainer">
        <a href="mailto:keeganpoetry@gmail.com" className="ContactMe">Contact Me</a>
        <FontAwesomeIcon icon="envelope" />
      </div>
    );
  }
}

export default Contacts;
