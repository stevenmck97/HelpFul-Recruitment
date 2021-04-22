import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import './assets/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Homepage from './pages/Homepage'
// import Aboutpage from './pages/Aboutpage'
// import Advicepage from './pages/Advicepage'
// import Careerspage from './pages/Careerspage'
import CovidAdvicePage from './pages/Covidadvicepage'
import FinanceAdvicePage from './pages/Financeadvicepage'
import ContractingAdvicePage from './pages/Contractingadvicepage'
import SiteHeader from './components/Siteheader'

// import advicepage1 from './pages/advicepage1'

function App() {
  
  return (
    <BrowserRouter> 
    <SiteHeader/>
    <Switch> 
      <Route exact path = "/" component={Homepage}/>
      {/* <Route exact path = "/Advicepage" component={Advicepage}/> 
      <Route exact path = "/Careerspage" component={Careerspage}/> 
      <Route exact path = "/Aboutpage" component={Aboutpage}/>  */}
      <Route exact path = "/CovidAdvicePage" component={CovidAdvicePage}/>   
      <Route exact path = "/FinanceAdvicePage" component={FinanceAdvicePage}/> 
      <Route exact path = "/ContractingAdvicePage" component={ContractingAdvicePage}/>
    </Switch>
    </BrowserRouter>
  
  )
}

export default App;