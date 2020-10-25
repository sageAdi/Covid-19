import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Navigation.css'

const Navigation = () => (
   <div>
      <Navbar className='navbar' expand='md' variant='dark'>
         <Navbar.Brand href='#home' className='nav-brand'>
            Covid-19
         </Navbar.Brand>
         <Navbar.Toggle aria-controls='basic-navbar-nav' />
         <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
               <Nav.Link href='#home' active>
                  Home
               </Nav.Link>
               <Nav.Link href='#about'>About</Nav.Link>
               <Nav.Link href='#updates'>Updates</Nav.Link>
               <Nav.Link href='#sysmptoms'>Sysmptoms</Nav.Link>
               <Nav.Link href='#precation'>Precation</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   </div>
)
export default Navigation
