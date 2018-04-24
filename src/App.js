import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to='/'> HOME </Link>
          <Link className="item" to='/about'> ABOUT </Link>
          <Link className="item" to='/contact'> CONTACT </Link>
        </div>

        <Route exact path = '/' component={Home} />
        <Route path = "/about" component={About} />
        <Route path = "/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
