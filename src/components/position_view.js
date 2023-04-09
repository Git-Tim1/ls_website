import React from 'react'
import { Link } from 'react-router-dom'

const position_view = ({ topic, image, link, lp}) => {
  return (
    <Link className={`relative  w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 ${!lp ? 'md:aspect-video' : 'last-of-type:md:hidden'} rounded-sm shadow-md shadow-zinc-300 overflow-hidden`} to={link}>
        <img className='absolute object-cover min-w-full min-h-full group-hover:min-w-[110%] group-hover:min-h-[110%] group-hover:left-[-5%] left-0 top-0 group-hover:top-[-5%] duration-500' src={image}/>
        <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
        <h2 className='absolute z-3 text-white bottom-2 sm:bottom-3 md:bottom-2 lg:bottom-3 left-4 xs:left-3 sm:left-4 md:left-3 lg:left-4 font-extrabold text-xl 3xl:text-2xl xs:text-xl sm:text-[22px] md:text-xl lg:text-2xl max-w-[70%]'>{topic}</h2>
    </Link>
  )
}

export default position_view