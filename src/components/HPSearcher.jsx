import { useEffect } from "react";
import './Card.css'
import './HPSearcher.css'


const HPSearcher = ({onChange, changeHouse, changeAncestry, search, filteredHouse, filteredAncestry, changeAZ, isAZ}) => {
    const noRefresh = (e) => {
        e.preventDefault();
    }
    
    const Houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    const Ancestries = ["pure-blood", "half-blood", "muggleborn"];
    

    const Reset = () => {changeHouse(""); changeAncestry(""); onChange(""); changeAZ(false); }


    return(
    <div className="HPSearcher">
    {/* TITULO */}
        <h2>Which Harry Potter character are you looking for?</h2>

    {/* SELECCIÓN CASAS */}
    <div className="houses">
        {Houses.map((house, index) => (
            <label  key={index} >
                <input 
                    type="radio" 
                    name="house" 
                    value={house}
                    checked={filteredHouse === house}
                    onChange={(e) => changeHouse(e.target.value)}
                />
                <span>{house}</span>
            </label>))} 
        
            </div>
    {/* SELECCIÓN ANCESTRY */}
    <div className="ancestryResetButtton">
        <label className="ancestry">
            <span>Ancestry</span>
            <select 
                value={filteredAncestry}
                onChange={(e) => changeAncestry(e.target.value)}> Ancestry
                    <option value="">All</option>
                    {Ancestries.map ((ancestry, index) => (<option key={index}  value={ancestry} >{ancestry} </option> ))}
            </select> <br />
        </label>
        
        {/* RESET BUTTON */}
        <button onClick={Reset} >reset</button>  
    </div>
    
    {/* SELECT ALFABETICO */}
    <label name="" id="">
        <input type="checkbox" checked={isAZ}
            onChange={(e) => changeAZ(e.target.checked)}
            />
        <span>A/Z</span>
    </label>

    {/* BUSCADOR PERSONAJE */}
        <form className="buscador" onSubmit={noRefresh}>
            <input 
                type="text" 
                placeholder="Choose character"
                value={search}
                onChange={(e) => onChange(e.target.value)}
                
                /> <br />
            <button >Send</button>
        </form>
      
    </div>
   
    )
}

export default HPSearcher;