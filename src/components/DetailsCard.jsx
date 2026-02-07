import './DetailsCard.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsCard = ({harryPotterdata}) => {
    const {name} = useParams();
    
    const character = harryPotterdata.find(c => c.name.replaceAll(" ", "") === name);
    
if (!character) {return <h2>Tu búsqueda no coincide con ningún personaje</h2>
}
    return <>
        <div className={`detailsCard ${character.house?.toLowerCase() || 'none'}`} >
            <h2 className='textNameDetailCard '>{character.name}</h2>
            <div className='detailscardContainer'>
                <img className='wizardPhoto' src={character.image || "/wizard.png"}></img>
                <div className='cardDetaiText'> 
                    <p>House:  {character.house || "NO KNOWN"}</p>
                    <p>{character.species}</p>
                    <p>{character.alive=== true ? "ALIVE" : "DEAD"}</p>
                    <p>{character.gender}</p>
                    <p>Alternate names:</p>
                    <ul>
                        {character.alternate_names.length === 0
                        ? "Unknown"
                        : character.alternate_names.map((names, index) => (
                            <li key={index}>{names}</li> )) }
                    </ul>

                </div>
            </div>
        </div>
        <Link to="/">
            <button>Go Back</button>
        </Link>
    </>
}

export default DetailsCard;