import React from 'react'
import { Link } from 'react-router-dom'

const position_view = ({ topic, image, link }) => {
  return (
    <Link to={link}>
        <div className='relative w-auto h-auto group aspect-4/3 shadow-md shadow-zinc-300 overflow-hidden'>
            <img className='absolute object-cover w-full h-full group-hover:w-[110%] group-hover:h-[110%] duration-500' src={image}/>
            <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
            <h2 className='absolute z-3 text-white bottom-3 left-4 font-extrabold text-2xl max-w-[70%]'>{topic}</h2>
        </div>
    </Link>
  )
}

export default position_view