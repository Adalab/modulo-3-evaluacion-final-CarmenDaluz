import './Card.css'

const Card = ({id, name, imageUrl, house, specie, alive}) => {
    return <div className='hpCard' >
        <h2>{name}</h2>
        <img src={imageUrl} style={{"width": "100px"}}></img>
        <div className='cardText'> 
            <p>{house}</p>
            <p>{specie}</p>
            <p>{alive}</p>
        </div>
    </div>

}

export default Card;