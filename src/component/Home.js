import React from 'react'
import Dashboard from './Dashboard'
import Hero from './Hero'
import Updates from './Updates'
import About from './About'
import Symptoms from './Symptoms'
import Prevention from './Prevention'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Home() {
   return (
      <div id='home'>
         <Navigation />
         <Hero />
         <Dashboard />
         <Updates />
         <About />
         <Symptoms />
         <Prevention />
         <Footer />
      </div>
   )
}
