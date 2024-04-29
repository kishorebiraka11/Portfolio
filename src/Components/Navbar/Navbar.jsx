import React from 'react'

import './Navbar.css'



const navbarListItems = [
  {
    id: 1,
    text: "Home",

  },
  {
    id: 2,
    text: "Services",

  },
  {
    id: 3,
    text: "Experience",

  }, {
    id: 4,
    text: "Portfolio",

  }, {
    id: 5,
    text: "Testimonials",

  },
]

const Navbar = () => {
  return (
    <div className="n-wrapper">

      <div className="n-left">

        <div className='n-name'>
          Kishore

        </div>

        <span>Toggle</span>

      </div>

      <div className='n-right'>

        <div className='n-list'>
          <ul>{

            navbarListItems?.map((each, index) => (

              <li key={`navbar-list-${index}`}>{each?.text}</li>

            ))

          }

          </ul>

        </div>

        <button className='button n-button'>Contact</button>



      </div>



    </div>
  )
}

export default Navbar