/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const SupplyChainPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Supply Chain</h2>
            <h3 className="section-subheading text-center">With a current skills gap being faced by the industry, management and business leaders need to drive change through effective leadership, increased employee engagement and hands-on solutions to employee retention.</h3>
            <p></p>
            <Table striped bordered hover>
              <thead>
              <h3>Matrix Recruitment</h3>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supply Chain Business Analyst</td>
                  <td>Not Disclosed</td>
                  <td>Dublin, Galway, Offaly, Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/supply-chain-business-analyst-916985/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Supply Chain Controller</td>
                  <td>Not Disclosed</td>
                  <td>Waterford</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/supply-chain-controller-916932/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Logistics Co-Ordinator</td>
                  <td>Not Disclosed</td>
                  <td>Kildare, Meath, Offaly, Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/logistics-co-ordinator-916915/" target="_blank">Click here to apply</Button></td>
                </tr>
               <br></br>
                <h3>Indeed</h3>
                <tr>
                  <td>Client Services Executive</td>
                  <td>Accountant Online</td>
                  <td>Remote</td>
                  <td><Button variant="primary" href="https://ie.indeed.com/jobs?q=accountancy&l&advn=9942618280296645&vjk=5e9a1724f1f84832" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Bookkeeper / Accounts Assistant - Part Time</td>
                  <td>Sound Accounts Limited</td>
                  <td>Dublin</td>
                  <td><Button variant="primary" href="https://ie.indeed.com/jobs?q=accountancy&l&advn=7961159670409192&vjk=8647902d80b7f8e1" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Trainee Accountant</td>
                  <td>Zurich Insurance</td>
                  <td>Dublin</td>
                  <td><Button variant="primary" href="https://ie.indeed.com/jobs?q=accountancy&l&vjk=ac80c689a8cdabcb" target="_blank">Click here to apply</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupplyChainPage