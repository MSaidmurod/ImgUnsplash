import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import DropDown from './DropDown'

function Header() {
  return (
    <div className='max-w-7xl max-lg:px-10 mx-auto flex  items-center my-6 justify-between'>
        <h1 className='font-bold max-md:text-2xl text-4xl select-none'>Unsplash</h1>
        <div>
          <div className='hidden max-md:block'><DropDown/></div>
            <div className='max-md:hidden flex gap-4'>
            <NavLink to='/' className='font-bold text-md '>Home</NavLink>
            <NavLink to='/about' className='font-bold text-md '>About</NavLink>
            <NavLink to='/contact' className='font-bold text-md '>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header