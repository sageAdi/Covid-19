import React from 'react'
import './Hero.css'
import Button from 'react-bootstrap/Button'
import covid from '../../images/covid_logo-copy.png'

export default function Hero() {
   return (
      <div className='hero' >
         <div className='row'>
            <div className='col-md-6 hero-text'>
               <p className='medium-text text'>
                  ONE ENEMY, WHOLE WORLD IS FIGHTING WITH
               </p>
               <p className='large-text text'>COVID-19</p>
               <p className='paragraph text'>
                  The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
                  China in December 2019, the outbreak was later recognised as a
                  pandemic by the WHO.
               </p>
               <Button href='#dashboard' className='track-btn d-none d-md-flex'>Track Covid-19</Button>
            </div>
            <div className='col-md-6 hero-img'>
               <img src={covid} alt='covid-logo' className='hero-image img-fluid'/>
            </div>
         </div>
      </div>
   )
}
