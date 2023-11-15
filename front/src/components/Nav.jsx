import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'

const Nav = ({ onSearch }) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(Math.floor(Math.random() * 826))}>Random Card!</button>
            <Link to='/about' >
                <button>About</button>
            </Link>
            <Link to='/' >
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Nav