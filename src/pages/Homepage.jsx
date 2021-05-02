import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

//This page contains the landing page. The contents include About, Career Sectors, Advice & News, Recommended videos.

const Homepage = () => { 
    return(
        <div className="App">
        
        {/* header image */}
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Helpful Recruitment!</div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#about">About Us</a>
            </div>
          </div>
        </header>
  
        {/* About section */}
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Jobseekers</h2>
                <h3 className="section-subheading text-muted">Helpful Recruitment aims to keep jobseekers informed about the latest developments in the Recruitment landscape, with tips and tricks, career sectors information, and more!</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <h4>Career Sectors</h4>
                <p className="text-muted">We have a number of career sectors which will inform you all you need to know!</p>
              </div>
              <div className="col-md-4">
                <h4>Advice and News</h4>
                <p className="text-muted">Keep up to date with the latest developments in the Recruitment industry with our frequent updates with News and Advice!</p>
              </div>
              <div className="col-md-4">
                <h4>LiveChat</h4>
                <p className="text-muted">Feel free to join our LiveChat and converse with other users about anything recruitment related!</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Career Sector section with clickable cards which link to individual pages*/}
        <section className="page-section" id="careers" style={{ backgroundColor: "#252628" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Career Sectors</h2>
                <h3 className="section-subheading text-muted">Below is a list of career sectors which we provide information and job listings on.</h3>
              </div>
            </div>
            <CardDeck >
              <Card className="card-career">
                <Link to = "AccountancyPage">
                <Card.Img variant="top" src="accountancy.jpg" />
                <Card.Body>
                  <Card.Title>Accountancy</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "PublicSectorPage">
                <Card.Img variant="top" src="pubsector.jpg" />
                <Card.Body>
                  <Card.Title>Public Sector</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "FinancialServicesPage">
                <Card.Img variant="top" src="financeserv.jpg" />
                <Card.Body>
                  <Card.Title>Financial Services</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card className="card-career">
              <Link to = "EngineeringPage">
                <Card.Img variant="top" src="engineering.jpg" />
                <Card.Body>
                  <Card.Title>Engineering</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "ManufacturingPage">
                <Card.Img variant="top" src="manufacturing.jpg" />
                <Card.Body>
                  <Card.Title>Manufacturing</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "QualityLabPage">
                <Card.Img variant="top" src="qualitylab.jpg" />
                <Card.Body>
                  <Card.Title>Quality and Laboratory</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card className="card-career">
              <Link to = "SupplyChainPage">
                <Card.Img variant="top" src="supplychain.jpg" />
                <Card.Body>
                  <Card.Title>Supply Chain</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "HumanResourcesPage">
                <Card.Img variant="top" src="hrimage.jpg" />
                <Card.Body>
                  <Card.Title>Human Resources</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card className="card-career">
              <Link to = "ITPage">
                <Card.Img variant="top" src="itpage.jpg" />
                <Card.Body>
                  <Card.Title>IT</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
          </div>
        </section>  
        
        {/* Advice section with clickable cards which link to individual pages*/}
         <section className="page-section" id="advice" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Advice and News</h2>
                <h3 className="section-subheading text-muted">Below is a list of recent articles with advice and news related to Recruitment!</h3>
              </div>
            </div>
            <CardDeck >
              <Card className="card-advice" style={{ width: '20rem', height: '18rem' }}>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="advice-covidcareerinsight.jpg" />
                <Card.Body>
                  <Card.Title>COVID and Careers Insight 2021</Card.Title>
                </Card.Body>
                </Link>
              </Card>
             
              <Card className="card-advice" style={{ width: '20rem', height: '18rem' }}>
              <Link to = "FinanceAdvicePage">
                <Card.Img variant="top" src="advicesalary.jpg" />
                <Card.Body>
                  <Card.Title>Financial Services 2021 Salary Guide</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            
              <Card className="card-advice" style={{width: '20rem', height: '18rem' }}>
              <Link to = "ContractingAdvicePage">
                <Card.Img variant="top" src="advicecontracting.jpg" />
                <Card.Body>
                  <Card.Title>Why Contracting Roles are Overtaking Permanent Positions</Card.Title>
                </Card.Body>
                </Link>
              </Card>         
            </CardDeck>
          </div>
        </section>

        {/* Recommended Videos */}
        <section className="page-section" style={{ backgroundColor: "#252628" }}> 
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Recommended Videos</h2>
              </div>
            </div>
            <div className="row">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/acijNEErf-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>

     
      </div>
    );
}

export default Homepage