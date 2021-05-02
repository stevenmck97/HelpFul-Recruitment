import React from 'react';
// import logo from './logo.svg';
// import Portfolio from '../components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import {HashLink as Link} from 'react-router-hash-link'
import Navbar from 'react-bootstrap/Navbar'


const SiteHeader = () => { 
return (
  
  <Navbar bg="light" expand="lg">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">Helpful Recruitment</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/#careers">Career Sectors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/#advice">Advice & News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/LiveChat">Live Chat</Link>
            </li>
          </ul>
          </Navbar.Collapse>
      </div>
    </nav>
    </Navbar>
    

    )
}

export default SiteHeader;