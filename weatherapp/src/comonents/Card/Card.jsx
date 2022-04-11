import './Card.css'

export default function Card({name,min,max,img,onClose}){
    
    return(
        <div className='card'>
            <button className='bot' onClick={onClose}> x </button>
            <div className='comps'>
                <h2 className='name'>{name}</h2>
                <div className='temps'>
                    <h3 className='tempmin'>temp min: {min}°</h3>
                    <h3 className='tempmax'>temp max: {max}°</h3>
                </div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt="" />
            </div>
        </div>
    )
}