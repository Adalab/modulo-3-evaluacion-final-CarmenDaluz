import './Card.css'

const Card = ({id, name, imageUrl, house, specie, alive, className}) => {
    return <>
        <div className={`hpCard ${className}`}>
            <h2>{name}</h2>
            <img className='cardImg'src={imageUrl} ></img>
            <div className='cardText'> 
                <p>{house}</p>
                <p>{specie}</p>
                <p>{alive}</p>
            </div>
        </div>
    </>
}

export default Card;