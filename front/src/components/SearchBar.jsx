const SearchBar = ({ onSearch }) => {
   return(
      <div>
         <input type='search' />
         <button onClick={() => onSearch('id: 1')}>Add Card</button>
      </div>
   )
}

export default SearchBar