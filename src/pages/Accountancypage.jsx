/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const AccountancyPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Accountancy</h2>
            <h3 className="section-subheading text-center">The attraction for multinational companies to relocate to Ireland, in turn, means the demand for highly skilled accountancy professionals will continue into 2021 and beyond.</h3>
            <p></p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accounts Payable - Contract</td>
                  <td>Mark</td>
                  <td>Wicklow, Carlow, Kildare</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/accounts-payable-contract-916972/" target="_blank">Matrix Recruitment</Button></td>
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