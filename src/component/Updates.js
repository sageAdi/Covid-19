import React from 'react'
import './Updates.css'
import UpdatesCard from './mini-components/UpdatesCard'

const AccordionDetails = () => {
   const option = [
      'Covid-19 Global Updates',
      'Covid-19 India Statewise Updates',
      'Covid-19 India Districtwise Updates',
   ]
   
   return (
      <div className='updates-section'>
         <p className='updates-title'>Updates of Covid-19</p>
         <UpdatesCard option={option[0]} optionKey='0'/>
         <UpdatesCard option={option[1]} optionKey='1'/>
         <UpdatesCard option={option[2]} optionKey='2'/>
      </div>
   )
}
export default AccordionDetails
