//import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
 import Slider from './Components/Slider'
 import ProductionHouse from './Components/PoductionHouse'
   import GenreMovieList from './Components/GenreMovieList'
//import MovieList from './Components/MovieList'




function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header/>

        <Slider/>
        
        <ProductionHouse/>

        <GenreMovieList/>
        
        
    </div>
  )
}

export default App
