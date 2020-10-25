import React from 'react'
import { Card, Button } from 'react-bootstrap'

function CoronaDetails(props) {
   const countryDetails = props.countryList.filter((data)=> data.country===props.country)
   return (
      <Card style={{ width: '18rem' }}>
         <Card.Body>
            <Card.Title>{props.country}</Card.Title>
            <Card.Text>
               {countryDetails[0].deaths}
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
         </Card.Body>
      </Card>
   )
}

export default CoronaDetails
