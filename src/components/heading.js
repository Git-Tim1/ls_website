import React from 'react'

export const Devide = ({w}) => {
  return (
    <div className={w + ` h-2 bg-magenta mt-4 mx-auto rounded`}></div>
  )
}

const Heading = ({text, centered, background, mt="mt-6", devide=true, w="w-32"}) => {
  return (
    <>
      <div className={`w-full ${mt}  ${centered && 'flex justify-center '} `}>
          <h1 className={`font-black inline-block ${centered && 'text-center'} ${background ? 'bg-magenta text-white px-3 py-1 text-2xl' : 'text-2xl xxs:text-[27px] md:text-[33px]'}`}>{text}</h1>
      </div>
      {devide && <Devide w={w} />}
    </>

  )
}

export default Heading