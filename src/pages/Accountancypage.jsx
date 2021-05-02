/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const AccountancyPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#252628" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Accountancy</h2>
            <h3 className="section-subheading text-center">The attraction for multinational companies to relocate to Ireland, in turn, means the demand for highly skilled accountancy professionals will continue into 2021 and beyond.</h3>
            <p></p>
            <Table>
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
                  <td>Accounts Payable</td>
                  <td>Not Disclosed</td>
                  <td>Wicklow, Carlow, Kildare</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/accounts-payable-contract-916972/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Financial Accountant</td>
                  <td>Not Disclosed</td>
                  <td>Galway, Laois, Meath, Offaly, Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/financial-accountant-immediate-start-916700/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Accounts Assistant</td>
                  <td>Not Disclosed</td>
                  <td>Offaly</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/accounts-payable-contract-916972/" target="_blank">Click here to apply</Button></td>
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

export default AccountancyPage