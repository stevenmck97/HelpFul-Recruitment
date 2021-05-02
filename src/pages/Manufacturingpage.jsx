/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ManufacturingPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#252628" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Manufacturing</h2>
            <h3 className="section-subheading text-center">With all 10 of the top 10 global pharmaceutical companies now based in Ireland, they are all competing intensely for highly experienced and skilled staff. As such, salaries and benefits on offer will reflect this as employers race to find and keep high calibre employees.</h3>
            <h3 className="text-center">Overview</h3>
            <p>In January 2020, the global manufacturing sector expanded at its fastest pace in nine months. Business optimism was at its highest level in more than a year. By May, the world had become a very different place. The COVID-19 pandemic caused turmoil across the sector, with operations being shut down across the globe. Manufacturers are at a continued risk of disruption, with ongoing volatility in costs, government policies, and the impacts of the pandemic. Amid the uncertainty, however, the Irish manufacturing sector has remained highly resilient.</p>
            <p>Salaries in the Manufacturing sector are likely to see relatively small increases in 2021, mainly due to the competitive global trading conditions and the uncertainty of Brexit. The growing emphasis and focus on automating processes and embracing Lean Manufacturing means that those with the right skills, experience and qualifications are highly sought after at the moment.</p>
            
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
                  <td>Maintenance Fitter</td>
                  <td>Not Disclosed</td>
                  <td>Carlow, Kilkenny, Wexford, Wicklow</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/maintenance-fitter-916840/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Materials Handler/Warehouse Operator</td>
                  <td>Not Disclosed</td>
                  <td>Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/materials-handler-warehouse-operator-916333/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Production Supervisor</td>
                  <td>Not Disclosed</td>
                  <td>Cork</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/production-supervisor-cork-916980/" target="_blank">Click here to apply</Button></td>
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

export default ManufacturingPage