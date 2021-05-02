/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const EngineeringPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#252628" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">Engineering</h2>
            <h3 className="section-subheading text-center">The growing emphasis on automating processes and embracing Lean Manufacturing means that Engineers with the right skills, experience, and qualifications are in high demand in the market at present.</h3>
            <h3 className="text-center">Overview</h3>
            <p>In 2021, we expect to see a continued demand for Engineering professionals in Ireland, with an increased focus on sustainability as companies focus more and more on energy-related projects. The growing emphasis on automating processes and embracing Lean Manufacturing means that Engineers with the right skills, experience, and qualifications are in high demand in the market at present.</p>
            <p>Throughout 2020, we identified stark differences in salary ranges and packages offered within different industries such as Pharmaceutical, Medical Devices and Food. These salary ranges vary again even further according to the location. Dublin still triumphs with the highest salaries available but with the cost of living and availability of housing being so challenging, many candidates are willing to take a slightly lower salary for a better way of living away from Dublin. Counties that are benefiting from this are Galway, Mayo, Sligo, Westmeath, Limerick, Cork, Waterford, Wexford and Tipperary.</p>
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
                  <td>Quality Systems Engineer</td>
                  <td>Not Disclosed</td>
                  <td>Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/quality-systems-engineer-916971/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>Civil Engineer</td>
                  <td>Not Disclosed</td>
                  <td>Carlow, Kilkenny, Laois, Tipperary</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/civil-engineer-916999/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>CNC Applications Engineer</td>
                  <td>Not Disclosed</td>
                  <td>Carlow</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/cnc-applications-engineer-916953/" target="_blank">Click here to apply</Button></td>
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

export default EngineeringPage