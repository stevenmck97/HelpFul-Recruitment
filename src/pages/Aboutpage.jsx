import React from 'react';
// import logo from './logo.svg';
// import Portfolio from '../components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

const Aboutpage = () => { 
    return(
        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Jobseekers</h2>
                <h3 className="section-subheading text-muted">Helpful Recruitment aims to keep jobseekers informed about the latest developments in the Recruitment landscape, with tips and tricks, career sectors information, and more!</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Career Sectors</h4>
                <p className="text-muted">We have a number of career sectors which will inform you all you need to know!</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Advice and News</h4>
                <p className="text-muted">Keep up to date with the latest developments in the Recruitment industry with our frequent updates with News and Advice!</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Forum</h4>
                <p className="text-muted">Feel free to join our discussion forum and converse with other users about anything recruitment related!</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Aboutpage;