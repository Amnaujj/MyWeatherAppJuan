import React , { useState } from 'react';

import './App.css';
import Nav from './comonents/Nav/Nav';
import Cards from './comonents/Cards/Cards';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(old => old.filter(c => c.id !== id));
  }

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(i => i.json())
    .then((info) => {
        if(info.main !== undefined){
          const city = {
            min : Math.round(info.main.temp_min),
            max : Math.round(info.main.temp_min),
            img: info.weather[0].icon,
            id: info.id,
            wind: info.wind.speed,
            temp: info.main.temp,
            name: info.name,
            weather: info.weather[0].main,
            clouds: info.clouds.all,
            latitud: info.coord.lat,
            longitud: info.coord.lon
          };
          setCities( old => [...old, city] );
        } else { alert("ciudad no encontrada") }
    })
  }

  return (
    <div className="App">
      <Nav onSearch = {onSearch}/>
      <Cards cities = {cities} onClose={onClose}/>
    </div>
  );
}

export default App;
