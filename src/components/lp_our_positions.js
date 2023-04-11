import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PositionView from './position_view'
import { PositionContext } from '../context'


const LP_OurPositions = () => {
    const position_data = useContext(PositionContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (position_data[0] !== " "){setLoading(false)}
    }, [position_data])
    

    return (
    <>
        <div className='mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
            {!loading ? <>{position_data.map((data, index) => {
                return((index<4) &&<PositionView key={index} topic={data.topic} image={data.picture} link={"/position/" + data.topic.replace(" ", "-") + "&" + index} lp={true} />)
            })}</> : 
            <>
            <div className='relative bg-[#f6f7f8] flex w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 rounded shadow-sm shadow-zinc-300'>
                <div className='loader z-20'></div>
            </div>
            <div className='relative bg-[#f6f7f8] flex w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 rounded shadow-sm shadow-zinc-300'>
                <div className='loader z-20'></div>
            </div>
            <div className='relative bg-[#f6f7f8] flex w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 rounded shadow-sm shadow-zinc-300'>
                <div className='loader z-20'></div>
            </div>
            <div className='relative bg-[#f6f7f8] flex md:hidden w-auto h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 rounded shadow-sm shadow-zinc-300'>
                <div className='loader z-20'></div>
            </div>
            </>
            }
        </div>
        <div className='text-l sm:text-xl font-bold my-2 sm:my-3 flex justify-center bg-white z-3'><Link to="/positionen" >Alle Positionen anzeigen ></Link></div>
    </>
  )
}

export default LP_OurPositions