import React from 'react'
import './PreventionCard.css'
import { Card } from 'react-bootstrap'

export default function PreventionCard(props) {
   return (
      <div className='prevention-card'>
         <Card className='preventionCard'>
            <Card.Img variant='top' src={props.image} className='card-img'/>
            <Card.Body className='preventionCard-body'>
               <Card.Title className='preventionCard-title'>
                  {props.prevention}
               </Card.Title>
               <Card.Text className='preventionCard-description'>
                  {props.description}
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}
