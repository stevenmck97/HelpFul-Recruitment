/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const QualityLabPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Quality & Laboratory</h2>
            <h3 className="section-subheading text-center">COVID-19 has affected and will continue to affect, the Pharmaceutical industry in Ireland in a number of ways throughout 2021. One such change will be encouraging more collaboration between organisations for the greater good.</h3>
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
                  <td>Quality Systems Engineer</td>
                  <td>Not Disclosed</td>
                  <td>Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/quality-systems-engineer-916971/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Technical Quality Manager</td>
                  <td>Not Disclosed</td>
                  <td>Cavan, Meath, Roscommon, Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/technical-quality-manager-jftm04/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Medical Writer/Clinical Affairs Specialist</td>
                  <td>Not Disclosed</td>
                  <td>Remote</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/medical-writer-clinical-affairs-specialist-916773-2/" target="_blank">Click here to apply</Button></td>
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

export default QualityLabPage