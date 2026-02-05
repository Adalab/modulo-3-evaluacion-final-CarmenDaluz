import { useEffect } from "react";
import './Card.css'


const HPSearcher = ({onChange, changeHouse, filteredHouse}) => {
    const noRefresh = (e) => {
        e.preventDefault();
    }

    
    
    const Houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    return(
        <>
            <h2>¿Qué personaje de Harry Potter buscas?</h2>
            {Houses.map((house, index) => (
                <label key={index} >
                    <input 
                        type="radio" 
                        name="house" 
                        value={house} 
                        onChange={(e) => changeHouse(e.target.value)}
                    
                    />
                    <span>{house}</span>
                
                </label>))} 
            
            <button onClick={() => changeHouse("")}>reset</button>    
            
            <form onSubmit={noRefresh}>
                <input 
                    type="text" 
                    placeholder="Escribe personaje"
                    required
                    id="fullfillInput"
                    onChange={(e) => onChange(e.target.value)}
                    
                    /> <br />
                <button >Enviar</button>
            </form>
       
        
            
                
        </>
   
    )
}

export default HPSearcher;