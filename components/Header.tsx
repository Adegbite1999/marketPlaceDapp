import React from 'react';
import {navLink} from "../static/data";


function Header() {
  return (
    // <header>
      <nav className='bg-purple-500 flex justify-between p-4'>
        <ul className="flex space-x-12 items-center">
          {navLink.map((nav, idx) =>{
            return(
              <li  className='text-white capitalize' key={idx} ><a href={nav.link}>{nav.value}</a></li>
            )
          })}
        </ul>
        <div>
          <button  className='text-white border-2 p-2 bg-transparent pl-4 pr-4'>Connect Wallet</button>
        </div>
      </nav>
    // </header>
  )
}

export default Header