
import { useEffect, useState } from "react";
import './App.css'
import './components/style.css'
import HPSearcher from './components/HPSearcher'
import callToApi from "./services/api.js";
import Card from './components/Card.jsx'


function App() {

    const [harryPotterdata, setHarryPotterData] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
      
      callToApi().then((response) => {
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
                <Card 
                  name={character.name} 
                  imageUrl={character.image ? character.image : "./public/witch.png"} 
                  house={character.house ? character.house : "NO KNOWN"}
                  specie={character.species}
                  alive={character.alive === true ? "ALIVE" :"DEAD"}>

                </Card>
              
              </li>))}
      </ul> 
    </>
  )
}

export default App
