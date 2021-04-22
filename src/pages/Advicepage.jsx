import React from 'react';
// import logo from './logo.svg';
// import Portfolio from '../components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

const Advicepage = () => { 
    return(
        <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Advice and News</h2>
              <h3 className="section-subheading text-muted">Below is a list of recent articles with advice and news related to Recruitment!</h3>
            </div>
          </div>
          <CardDeck>
          <Link to = "/advicepage1">
            <Card>
              <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/03/Copy-of-Dream-job-survey-image-350x200.jpg" />
              <Card.Body>
                <Card.Title>COVID and Careers Insight 2021</Card.Title>
              </Card.Body>
            </Card>
            </Link>
            <Card>
              <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/02/iStock-468044048-350x200.jpg" />
              <Card.Body>
                <Card.Title>Financial Services 2021 Salary Guide</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/02/Contracting-Matrix-Recruitment-350x200.jpg" />
              <Card.Body>
                <Card.Title>Why Contracting Roles are Overtaking Permanent Positions</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </section>
    )
}

export default Advicepage;