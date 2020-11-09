import React, { useState } from 'react'
import './Navigation.css'

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
      <>
         <nav
            className={
               nav
                  ? 'navbar navbar-expand-lg fixed-top navbar-active'
                  : 'navbar navbar-expand-lg  fixed-top'
            }
         >
            <a className='navbar-brand' href='#home'>
               Covid-19
            </a>
            <button
               className='navbar-toggler'
               type='button'
               data-toggle='collapse'
               data-target='#navbarSupportedContent'
               aria-controls='navbarSupportedContent'
               aria-expanded='false'
               aria-label='Toggle navigation'
            >
               <span className='navbar-toggler-icon'></span>
            </button>

            <div
               className='collapse navbar-collapse'
               id='navbarSupportedContent'
            >
               <ul className='navbar-nav ml-auto'>
                  <li className='nav-item active'>
                     <a className='nav-link' href='#home'>
                        Home <span className='sr-only'>(current)</span>
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a className='nav-link' href='#updates'>
                        Updates
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a className='nav-link' href='#about'>
                        About
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a className='nav-link' href='#symptoms'>
                        Symptoms
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a className='nav-link' href='#prevention'>
                        Prevention
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
}
export default Navigation
