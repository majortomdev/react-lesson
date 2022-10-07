import React, { useState } from 'react'
import './SearchBar.css'

const products = [
    "sellotape",
    "glue",
    "plasticine",
    "wire",
    "paste"
]

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldShowClearButton = searchValue.length > 0

    return (
    <div>
        <input type='text' value={searchValue} onChange={handleInputChange}/>
        {shouldShowClearButton && <button onClick={handleClearClick}>clear</button> }
        <ul>
            {products.map((product) => {
            return<li key={product}>{product}</li>
        })}
        </ul>

        
    </div>
    )
}

export default SearchBar