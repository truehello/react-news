import React from 'react'
import { distanceInWordsToNow } from 'date-fns';
import { useSpring, animated , config } from 'react-spring';
import Img from 'react-image';
import Loader from './Loader'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const NewsCard = ({ item }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
 

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

        <animated.a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        >

        <animated.li className="card" style={fadeIn}>
            <div className="card-left">
                <h1>{item.title}</h1>
                <h2 className="byline">{item.source.name}</h2>
                <h2 className="byline date">{distanceInWordsToNow(item.publishedAt,{includeSeconds: true})} ago</h2>

                <p>{item.content}...</p>
            </div>

            <animated.div className="card-right" style={fadeIn} >
                <Img src={item.urlToImage} loader={<Loader />} alt={item.title} />

            </animated.div>
        </animated.li>

        </animated.a>
    )    
}

export default NewsCard



 