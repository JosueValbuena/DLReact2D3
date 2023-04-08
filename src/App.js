import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './routers/NavBar';
import Routers from './routers/Routers';
import MyContext from './context/MyContext';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const urlPokeApi = "https://pokeapi.co/api/v2/pokemon/?limit=99&offset=0"

  const getData = async () => {
    const res = await fetch(urlPokeApi);
    const dataRes = await res.json();
    setData(dataRes.results);
  }

  const sharedData = { data, setData };

  return (
    <div className="App">
      <MyContext.Provider value={sharedData}>
        <NavBar />
        <Routers />
      </MyContext.Provider>
    </div>
  );
}

export default App;
