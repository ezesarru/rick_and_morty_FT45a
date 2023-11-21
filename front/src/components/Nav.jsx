import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'

const Nav = ({ onSearch, logOut }) => {

    const randomCard = () => {
        onSearch(Math.floor(Math.random() * 826))
    }

    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={randomCard}>Random Card!</button>
            <Link to='/about' >
                <button>About</button>
            </Link>
            <Link to='/home' >
                <button>Home</button>
            </Link>
            <Link to='/favorites' >
                <button>Favorites</button>
            </Link>
            <Link to='/' >
                <button onClick={logOut} >Log Out</button>
            </Link>
        </div>
    )
}

export default Nav