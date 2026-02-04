
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css'
import './components/style.css'

import HPSearcher from './components/HPSearcher'
import Preview from './components/Preview.jsx'
import DetailsCard from "./components/DetailsCard";
import callToApi from "./services/api.js";



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
    
     <Routes>

      {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <h1>Juro solemnemente que esto es una travesura...</h1>
                <HPSearcher onChange={setSearch} />
                <Preview harryPotterdata={filteredCharacters} />
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
