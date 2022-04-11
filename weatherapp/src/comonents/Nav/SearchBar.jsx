import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({onSearch}){

    const[city,setCity]= useState("")

    return(
        <form onSubmit={(e) => {e.preventDefault(); onSearch(city)}}>
            <input className='barra' type="text" placeholder="ciudad" value={city} onChange={e => setCity(e.target.value)}/>
            <input  className='boton' type="submit" value="buscar"/>
        </form>
    )
}