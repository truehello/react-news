import React from 'react'

const Sidebar = ({ setCategory, toggleMenu, isExpanded }) => {

  function handleClick(newCategory) {
    setCategory(newCategory);
    toggleMenu(!isExpanded);
   }

    return(
        <div>
            <ul className="category__nav flex flex-col lg:flex-row">
            <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("general")} >General</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("business")} >Business</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("entertainment")} >Entertainment</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("health")} >Health</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("science")} >Science</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("sports")} >Sports</button>
              <button className="lg:mx-2 p-2 text-left text-lg rounded hover:bg-gray-500" onClick={() => handleClick("technology")} >Technology</button>
            </ul>
          </div>
    )

}

export default Sidebar