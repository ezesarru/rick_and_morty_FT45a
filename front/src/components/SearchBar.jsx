import React from 'react'

const SearchBar = ({ onSearch }) => {

   const [id, setId] = React.useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return(
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Add Card</button>
      </div>
   )
}

export default SearchBar