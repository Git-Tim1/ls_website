import React from 'react'

export const Devide = ({w}) => {
  return (
    <div className={w + ` h-2 mt-3 md:mt-4 mx-auto`}><div className='w-3/5 3xs:w-4/5 xs:w-full mx-auto h-4/5 xs:h-full bg-magenta rounded' ></div></div>
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