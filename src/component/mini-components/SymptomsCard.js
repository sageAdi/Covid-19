import React from 'react'
import { Card } from 'react-bootstrap'
import './SymptomsCard.css'

export default function SymptomsCard(props) {
   return (
      <div>
         <Card className='symptomCard'>
            <div className='row no-gutters'>
               <div className='col-md-2'>
                  <Card.Img variant='top' src={props.image} />
               </div>
               <div className='col-md'>
                  <Card.Body className='symptomCard-body'>
                     <Card.Title className='symptomCard-title'>{props.symptom}</Card.Title>
                     <Card.Text className='symptomCard-description'>{props.description}</Card.Text>
                  </Card.Body>
               </div>
            </div>
         </Card>
      </div>
   )
}
