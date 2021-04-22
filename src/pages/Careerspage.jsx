import React from 'react';
// import logo from './logo.svg';
// import Portfolio from '../components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

const Careerspage = () => { 
    return(
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Career Sectors</h2>
                <h3 className="section-subheading text-muted">Below is a list of career sectors which we provide information on.</h3>
              </div>
            </div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/businessman-working-on-a-project-picture-id1136948339-200x200.jpg" class="rounded-circle" style={{width:"200px"}}/>
                <Card.Body>
                  <Card.Title>Accountancy</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/03/iStock-1221364691-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Public Sector</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/trading-online-stocks-and-shares-picture-id936338796-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Financial Services</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/workers-and-manager-working-with-documents-picture-id1139489459-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Engineering</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/gears-or-cogwheels-picture-id904315536-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Manufacturing</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/researching-equipment-picture-id471521214-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Quality and Laboratory</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/stack-of-blue-containers-box-cargo-freight-ship-for-import-export-3d-picture-id1162163400-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Supply Chain</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2020/01/aerial-view-of-supported-hands-out-together-picture-id866059338-200x200.jpg" />
                <Card.Body>
                  <Card.Title>Human Resources</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/02/Contracting-Matrix-Recruitment-350x200.jpg" />
                <Card.Body>
                  <Card.Title>IT</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </section>

    )
}

export default Careerspage;