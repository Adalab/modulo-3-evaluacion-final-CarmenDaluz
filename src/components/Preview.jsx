import Card from './Card.jsx'

const Preview = ({harryPotterdata}) => {

    return(
    
        <ul className='cardListGrid'>
            {harryPotterdata
            .map((character, id) => ( 
                <li key={id} >
                    <Card
                    className={character.house.toLowerCase()} 
                    name={character.name} 
                    imageUrl={character.image ? character.image : "./public/witch.png"} 
                    house={character.house ? character.house : "NO KNOWN"}
                    specie={character.species}
                    
                    //alive={character.alive === true ? "ALIVE" :"DEAD"}
                    >
                    
                    </Card>
                
                </li>))}
        </ul> 
    )
}

export default Preview;