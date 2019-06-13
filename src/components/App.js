import React, {useState } from 'react'

import Header from './Header'
import NewsController from './NewsController'


const App = () => {

  
    const [category, setCategory] = useState("general");

    return (
      
      <>
        <Header setCategory={setCategory} />

        <main>     
            {/* <Sidebar setCategory={setCategory} /> */}
            <NewsController query={category} />
         
        </main>
      </>
    )
}


export default App

