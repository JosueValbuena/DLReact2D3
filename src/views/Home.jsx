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
    <div className='home_container'>
      <div className='home_container_img'><img src="./assets/img/pokemon-logo.png" alt="" /></div>
      <div>Selecciona un Pokemon</div>
      <select defaultValue={"default"} onChange={(e) => setpokemons(e.target.value)}>
        <option value="default" disabled>Seleccionar</option>
        {data.map((ele, index) =>
          <option value={ele.name} key={index}>{ele.name}</option>)}
      </select>
      <button disabled={!pokemons} onClick={handleClick}>Ver detalles</button>
    </div>
  )
}

export default Home