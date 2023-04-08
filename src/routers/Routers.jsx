import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Pokemons from '../views/Pokemons'
import NotFound from '../views/NotFound'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons/:pokemons' element={<Pokemons />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Routers