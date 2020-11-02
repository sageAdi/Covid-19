import React from 'react'
import './Symptoms.css'
import SymptomsCard from '../mini-components/SymptomsCard'
import cough from '../../images/cough.png'

const Symptoms = () => {
   const symptoms = [
      'Cough',
      'Fever',
      'Headache',
      'Sore Throath',
      'Shortness of Breath ',
   ]
   const description = [
      'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episod es in 24 hours (if you usually have a cough, it may be worse).',
      'High temperature – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is best to seek medical care early.',
      "A headache isn't a common symptom of the virus, but about 14% of people infected with corona have experienced it. It can be pretty intense in nature.",
      "A sore throat is one of the early, mild symptoms of coronavirus. If you suddenly develop a sore throat, it's best to self-isolate for 14 days as precaution.",
      'One of the symptoms of COVID-19 is shortness of breath. Shortness of breath is less common than fever and cough, but happens in about 30% of people.',
   ]
   return (
      <div className='symptoms-section' id='symptoms'>
         <div className='symptoms-title'>
            <p className='symptoms-title-1'>YOU MIGHT BE INFECTED?</p>
            <p className='symptoms-title-2'>KNOWN COVID-19 SYMPTOMS</p>
         </div>

         <div className='symptoms-body'>
            <SymptomsCard
               image={cough}
               symptom={symptoms[0]}
               description={description[0]}
               className='symptoms-body-card'
            />
            <SymptomsCard
               image={cough}
               symptom={symptoms[1]}
               description={description[1]}
               className='symptoms-body-card'
            />
            <SymptomsCard
               image={cough}
               symptom={symptoms[2]}
               description={description[2]}
               className='symptoms-body-card'
            />
            <SymptomsCard
               image={cough}
               symptom={symptoms[3]}
               description={description[3]}
               className='symptoms-body-card'
            />
            <SymptomsCard
               image={cough}
               symptom={symptoms[4]}
               description={description[4]}
               className='symptoms-body-card'
            />
         </div>
         {/* <div className='row'>
            <div className='col-md-3'>
               
            </div>
            <div className='col-md-9'>
               <SymptomsCard
                  image={cough}
                  symptom={symptoms[0]}
                  description={description[0]}
               />
               <SymptomsCard
                  image={cough}
                  symptom={symptoms[1]}
                  description={description[1]}
               />
               <SymptomsCard
                  image={cough}
                  symptom={symptoms[2]}
                  description={description[2]}
               />
               <SymptomsCard
                  image={cough}
                  symptom={symptoms[3]}
                  description={description[3]}
               />
               <SymptomsCard
                  image={cough}
                  symptom={symptoms[4]}
                  description={description[4]}
               />
            </div>
         </div> */}
      </div>
   )
}
export default Symptoms
