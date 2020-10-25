import React, { useState } from 'react'
import './UpdatesCard.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import TableContent from '../TableContents'

export default function UpdatesCard(props) {
   const [details, setDetails] = useState({})
   const countrySelected = () => {
      setDetails({ name: 'Country' })
   }
   return (
      <div>
         <Accordion>
            <Card className='update-card'>
               <Accordion.Toggle
                  as={Card.Header}
                  eventKey={props.optionKey}
                  className='card-header'
                  onClick={countrySelected}
               >
                  {props.option}
               </Accordion.Toggle>
               <Accordion.Collapse eventKey={props.optionKey}>
                  <Card.Body>
                     <TableContent tableData={details} />
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      </div>
   )
}
