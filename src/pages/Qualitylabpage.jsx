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
            <h3 className="text-center">Overview</h3>
            <p>Throughout 2020, we have seen significant growth in this sector mainly due to company expansions, investments, and the ever-evolving COVID-19 vaccine journey.  COVID-19 has affected and will continue to affect, the Pharmaceutical industry in Ireland in a number of ways throughout 2021. One such change will be encouraging more collaboration between organisations for the greater good. Cross-industry and cross-enterprise collaboration in areas such as research and development is highly common,  as we all tackle a global pandemic. This will result in candidates having to be open to contract work as they may be required to work on projects continuously.</p>
            <p>This year, we have seen an increase in demand for experienced Quality Engineers and Qualified Persons across the country with a focus on the Midlands and West of Ireland. Salaries and benefit packages are steadily increasing across the board as the demand for high calibre candidates intensifies. Many candidates are choosing to leave Dublin due to the cost of living and availability of housing. Companies outside of the capital have recognised this trend and are increasing their packages in order to attract this sought after talent.</p>
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