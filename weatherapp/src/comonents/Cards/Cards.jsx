import './Cards.css';
import Card from '../Card/Card.jsx'

export default function Cards({cities, onClose}){


    return(
        <div className='cards'>
            {cities.map(city => <Card
                key={city.id}
                id={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                onClose={() => onClose(city.id)}
                />
            )}
        </div>
    )
}