import Card from './Card.jsx'
import { Link } from "react-router-dom";

import './Preview.css'
import './mediaQueries.css'


const Preview = ({harryPotterdata, search}) => {
    
    return(
    <>
        
            {harryPotterdata.length === 0 
            ? (<p>No characters match your search.</p>)
            : ( 
            <ul className='cardListGrid mediaQcards' >
                {harryPotterdata.map((character, index) => ( 
                <li key={index} >
                    <Link to={`/CardDetail/${character.name.replaceAll(" ", "")}`}>
                        
                        <Card
                        className={character.house.toLowerCase() || 'none'} 
                        name={character.name} 
                        imageUrl={character.image ? character.image : "./wizard.png"} 
                        house={character.house ? character.house : "NO KNOWN"}
                        specie={character.species}
                        />
                    </Link>
                </li>))}
            </ul> )}
        
    </>
    );
}

export default Preview;