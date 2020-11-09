import React from 'react'
import { useState } from 'react'
import co from '../../images/contaminated-objects.svg'
import hc from '../../images/human-contact.svg'
import sg from '../../images/social-gathering.svg'
import './Spread.css'

const Spread = () => {
   const pic_text = [
      'It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads.',
      'COVID-19 is thought to spread mainly through close contact from person-to-person in respiratory droplets from someone who is infected. People who are infected with coronavirus often have symptoms of illness.',
      'If an infected person coughs or sneezes their droplets can infect people nearby. That’s why it’s important to avoid close contact with others. Understand that people may be infected and have only to no symptoms at all.',
   ]
   const [activeCotaminated, setActiveContaminated] = useState(false)
   const [activeHumanContact, setActiveHumanConatact] = useState(true)
   const [activeSocialGathering, setActiveSocialGathering] = useState(false)
   const handleContaminatedHoverOn = () => {
      setActiveContaminated(true)
      setActiveHumanConatact(false)
      setActiveSocialGathering(false)
   }
   // const handleContaminatedHoverOff = () => {
   //    setActiveContaminated(false)
   // }
   const handleHumanConatctHoverOn = () => {
      setActiveHumanConatact(true)
      setActiveContaminated(false)
      setActiveSocialGathering(false)
   }
   // const handleHumanConatctHoverOff = () => {
   //    setActiveHumanConatact(false)
   // }
   const handleSocialGatheringHoverOn = () => {
      setActiveSocialGathering(true)
      setActiveContaminated(false)
      setActiveHumanConatact(false)
   }
   // const handleSocialGatheringHoverOff = () => {
   //    setActiveSocialGathering(false)
   // }
   return (
      <div className='spread-section'>
         <p className='spread-title'>HOW DOES CORONA VIRUS SPREAD?</p>
         <p className='spread-text'>HOW IT SPREADS</p>
         <div className='row'>
            <div className='col-md-7'>
               <img src={activeCotaminated?co:activeHumanContact?hc:sg} alt='pic' className='spread-pic' />
               <p className='spread-pic-text'>
                  {activeCotaminated
                     ? pic_text[0]
                     : activeHumanContact
                     ? pic_text[1]
                     : pic_text[2]}
               </p>
            </div>
            <div className='col-md-5'>
               <div
                  className={
                     activeCotaminated
                        ? 'spread-reason-box active'
                        : 'spread-reason-box inactive'
                  }
                  onMouseEnter={handleContaminatedHoverOn}
                  onMouseLeave={handleHumanConatctHoverOn}
               >
                  <p className='spread-reason-text'>Contaminated Object</p>
               </div>
               <div
                  className={
                     activeHumanContact
                        ? 'spread-reason-box active'
                        : 'spread-reason-box inactive'
                  }
                  onMouseEnter={handleHumanConatctHoverOn}
               >
                  <p className='spread-reason-text'>Human Contact</p>
               </div>
               <div
                  className={
                     activeSocialGathering
                        ? 'spread-reason-box active'
                        : 'spread-reason-box inactive'
                  }
                  onMouseEnter={handleSocialGatheringHoverOn}
                  onMouseLeave={handleHumanConatctHoverOn}
               >
                  <p className='spread-reason-text'>Social Gathering</p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Spread
