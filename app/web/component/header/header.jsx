import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="header">
      <div className="container"><h1>
        <a href="/" className="router-link-active">案例</a></h1>
      <ul className="nav">
        <li className="nav-item"><a href="/">Server-Render</a></li>
        <li className="nav-item"><a href="/ss">test-Design</a></li>
      </ul>
      </div>
    </header>;
  }
}
