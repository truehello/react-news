import React, {useState } from 'react'

import Header from './Header'
import NewsController from './NewsController'


const App = () => {

  
    const [category, setCategory] = useState("general");
    const [country, setCountry] = useState("us");

    return (
      
      <>
        <Header setCategory={setCategory} setCountry={setCountry} country={country} />

        <main>     
            {/* <Sidebar setCategory={setCategory} /> */}
            <NewsController query={category} country={country} />
         
        </main>
      </>
    )
}


export default App

