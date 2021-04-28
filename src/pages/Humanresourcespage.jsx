/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const HumanResourcesPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Human Recources</h2>
            <h3 className="section-subheading text-center">Now in 2021, a strong focus remains on retaining talent and it is more important than ever to have the right HR team in place to ensure business growth through the retention of talent. Further growth in this sector will result in opportunities from HR Administration right up to HR Director level.</h3>
            <h3 className="text-center">Overview</h3>
            <p>As COVID-19 continues to impact the global workforce, HR leaders are rethinking their workforce management approach to prepare for the coming year. Over the past year HR departments have had to navigate an onslaught of new challenges for employees while also hiring and onboarding new team members remotely to follow social distancing guidelines.</p>
            <p>As businesses continue to adapt to the new normal, existing employees will need more support than ever before. Many employees are navigating remote work for the first time and have to deal with new challenges like loneliness or balancing work with other at-home responsibilities. In 2021, HR departments will need to develop long-term strategies for providing employees with mental health resources. Those strategies will then likely stay at the forefront of the recruiting process and become a key selling point for attracting new hires.</p>
            <p>As with other sectors, many HR roles in 2020 were on a contract basis which was predominantly down to the uncertainty of the pandemic. Undoubtedly, 2020 resulted in a year where companies decided to defer some recruitment due to this unknown and it has resulted in the need for reviewing possible restructuring within companies.</p>
            <br></br>
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
                  <td>Recruitment Consultant</td>
                  <td>Matrix Recruitment</td>
                  <td>Remote</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/recruitment-consultant-fully-remote-220421/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>HR Administrator</td>
                  <td>Not Disclosed</td>
                  <td>Cavan, Longford, Meath, Monaghan</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/hr-administrator-916865/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>HR Officer</td>
                  <td>Not Disclosed</td>
                  <td>Offaly, Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/hr-officer-916967/" target="_blank">Click here to apply</Button></td>
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

export default HumanResourcesPage