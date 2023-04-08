import React from 'react'
import { Link } from 'react-router-dom'

const position_view = ({ topic, image, link, lp}) => {
  return (
    <Link to={link}>
        <div className={`relative w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 ${!lp && 'md:aspect-video'} rounded-sm shadow-md shadow-zinc-300 overflow-hidden`}>
            <img className='absolute object-cover w-full h-full group-hover:w-[110%] group-hover:h-[110%] duration-500' src={image}/>
            <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
            <h2 className='absolute z-3 text-white bottom-2 sm:bottom-3 md:bottom-2 lg:bottom-3 left-4 xs:left-3 sm:left-4 md:left-3 lg:left-4 font-extrabold text-xl 3xl:text-2xl xs:text-xl sm:text-2xl md:text-xl lg:text-2xl max-w-[70%]'>{topic}</h2>
        </div>
    </Link>
  )
}

export default position_view