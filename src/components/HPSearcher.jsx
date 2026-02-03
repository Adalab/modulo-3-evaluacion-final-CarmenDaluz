import { useEffect } from "react";


const HPSearcher = () => {
    const noRefresh = (e) => {
        e.preventDefault();
    }

    const filterApi = () => { 
        
        console.log('Travesura realizada')};
        
    /*const sendInputValue = (ev) => {
        props.updateEmail(ev.target.value);
    };*/
    

    return(
        <>
            <h2>¿Qué personaje de Harry Potter buscas?</h2>
            <form onSubmit={noRefresh}>
                <input 
                    type="text" 
                    placeholder="Escribe personaje"
                    required
                    id="fullfillInput"
                    
                    /> <br />
                <button onClick= {filterApi}>Enviar</button>
            </form>
       
        
            
                
        </>
   
    )
}

export default HPSearcher;