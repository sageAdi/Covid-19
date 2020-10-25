import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import CoronaDetails from './CoronaDetails'

function SelectCountry() {
   const [countries, setCountries] = useState([])
   const [selectedCountry, setSelectedCountry] = useState('')

   const selectCountry = (event) => {
      setSelectedCountry(event.target.value)
   }
   useEffect(() => {
      axios
         .get('https://corona.lmao.ninja/v2/countries?sort=country')
         .then((res) => {
            setCountries(res.data)
         })
         .catch((err) => {
            console.log(err + ' err')
         })
   }, [])
   return (
      <div>
         <Form onChange={selectCountry} className='form'>
            <Form.Group controlId='exampleForm.SelectCustom'>
               <Form.Label>Select Country</Form.Label>
               <Form.Control as='select' custom>
                  <option>Select Country</option>
                  {countries.map((el) => (
                     <option
                        key={el.country}
                        value={el.country}
                        onSelect={selectCountry}
                     >
                        {el.country}
                     </option>
                  ))}
               </Form.Control>
            </Form.Group>
         </Form>
         {selectedCountry?<CoronaDetails country={selectedCountry} countryList={countries}/>:<div></div>}
      </div>
   )
}
export default SelectCountry
