import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { LoadingText } from './article_side'

import { PositionContext } from '../context'
import Footer from '../components/footer'

const PositionSide = ({ footer }) => {
    let navigate = useNavigate()
    let { positionID } = useParams()
    const position_data = useContext(PositionContext)

    const [loading, setLoading] = useState(true) 
    const [characterOver35, setCharacter] = useState(false)
    const [id, setID] = useState(0)

    useEffect(() => {
        document.title = "Artikel - Liberale Schüler BaWü"
        window.scrollTo(0, 0)

        let newID = positionID.split("&")[1]
        setID(parseInt(newID))
  
        footer()
    }, []);

    useEffect(() => {
        if (position_data.length > 0) {
            setLoading(false); 
            if (position_data[id].topic.length > 35) {
                console.log("true")
                setCharacter(true)
            }
        }
    }, [position_data])

    return (
        <div>
          {loading ?
          <div className='fixed flex w-full -z-20 left-0 top-[5.5rem] h-52 3xs:h-64 xs:h-80 md:h-96 bg-magenta opacity-10'>
            <div className='loader z-20'></div>
          </div> :
          <div className='fixed w-full h-52 3xs:h-64 xs:h-80 md:h-96 left-0 top-[5.5rem] overflow-hidden'>
            <img className='w-full h-full -z-20 object-cover duration-200' src={position_data[id].picture} />
          </div>}
          <div className='absolute left-0 w-full z-10 mt-36 3xs:mt-48 xs:mt-60 md:mt-80 duration-200'>
            <div className='inline-block w-full'><div className='mx-auto max-w-[60rem] w-[90%] block'>
                {!loading && <h1 className={`bg-magenta px-2 sm:px-3 py-1 text-white float-left font-extrabold  ${characterOver35 ? 'md:text-2xl xxs:text-2xl text-xl' : 'text-xl xs:text-2xl md:text-[27px]'} mx-auto`}>{position_data[id].topic}</h1>}
            </div>
            </div>
            <div className='bg-white pt-3 mt-2'>
                <div className='mx-auto max-w-[60rem] w-[90%]'>
                {!loading ?
                <div>
                    <p className='default-text pb-12 whitespace-pre-line'>
                    {position_data[id].content}
                    </p>
                </div> :
                <div>
                    <div className='mt-5'>
                        <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
                        <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" />
                        <LoadingText x="left-[30%]" y="left-[45%]" z="left-[60%]" />
                        <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" />
                        <LoadingText x="left-[22%]" y="left-[66%]" z="left-[88%]" />
                        <LoadingText x="left-[11%]" y="left-[55%]" z="left-[78%]" />
                        <LoadingText x="left-[17%]" y="left-[47%]" z="left-[85%]" />
                    </div>


                </div>
                }
                </div>
                
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default PositionSide