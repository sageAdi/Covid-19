import React from 'react'
import './DashboardCard.css'
import { Card } from 'react-bootstrap'

export default function DashboardCard(props) {
   return (
      <>
         <Card className='dashboard-card'>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.number}</Card.Text>
            </Card.Body>
         </Card>
      </>
   )
}
