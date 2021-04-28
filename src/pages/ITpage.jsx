/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ITPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">IT</h2>
            <h3 className="section-subheading text-center">The pace of change in the IT landscape is only looking to accelerate as we continue into 2021. Some of the transformational trends to expect this year are cloud computing, hyper-convergence, artificial intelligence, and the Internet of Things.</h3>
            <h3 className="text-center">Overview</h3>
            <p>The pace of change in the IT landscape is only looking to accelerate as we continue into 2021. Some of the transformational trends to expect this year are cloud computing, hyper-convergence, artificial intelligence, and the Internet of Things. Other emerging IT trends ahead in 2021 revolve around the move to online/digital business models, such as high-speed 5G connectivity, the evolution of the cloud, data center, mobility, networking and security. All will continue to develop before our eyes in 2021 as technical talent pave the way for future, digitalised business strategies.</p>
            <p>This year we expect to see a continued demand for IT candidates in Ireland, ranging from junior to senior level. The IT market has become increasingly candidate-driven, with fears that the growing skills shortage across Europe will impact the speed at which technological developments can be made by organisations. The numbers of professionals migrating to Ireland will continue to remain steady in 2021 and may even see a large increase as Brexit becomes a reality.</p>
            <p>The majority of IT and technology-led organisations in Ireland see AI as posing the biggest skills shortage over the next 12-24 months. We have also seen an increase in demand for experienced Network Engineers and System Administrators across the country. We have seen a high demand for programming languages Python, Java, Javascript and C++.  Salaries and benefit packages are steadily increasing across the board as the demand for high calibre IT candidates intensifies.</p>
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
                  <td>IT Support</td>
                  <td>Not Disclosed</td>
                  <td>Westmeath</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/it-support-916934/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>ICT & Database Manager</td>
                  <td>Not Disclosed</td>
                  <td>Kilkenny, Tipperary, Waterford</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/ict-database-manager-916965/" target="_blank">Click here to apply</Button></td>
                </tr>
                <tr>
                  <td>IT Manager</td>
                  <td>Not Disclosed</td>
                  <td>Dublin South, Wicklow</td>
                  <td><Button variant="primary" href="https://matrixrecruitment.ie/job/it-manager-916928/" target="_blank">Click here to apply</Button></td>
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

export default ITPage