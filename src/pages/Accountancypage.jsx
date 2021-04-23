/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
// import logo from './logo.svg';
// import Portfolio from './components/Portfolio'
import '../App.css';
import '../assets/css/bootstrap.min.css'


const AccountancyPage = () => {
  return (
    <section className="page-section">
      <div className="container" style={{ backgroundColor: "#242424" }}>
        <div className="row">
          <div className="col-lg-12 text-left">
            <h2 className="section-heading text-uppercase text-center">COVID and Careers Insight 2021</h2>
            <h3 className="section-subheading text-center">The following article was written by Laura Keane at Matrix Recruitment</h3>
            <p>In addition to business owner, other dream jobs included scientist, doctor, vet, nurse, interior designer, accountant, artist, social care worker, engineer, journalist, blogger and IT consultant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountancyPage