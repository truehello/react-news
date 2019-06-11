import React, {useState } from 'react'

import Header from './Header'
import NewsController from './NewsController'
import Sidebar from './Sidebar'

const App = () => {

  
    const [category, setCategory] = useState("general");

    return (
      
      <div className="container">
        <Header />

        <main>     
            <Sidebar setCategory={setCategory} />
            <NewsController query={category} />
         
        </main>
      </div>
    )
}


export default App

