import React from 'react'
import pic from '../human-contact.png'
import './Spread.css'

const Spread = () => {
   return (
      <div className='spread-section'>
         <p className='spread-title'>HOW DOES CORONA VIRUS SPREAD?</p>
         <p className='spread-text'>HOW IT SPREADS</p>
         <div className='row'>
            <div className='col-md-7'>
               <img src={pic} alt='pic' className='spread-pic'/>
               <p className='spread-pic-text'>
                  COVID-19 is thought to spread mainly through close contact
                  from person-to-person in respiratory droplets from someone who
                  is infected. People who are infected with coronavirus often
                  have symptoms of illness.
               </p>
            </div>
            <div className='col-md-5'>
                <div className='spread-reason-box inactive'>
                    <p>Contaminated Object</p>
                </div>
                <div className='spread-reason-box active'>
                    <p className='spread-reason-text'>Human Contact</p>
                </div>
                <div className='spread-reason-box inactive'>
                    <p>Social Gathering</p>
                </div>
            </div>
         </div>
      </div>
   )
}
export default Spread
