import React from 'react'
import './Prevention.css'
import PreventionCard from '../mini-components/PreventionCard'
import Cough from '../../images/cough.png'

export default function Prevention() {
   const prevention = [
      'Avoid Human Interaction',
      'Avoid Social Gatherings',
      'Maintain Social Distance',
   ]
   const description = [
      'COVID-19 is thought to spread mainly through close contact from person-to-person in respiratory droplets.',
      'If an infected person coughs or sneezes, their infected droplets can infect many people nearby.',
      'Regular handwashing is one of the best ways to remove germs, avoid getting sick, and prevent the spread.',
   ]
   return (
      <div className='prevention-section' id='prevention'>
         <div className='prevention-container'>
            <p className='prevention-title'>
               HOW TO PREVENT & CURE CORONA VIRUS?
            </p>
            <p className='prevention-text'>COVID-19 PREVENTIONS</p>
            <div className='prevention-dock'>
               <PreventionCard
                  image={Cough}
                  prevention={prevention[0]}
                  description={description[0]}
               />
               <PreventionCard
                  image={Cough}
                  prevention={prevention[1]}
                  description={description[1]}
               />
               <PreventionCard
                  image={Cough}
                  prevention={prevention[2]}
                  description={description[2]}
               />
            </div>
         </div>
      </div>
   )
}
