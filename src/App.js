import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './component/Dashboard'
import Hero from './component/Hero'
import AccordionDetails from './component/Updates'
import About from './component/About'
import Footer from './component/Footer'
import Spread from './component/Spread'
import Symptoms from './component/Symptoms'
import Prevention from './component/Prevention'

function App() {
   return (
      <div className='app'>
         <Hero/>
         <Dashboard/>
         <AccordionDetails/>
         <About/>
         <Spread/>
         <Symptoms/>
         <Prevention/>
         <Footer/>
      </div>
   )
}
export default App
