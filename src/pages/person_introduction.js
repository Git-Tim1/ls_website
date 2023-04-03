import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PersonIntroduction = () => {
    let navigate = useNavigate()
    let { personID } = useParams()
    return (
        <div className='w-full h-full inline-block min-h-[calc(100vh-208px)] mt-4'>
            <img src={'https://www.ls-bawu.de/Bilder/JanPhilipp.jpeg'} className='
            sm:hidden md:block
            aspect-4/3 sm:aspect-3/4 
            md:w-[36%] lg:w-2/5
            object-cover float-left' />
            <div className='w-full md:w-[62%] lg:w-[58%] float-right '>
                <h2 className='font-bold leading-5 text-[17px] 2xs:text-lg xs:text-xl text-magenta mt-3 xs:mt-2 sm:mt-0'>Landesvorsitzender</h2>

                <h1 className='font-black xxs:font-extrabold text-2xl 3xs:text-3xl'>Jan-Philipp Lenhardt</h1>

                <img src={'https://www.ls-bawu.de/Bilder/JanPhilipp.jpeg'} className='
                        hidden sm:block md:hidden
                        aspect-3/4 object-cover
                        w-1/3 float-right ml-4
                    ' />

                <p className='xxs:text-lg text-base mt-1 sm:mt-2 whitespace-pre-line sm:text-justify w-full'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
  )
}

export default PersonIntroduction