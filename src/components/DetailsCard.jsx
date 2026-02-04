import './Card.css'
import { useParams } from "react-router-dom";

const DetailsCard = ({harryPotterdata}) => {
    const {name} = useParams();
    
    const character = harryPotterdata.find(c => c.name === name);
    if (!character) return <p>Cargando...</p>;
    


    return <>
        <div className={character.house.toLowerCase()} >
            <h2>{character.name}</h2>
            <img src={character.image ? character.image : "./public/witch.png"}></img>
            <div className='cardText'> 
                <p>{character.house ? character.house : "NO KNOWN"}</p>
                <p>{character.species}</p>
                <p>{character.alive=== true ? "ALIVE" : "DEAD"}</p>
            </div>
        </div>
    </>
}

export default DetailsCard;