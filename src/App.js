import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch } from 'react-router-dom'
import Updates from './component/Updates'
import About from './component/About'
import Symptoms from './component/Symptoms'
import Prevention from './component/Prevention'
import Home from './component/Home'
// import ScrollToTop from './component/ScrollToTop'

function App() {
   return (
      <div className='app'>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/updates' component={Updates} />
            <Route path='/about' component={About} />
            <Route path='/symptoms' component={Symptoms} />
            <Route path='/prevention' component={Prevention} />
         </Switch>
      </div>
   )
}
export default App
