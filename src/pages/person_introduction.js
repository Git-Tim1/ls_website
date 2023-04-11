import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { VorstandContext } from '../context'
import Footer from '../components/footer'
import { LoadingText } from './article_side'


const PersonIntroduction = ({landscape, NoLandscape}) => {
    let navigate = useNavigate()
    let { vorstandID } = useParams()

    const [id, setID] = useState(0)
    const vorstandData = useContext(VorstandContext)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        document.title = "Landesvorstand - Liberale Schüler BaWü"
        window.scrollTo(0, 0)

        console.log(vorstandID)
        let newID = vorstandID.split("&")[1]
        setID(parseInt(newID))
    
        landscape()

        return() => {NoLandscape()}
    }, []);

    useEffect(() => {
      if (vorstandData[0] !== " "){setLoading(false)}
    }, [vorstandData])
    
    
    return (
        <div className='w-full inline-block mt-4 '>
            {!loading ? 
            <img src={vorstandData[id].image} className='
            fixed top-[5.5rem] left-0 landscape:relative landscape:top-0 h-[calc(100vh-5.5rem)] landscape:h-auto portait:w-full
            portrait:aspect-auto
            landscape:xs:aspect-4/3 landscape:sm:aspect-3/4 
            landscape:sm:w-[36%] landscape:lg:w-2/5 select-none
            object-cover float-left' /> : 
            <div className='fixed top-[5.5rem] left-0 landscape:relative landscape:top-0 h-[calc(100vh-5.5rem)] landscape:h-auto portait:w-full
            portrait:aspect-auto flex portrait:w-full
            landscape:xs:aspect-4/3 bg-gray-100 landscape:sm:aspect-3/4 
            landscape:sm:w-[36%] landscape:lg:w-2/5 select-none
            object-cover float-left'>
                <div className='loader'></div>
            </div>}
            <div className='absolute bottom-8 flex flex-col landscape:hidden portait:xs:hidden py-2'>
                {!loading ? 
                <><div className='w-full'><h2 className='bg-magenta text-white font-bold px-2 py-[2px] float-left'>{ vorstandData[id].role }</h2></div>
                <div className='w-full'><h1 className='font-extrabold text-2xl bg-white text-black px-2 py-1 float-left'>{ vorstandData[id].name }</h1></div></>
                : 
                <>
                    <div className='animation-magenta h-7 w-52'></div>
                    <div className='animation-darker h-9 w-80'></div>
                </>

            }
            </div>
            <div className='absolute bg-white portrait:w-full left-0 landscape:xs:relative top-[100vh] landscape:xs:top-0 landscape:w-full landscape:xs:w-[64%] landscape:lg:w-3/5 float-right pl-0 landscape:sm:px-4 landscape:md:px-5'>
                <div className='portrait:max-w-[60rem] portrait:w-[90%] mx-auto h-auto block'>
                {!loading ? <><h2 className='font-bold hidden landscape:xs:block leading-5 xs:text-xl text-magenta  mt-5 xxs:mt-3 xs:mt-2 sm:mt-0'>{vorstandData[id].role}</h2>
                    <h1 className='font-extrabold hidden landscape:xs:block 3xs:text-2xl sm:text-[27px]'>{vorstandData[id].name}</h1>
                    <p className='default-text float-left portrait:mt-5 mt-1 sm:mt-2 whitespace-pre-line md:text-justify w-full'>{vorstandData[id].introduction}</p>
                </> : 
                <>
                    <div className='animation h-7 w-52 rounded'></div>
                    <div className='animation mt-1 h-10 w-96 rounded'></div>
                    <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" />
                    <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" />
                    <div className='w-2/3'><LoadingText x="left-[20%]" y="left-[50%]" z="left-[70%]" /></div>
                    <div className='w-2/5'><LoadingText /></div>
                </>}
                </div>
                <Footer portrait={true} />
            </div>

        </div>
  )
}

export default PersonIntroduction