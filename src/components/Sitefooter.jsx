import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'


const SiteFooter = () => { 
return (
    <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Developed by Steven McKeown</span>
              </div>
              <div className="col-md-4">
                <h4>Useful Links</h4>
                <ul className="list-inline quicklinks">
                  <li>
                    <a href="https://www.linkedin.com/jobs/search/?f_C=1337%2C2587638%2C39939%2C290903%2C9202023%2C2561065&geoId=104738515&location=Ireland" target="_blank" rel="noreferrer">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://ie.indeed.com/" target="_blank" rel="noreferrer">Indeed.ie</a>
                  </li>
                  <li>
                    <a href="https://www.jobs.ie/" target="_blank" rel="noreferrer">Jobs.ie</a>
                  </li>
                  <li>
                    <a href="https://www.irishjobs.ie/" target="_blank" rel="noreferrer">Irish Jobs</a>
                  </li>
                  <li>
                    <a href="https://gradireland.com/" target="_blank" rel="noreferrer">GradIreland</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
    )
}

export default SiteFooter;