const Preview = (harryPotterdata) => {

    return(
    
        <ul>
            {harryPotterdata
            .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
            .map((character, id) => ( 
                <li key={id}>
                    <Card 
                    name={character.name} 
                    imageUrl={character.image ? character.image : "./public/witch.png"} 
                    house={character.house ? character.house : "NO KNOWN"}
                    specie={character.species}
                    alive={character.alive === true ? "ALIVE" :"DEAD"}>

                    </Card>
                
                </li>))}
        </ul> 
    )
}

export default Preview;