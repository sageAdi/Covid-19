import React from 'react'
import Table from 'react-bootstrap/Table'

const TableContent = (props) => {
   return (
      <Table responsive bordered hover>
         <thead>
            <tr>
               <th>Country</th>
               <th>Total Cases</th>
               <th>Active</th>
               <th>Discharge</th>
               <th>Deaths</th>
               <th>Today Active</th>
               <th>Today Deaths</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>India</td>
               <td>999999</td>
               <td>23973</td>
               <td>1234</td>
               <td>12</td>
               <td>12</td>
               <td>0</td>
            </tr>
         </tbody>
      </Table>
   )
}
export default TableContent
