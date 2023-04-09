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

  return (
    <>

      {loader ?
        <div><p>loader</p></div> :
        <div className='pokemon_stats_container'>
          <div className='pokemon_stats_img'>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div>
            <h2>{pokemon.species.name.charAt(0).toUpperCase()+pokemon.species.name.slice(1)}</h2>
            <ul className='pokemon_stats_list'>
              <li>{pokemon.stats[0].stat.name.charAt(0).toUpperCase()+pokemon.stats[0].stat.name.slice(1)}: {pokemon.stats[0].base_stat}</li>
              <li>{pokemon.stats[1].stat.name.charAt(0).toUpperCase()+pokemon.stats[1].stat.name.slice(1)}: {pokemon.stats[1].base_stat}</li>
              <li>{pokemon.stats[2].stat.name.charAt(0).toUpperCase()+pokemon.stats[2].stat.name.slice(1)}: {pokemon.stats[2].base_stat}</li>
              <li>{pokemon.stats[3].stat.name.charAt(0).toUpperCase()+pokemon.stats[3].stat.name.slice(1)}: {pokemon.stats[3].base_stat}</li>
              <li>{pokemon.stats[4].stat.name.charAt(0).toUpperCase()+pokemon.stats[4].stat.name.slice(1)}: {pokemon.stats[4].base_stat}</li>
              <li>{pokemon.stats[5].stat.name.charAt(0).toUpperCase()+pokemon.stats[5].stat.name.slice(1)}: {pokemon.stats[5].base_stat}</li>
              <li>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase()+pokemon.types[0].type.name.slice(1)}</li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default Pokemons