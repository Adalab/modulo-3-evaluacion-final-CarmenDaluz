
import { useEffect, useState } from "react";
import './App.css'
import './components/style.css'
import HPSearcher from './components/HPSearcher'
import callToApi from "./services/api.js";
import Card from './components/Card.jsx'
import Preview from './components/Preview.jsx'


function App() {

    const [harryPotterdata, setHarryPotterData] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
      
      callToApi().then((response) => {
        setHarryPotterData(response);
      });
    
    }, []);

    const filteredCharacters = harryPotterdata.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
    );
  

  return (
    <>
    
      <h1>Juro solemnemente que esto es una travesura...</h1>
      <HPSearcher onChange={setSearch} ></HPSearcher>
    
      <Preview 
        harryPotterdata={filteredCharacters}
        
      ></Preview>
    </>
  )
}

export default App
