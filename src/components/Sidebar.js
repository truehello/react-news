import React from 'react'

const Sidebar = ({ setCategory }) => {


    return(
        <div>
            <ul className="category__nav flex flex-col lg:flex-row">
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("business")} >Business</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("entertainment")} >Entertainment</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("general")} >General</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("health")} >Health</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("science")} >Science</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("sports")} >Sports</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => setCategory("technology")} >Technology</button>
            </ul>
          </div>
    )

}

export default Sidebar