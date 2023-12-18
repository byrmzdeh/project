import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../sass/header.scss'

const Header = () => {
  return (
    <div className='header'>
      <h1>Exclusive</h1>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/sign'>Sign Up</NavLink>
      </ul>
      <div className='icon'>
        <div className="input">
          <input type="text" placeholder='What are you looking for ?' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  )
}

export default Header
