import './Nav.css';
import SearchBar from './SearchBar';

export default function Nav({onSearch}){

    return(
        <nav className='Nav'>
            
            <div className='sBar'>
                <SearchBar onSearch = {onSearch}/>
            </div>
        </nav>
    )
}