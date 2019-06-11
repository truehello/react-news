import React from 'react';
import { useSpring, animated , config } from 'react-spring';

import DarkModeToggle from './DarkModeToggle';

const Header = () => {

    const fadeIn = useSpring({
        from: {
            opacity: 0         
        },
        to: {
            opacity: 1
        },
        config: config.gentle
    });


    return(
    <nav className="nav">
        {/* <div className="nav-container"> */}
            <animated.div className="brand" style={fadeIn}>
            
                <h1 id="logo-text">Extra Extra Read All About It</h1>
            
            </animated.div>
            
            <div className="links">
            
                <animated.div className="cta" style={fadeIn}>
                    <DarkModeToggle  /> 
                </animated.div>    

            </div>
        {/* </div> */}
    </nav>
    )

};
  
  export default Header;