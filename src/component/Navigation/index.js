import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'
import { Link } from 'react-scroll'

const Navigation = () => {
   const [nav, setNav] = useState(false)
   const changeBackground = () => {
      if (window.scrollY > 80) {
         setNav(true)
      } else {
         setNav(false)
      }
   }
   window.addEventListener('scroll', changeBackground)
   return (
      <div>
         <Navbar
            className={nav ? 'navbar navbar-active' : 'navbar'}
            expand='md'
            variant='dark'
            fixed='top'
         >
            <Link to='home' active smooth={true} duration={500}>
               <Navbar.Brand href='home' className='nav-brand'>
                  Covid-19
               </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
               <Nav className='ml-auto'>
                  <Nav.Item>
                     <Link to='home' active smooth={true} duration={500}>
                        <Nav.Link>Home</Nav.Link>
                     </Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Link
                        to='updates'
                        smooth={true}
                        duration={500}
                        offset={-80}
                     >
                        <Nav.Link>Updates</Nav.Link>
                     </Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Link to='about' smooth={true} duration={500} offset={-80}>
                        <Nav.Link>About</Nav.Link>
                     </Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Link
                        to='symptoms'
                        smooth={true}
                        duration={500}
                        offset={-80}
                     >
                        <Nav.Link>Sysmptoms</Nav.Link>
                     </Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Link
                        to='prevention'
                        smooth={true}
                        duration={500}
                        offset={-80}
                     >
                        <Nav.Link>Prevention</Nav.Link>
                     </Link>
                  </Nav.Item>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}
export default Navigation
