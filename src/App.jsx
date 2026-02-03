
import { useEffect, useState } from "react";
import './App.css'
import './components/style.css'
import HPSearcher from './components/HPSearcher'
import callToApi from "./services/api.js";


function App() {

    const [harryPotterdata, setHarryPotterData] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
      
      callToApi().then((response) => {
        console.log(response);
        setHarryPotterData(response);
      });
    
    }, []);

  return (
    <>
      <h1>Juro solemnemente que esto es una travesura...</h1>
      <HPSearcher ></HPSearcher>
      <ul>
        {harryPotterdata
        .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
        .map((character, id) => ( 
                <li key={id}>
                  {`${character.name} ${character.house ? character.house : "NO KNOWN"}  ${character.species}`} 
                  <img className="imageNoCharacter" src={character.image ? character.image : "./public/witch.png"} alt="foto personaje" /> 
                  {character.alive === true ? "ALIVE" :"DEAD"}
                </li>))}
      </ul> 
    </>
  )
}

export default App
