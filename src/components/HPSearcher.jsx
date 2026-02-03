import { useEffect } from "react";


const HPSearcher = ({onChange}) => {
    const noRefresh = (e) => {
        e.preventDefault();
    }

    const filterApi = () => { 
        
        console.log('Travesura realizada')};
        

    return(
        <>
            <h2>¿Qué personaje de Harry Potter buscas?</h2>
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