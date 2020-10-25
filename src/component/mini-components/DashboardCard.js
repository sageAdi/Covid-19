import React from 'react'
import './DashboardCard.css'
import { Card} from 'react-bootstrap'

export default function DashboardCard(props) {
   return (
      <div>
         <Card className='dashboard-card'>
            <Card.Body className='card-body'>
               <Card.Title className='card-title'>{props.title}</Card.Title>
               <Card.Text className='card-text'>{props.number}</Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}
