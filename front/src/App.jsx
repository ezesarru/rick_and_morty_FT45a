import './App.css'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar'
import characters from './data'

const App = () => {
  return(
    <div>
      <SearchBar onSearch={(id) => alert(id)} />
      <Cards characters={characters} />
    </div>
  )
}

export default App
