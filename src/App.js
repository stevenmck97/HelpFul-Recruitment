import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import './assets/css/bootstrap.min.css'

import Homepage from './pages/Homepage'

import CovidAdvicePage from './pages/Covidadvicepage'
import FinanceAdvicePage from './pages/Financeadvicepage'
import ContractingAdvicePage from './pages/Contractingadvicepage'

import AccountancyPage from './pages/Accountancypage' 
import EngineeringPage from './pages/Engineeringpage' 
import FinancialServicesPage from './pages/Financialservicespage'
import HumanResourcesPage from './pages/Humanresourcespage'
import ITPage from './pages/ITpage'
import ManufacturingPage from './pages/Manufacturingpage'
import PublicSectorPage from './pages/Publicsectorpage'
import QualityLabPage from './pages/Qualitylabpage'
import SupplyChainPage from './pages/Supplychainpage'

import LiveChatApp from './pages/LiveChatPage'
import SiteHeader from './components/Siteheader'



function App() {
  
  return (
    <BrowserRouter> 
    <SiteHeader/>
    <Switch> 
      <Route exact path = "/" component={Homepage}/>
      <Route exact path = "/LiveChat" component={LiveChatApp}/>
      <Route exact path = "/CovidAdvicePage" component={CovidAdvicePage}/>   
      <Route exact path = "/FinanceAdvicePage" component={FinanceAdvicePage}/> 
      <Route exact path = "/ContractingAdvicePage" component={ContractingAdvicePage}/>
      <Route exact path = "/AccountancyPage" component={AccountancyPage}/>
      <Route exact path = "/EngineeringPage" component={EngineeringPage}/>
      <Route exact path = "/FinancialServicesPage" component={FinancialServicesPage}/>
      <Route exact path = "/HumanResourcesPage" component={HumanResourcesPage}/>
      <Route exact path = "/ITPage" component={ITPage}/>
      <Route exact path = "/ManufacturingPage" component={ManufacturingPage}/>
      <Route exact path = "/PublicSectorPage" component={PublicSectorPage}/>
      <Route exact path = "/QualityLabPage" component={QualityLabPage}/>
      <Route exact path = "/SupplyChainPage" component={SupplyChainPage}/>
    </Switch>
    </BrowserRouter>
  
  )
}

export default App;