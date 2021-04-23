import React from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

const Homepage = () => { 
    return(
        <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Helpful Recruitment</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
          <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">Career Sectors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">Jobseekers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">Advice and News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
  
  
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Helpful Recruitment!</div>
              <div className="intro-heading text-uppercase">This sucks!</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">About Us</a>
            </div>
          </div>
        </header>
  
  
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Jobseekers</h2>
                <h3 className="section-subheading text-muted">Helpful Recruitment aims to keep jobseekers informed about the latest developments in the Recruitment landscape, with tips and tricks, career sectors information, and more!</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Career Sectors</h4>
                <p className="text-muted">We have a number of career sectors which will inform you all you need to know!</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Advice and News</h4>
                <p className="text-muted">Keep up to date with the latest developments in the Recruitment industry with our frequent updates with News and Advice!</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Forum</h4>
                <p className="text-muted">Feel free to join our discussion forum and converse with other users about anything recruitment related!</p>
              </div>
            </div>
          </div>
        </section>
  
  
        <section className="bg-light page-section" id="careers">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Career Sectors</h2>
                <h3 className="section-subheading text-muted">Below is a list of career sectors which we provide information on.</h3>
              </div>
            </div>
            <CardDeck>
              <Card>
                <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1453916.jpg" />
                <Card.Body>
                  <Card.Title>Accountancy</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://www.hrmagazine.co.uk/media/fhjgrhus/article-images-2f107217-2fpublic-sector.jpg?anchor=center&mode=crop&width=1002&height=564&bgcolor=White&rnd=132555437236770000" />
                <Card.Body>
                  <Card.Title>Public Sector</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://www.nttdata.com/au/en/-/media/nttdataapac/ndau/industries/banking-and-financial-services/banking-and-financial-services-header-2732x1536.jpg" />
                <Card.Body>
                  <Card.Title>Financial Services</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTkvMTEvMjEvMTIvMDYvMjcvMzIvc2h1dHRlcnN0b2NrXzE0OTg3NDI1MTkuanBnIl0sWyJwIiwidGh1bWIiLCI4MDB4NDUwIyJdXQ" />
                <Card.Body>
                  <Card.Title>Engineering</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://www.jpmorgan.com/content/dam/jpm/commercial-banking/insights/market-and-economy/callout-highs-lows-of-manufacturings-recovery.jpg" />
                <Card.Body>
                  <Card.Title>Manufacturing</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2020/10/Feature-image-top-ten-pharma-companies-in-2020.jpg" />
                <Card.Body>
                  <Card.Title>Quality and Laboratory</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://miuc.org/wp-content/uploads/2019/11/Supply-Chain-Management.jpg" />
                <Card.Body>
                  <Card.Title>Supply Chain</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://cdn.lynda.com/course/704123/704123-637491210983328614-16x9.jpg" />
                <Card.Body>
                  <Card.Title>Human Resources</Card.Title>
                </Card.Body>
                </Link>
              </Card>
              <Card>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://www.freestudy.com/wp-content/uploads/2019/08/Best-Free-Online-Information-Technology-Courses.jpg" />
                <Card.Body>
                  <Card.Title>IT</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            </CardDeck>
          </div>
        </section> 
  
         <section className="page-section" id="advice">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Advice and News</h2>
                <h3 className="section-subheading text-muted">Below is a list of recent articles with advice and news related to Recruitment!</h3>
              </div>
            </div>
            <CardDeck >
              <Card style={{ width: '20rem', height: '18rem' }}>
              <Link to = "CovidAdvicePage">
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/03/Copy-of-Dream-job-survey-image-350x200.jpg" />
                <Card.Body>
                  <Card.Title>COVID and Careers Insight 2021</Card.Title>
                </Card.Body>
                </Link>
              </Card>
             
              <Card style={{ width: '20rem', height: '18rem' }}>
              <Link to = "FinanceAdvicePage">
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/02/iStock-468044048-350x200.jpg" />
                <Card.Body>
                  <Card.Title>Financial Services 2021 Salary Guide</Card.Title>
                </Card.Body>
                </Link>
              </Card>
            
              <Card style={{width: '20rem', height: '18rem' }}>
              <Link to = "ContractingAdvicePage">
                <Card.Img variant="top" src="https://matrixrecruitment.ie/wp-content/uploads/2021/02/Contracting-Matrix-Recruitment-350x200.jpg" />
                <Card.Body>
                  <Card.Title>Why Contracting Roles are Overtaking Permanent Positions</Card.Title>
                </Card.Body>
                </Link>
              </Card>         
            </CardDeck>
          </div>
        </section>

        
        {/* <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                  <h4>Kay Garland</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                  <h4>Diana Pertersen</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
              </div>
            </div>
          </div>
        </section>
  
  
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
  
  
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
  
  
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Your Website 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#something">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
    
}

export default Homepage