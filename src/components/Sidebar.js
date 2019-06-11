import React from 'react'

const Sidebar = ({ setCategory }) => {


    return(
        <div>
            <ul className="category__nav">
              <button onClick={() => setCategory("business")} >Business</button>
              <button onClick={() => setCategory("entertainment")} >Entertainment</button>
              <button onClick={() => setCategory("general")} >General</button>
              <button onClick={() => setCategory("health")} >Health</button>
              <button onClick={() => setCategory("science")} >Science</button>
              <button onClick={() => setCategory("sports")} >Sports</button>
              <button onClick={() => setCategory("technology")} >Technology</button>
            </ul>
          </div>
    )

}

export default Sidebar