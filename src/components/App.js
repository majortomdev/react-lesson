import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App = () => {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((productsArray) => {
            const newProductsState = productsArray.map((product) => {
                return product.title
            })
            setProductsState(newProductsState)
    })
    },[])
  
    // useEffect(() => {//USE CASE 2
    //     setTimeout(() => {
    //         setProductsState([
    //             "sellotape",
    //             "glue",
    //             "plasticine",
    //             "wire",
    //             "paste",
    //             "glueball",
    //             "wirestrip"
    //         ])
    //     }, 2000)
    // }, [])
  
    const hasProducts = productsState.length>0

    return (
<>
        {/* <CountButton incrementBy={5} buttonColour="blue"/> */}

        {/* // <SearchBar /> // btw i could also send in the products to the searchbar as a prop
                    //which would enable me to have it working separately on another data set */}

        {hasProducts? <SearchBar products={productsState}/> : 'Loading Products'}
        

        {/* // <div>
        //     <CountButton incrementBy={1} buttonColour={"red"}/>
        //     <CountButton incrementBy={7} buttonColour={"blue"}/>
        //     <CountButton incrementBy={25} buttonColour={"green"}/>
        // </div> */}

        </>

     )
  
  }

  export default App