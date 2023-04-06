import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const navActive = ({isActive}) => isActive ? "active" : {}; 

  return (
    <div className='navbar'>
        <p>POKEMON</p>
        <div>
            <NavLink className={navActive} to="/">Home</NavLink>
            <NavLink className={navActive} to="/pokemons">Pokemons</NavLink>
        </div>
    </div>
  )
}

export default NavBar