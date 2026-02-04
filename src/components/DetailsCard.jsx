import './Card.css'

const DetailsCard = ({id, name, imageUrl, house, specie, alive, className}) => {
    return <>
        <div className={`hpCard ${className}`}>
            <h2>{name}</h2>
            <img src={imageUrl} style={{"width": "100px"}}></img>
            <div className='cardText'> 
                <p>{house}</p>
                <p>{specie}</p>
                <p>{alive}</p>
            </div>
        </div>
    </>
}

export default DetailsCard;