import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const searchValue = 'the search value'

    const handleInputChange = (event) => {
        alert(event.target.value)//will print out the new value......
    }


    return (
    <div>
        <input type='text' value={searchValue} onChange={handleInputChange}/>
    </div>
    )
}

export default SearchBar