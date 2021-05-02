/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const FinancialServicesPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#252628" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Financial Services</h2>
            <h3 className="section-subheading text-center">As we enter 2021, banks, credit unions and other financial organisations must rethink the definition of 'digital banking,' with the application of data analytics, technology, innovation and people that will transform customer experiences.</h3>
            <h3 className="text-center">Overview</h3>
            <p>When the pandemic hit, most financial institutions entered a crisis mode of building digital capabilities that allowed consumers to bank without branches. As we enter 2021, banks, credit unions and other financial organisations must rethink the definition of ‘digital banking,’ with the application of data analytics, technology, innovation and people that will transform customer experiences.</p>
            <p>In a recent survey from the Association of Compliance Officers of Ireland (ACOI), 64% of respondents believe that firms in the financial services sector will recruit in 2021, while more than half say they have not had to implement pay cuts and are not expecting to experience any in the near future.</p>
            <p>With so many businesses and consumers relying on online transactions, the rise of financial technology has accelerated since the pandemic began. As remote operations stay in place for many companies and consumers adapt to—and embrace—technology to simplify their financial transactions, the growth in fintech is a trend that can be expected to continue. 2021 trends reveal the undeniable link between recovering from COVID-19’s impact and transforming financial service operations to power success in the years ahead.</p>
             <br></br>
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
                  <td>Senior Compliance Consultant</td>
                  <td>Not Disclosed</td>
                  <td>Dublin</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/senior-compliance-consultant-916981/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Finance Client Service Representative</td>
                  <td>Not Disclosed</td>
                  <td>Limerick</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/finance-client-service-representative-916948/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Senior Oversight Analyst</td>
                  <td>Not Disclosed</td>
                  <td>Remote</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/senior-oversight-analyst-916924/" target="_blank">Click here to apply</Button></td>
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

export default FinancialServicesPage