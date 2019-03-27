import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const routing = (
  <Router>
    <div>
      <div className="navbar">

          <Link className="navLink" to="/">Home</Link>

          <Link className="navLink" to="/Projects">TinyPoems</Link>

          <Link className="navLink" to="/Contact">Contact</Link>

      </div>
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
