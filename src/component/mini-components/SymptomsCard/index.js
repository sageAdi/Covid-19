import React from 'react'
import { Card } from 'react-bootstrap'
import './SymptomsCard.css'

export default function SymptomsCard(props) {
   return (
      <>
         <Card className='symptomCard'>
            <Card.Img
               variant='top'
               src={props.image}
            />
            <Card.Body>
               <Card.Title>
                  {props.symptom}
               </Card.Title>
               <Card.Text>
                  {props.description}
               </Card.Text>
            </Card.Body>
         </Card>
      </>
   )
}
