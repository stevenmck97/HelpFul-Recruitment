import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import './assets/css/bootstrap.min.css'
import Homepage from './pages/Homepage'
import CovidAdvicePage from './pages/Covidadvicepage'
import FinanceAdvicePage from './pages/Financeadvicepage'
import ContractingAdvicePage from './pages/Contractingadvicepage'
import SiteHeader from './components/Siteheader'



function App() {
  
  return (
    <BrowserRouter> 
    <SiteHeader/>
    <Switch> 
      <Route exact path = "/" component={Homepage}/>
      <Route exact path = "/CovidAdvicePage" component={CovidAdvicePage}/>   
      <Route exact path = "/FinanceAdvicePage" component={FinanceAdvicePage}/> 
      <Route exact path = "/ContractingAdvicePage" component={ContractingAdvicePage}/>
    </Switch>
    </BrowserRouter>
  
  )
}

export default App;