import './DetailsCard.css'
import { useParams } from "react-router-dom";

const DetailsCard = ({harryPotterdata}) => {
    const {name} = useParams();
    
    const character = harryPotterdata.find(c => c.name === name);
    

    return <>
        <div className={`detailsCard ${character.house?.toLowerCase() || 'none'}`} >
            <h2>{character.name}</h2>
            <img src={character.image ? character.image : "./public/witch.png"}></img>
            <div > 
                <p>{character.house ? character.house : "NO KNOWN"}</p>
                <p>{character.species}</p>
                <p>{character.alive=== true ? "ALIVE" : "DEAD"}</p>
            </div>
        </div>
    </>
}

export default DetailsCard;