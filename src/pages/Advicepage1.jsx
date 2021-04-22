/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
// import logo from './logo.svg';
// import Portfolio from './components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
import '../App'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Advicepage1 = () => {
    return (
<section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Advice and News</h2>
              <h3 className="section-subheading text-muted">Below is a list of recent articles with advice and news related to Recruitment!</h3>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Advicepage1;