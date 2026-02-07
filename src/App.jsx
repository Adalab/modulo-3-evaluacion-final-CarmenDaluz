
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


import './App.css'
import './components/Preview.css'

import HPSearcher from './components/HPSearcher'
import Preview from './components/Preview.jsx'
import DetailsCard from "./components/DetailsCard";
import callToApi from "./services/api.js";



function App() {

    const [harryPotterdata, setHarryPotterData] = useState([]);
    const [search, setSearch] = useState("")
    const [filteredHouse, setFilteredHouse] = useState("");
    const [filteredAncestry, setFilteredAncestry] = useState("");
    const [isAZ, setIsAZ] = useState(false);

    useEffect(() => {
      
      callToApi().then((response) => {
        setHarryPotterData(response);
      });
    
    }, []);

    
    const filteredCharacters = 
    harryPotterdata.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()) 
        && (filteredHouse === "" || character.house=== filteredHouse) 
        && ((filteredAncestry === "" || character.ancestry === filteredAncestry))
      );


    const finalCharacters = isAZ 
      ? [...filteredCharacters].sort((a,b) => a.name.localeCompare(b.name))
      : filteredCharacters;

   

  return (
    
     <Routes>

      {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <h1>I solemnly swear that I am up to no good...</h1>
                <HPSearcher 
                  onChange={setSearch} 
                  changeHouse={setFilteredHouse} 
                  changeAncestry={setFilteredAncestry}
                  search={search}
                  changeAZ={setIsAZ}
                  filteredHouse={filteredHouse}
                  filteredAncestry={filteredAncestry}
                  isAZ={isAZ}
                />
                <Preview harryPotterdata={finalCharacters}/>
              </>}
          />

      {/* DETAIL */}
          <Route
            path="/CardDetail/:name"
            element={<DetailsCard harryPotterdata={harryPotterdata}
            
            />}
          />

    </Routes>
  );
}

export default App;
