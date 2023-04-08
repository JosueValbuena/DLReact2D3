import React, { useContext, useState } from 'react'
import MyContext from '../context/MyContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { data, setData } = useContext(MyContext);
  const [pokemons, setpokemons] = useState("");
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/pokemons/${pokemons}`)
  };


  return (
    <div>
      <div>Selecciona un Pokemon</div>
      <select onChange={(e) => setpokemons(e.target.value)}>
        <option disabled selected>Seleccionar</option>
        {data.map(ele =>
          <option value={ele.name} key={ele.name}>{ele.name}</option>)}
      </select>
      <button onClick={handleClick}>Ver detalles</button>
    </div>
  )
}

export default Home