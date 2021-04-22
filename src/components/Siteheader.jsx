import React from 'react';
// import logo from './logo.svg';
// import Portfolio from '../components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import {HashLink as Link} from 'react-router-hash-link'

const SiteHeader = () => { 
return (

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">Helpful Recruitment</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
      <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/#services">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Career Sectors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">Jobseekers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Advice and News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default SiteHeader;