import Card from './Card.jsx'
import { Link } from "react-router-dom";


const Preview = ({harryPotterdata, filteredCharacters}) => {
    
    return(
    <>
        <ul className='cardListGrid'>
            {harryPotterdata
            .map((character, id) => ( 
                <li key={id} >
                    <Link to={`/CardDetail/${character.name}`}>
                        
                        <Card
                        className={character.house.toLowerCase() || 'none'} 
                        name={character.name} 
                        imageUrl={character.image ? character.image : "./public/witch.png"} 
                        house={character.house ? character.house : "NO KNOWN"}
                        specie={character.species}
                        />

                    </Link>

                </li>))}
        </ul> 
        
    </>);
}

export default Preview;