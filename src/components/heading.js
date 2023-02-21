import React from 'react'

const Heading = ({text, centered, background}) => {
  return (
    <div className={`w-full  mt-6  ${centered && 'flex justify-center'} `}>
        <h1 className={`font-black inline-block ${centered && 'text-center'} ${background ? 'bg-magenta text-white px-3 py-1 text-2xl' : 'text-2xl xxs:text-3xl md:text-4xl'}`}>{text}</h1>
        
    </div>

  )
}

export default Heading