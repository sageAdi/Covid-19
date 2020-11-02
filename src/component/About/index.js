import React from 'react'
import './About.css'
import Spread from '../Spread'

export default function About() {
   return (
      <div className='about-section' id='about'>
         <div className='row'>
            <div className='col-md-6'>
               <p className='about-title'>About the Disease</p>
               <p className='about-text'>What is corona virus ?</p>
               <p className='about-paragraph'>
                  Coronaviruses are a type of virus. There are many different
                  kinds, and some cause disease. A newly identified type has
                  caused a recent outbreak of respiratory illness now called
                  COVID-19.
               </p>
            </div>
            <div className='col-md-6'>
                <div className='about-pic'></div>
            </div>
         </div>
         <Spread/>
      </div>
   )
}
