import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemons = () => {

  const { pokemons } = useParams();
  const [pokemon, setPokemon] = useState({})
  const [loader, setLoader] = useState(true)

  const urlApi = "https://pokeapi.co/api/v2/pokemon/";

  const getDataPokemon = async () => {
    const res = await fetch(urlApi + pokemons)
    const dataRes = await res.json();
    setPokemon(dataRes);
    setLoader(false);
  }

  useEffect(() => {
    getDataPokemon()
    
  }, []);
  console.log("holaaa")
  return (
    <>

      {loader ?
        <div><p>loader</p></div> :
        <div>
          <div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div>
            <h2>{pokemon.species.name}</h2>
          </div>
        </div>
      }
    </>
  )
}

export default Pokemons