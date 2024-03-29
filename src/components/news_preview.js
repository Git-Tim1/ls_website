import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../context'
import { Link } from 'react-router-dom'
import ShowMoreCurves from '../files/showMoreCurves'

const NewsPreview = () => {
    const articleData = useContext(DataContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(articleData[0] != ''){
            setLoading(false)
        }
    }, [articleData])


    return (
    <>
        <div className='relative mt-5 inline-block w-full'>
            <Link to={"/neuigkeiten/" + articleData[0].id} className='relative  w-full sm:w-[49.9%] md:w-[66.5%] float-left group aspect-4/3 xs:aspect-video sm:aspect-2/3 md:aspect-4/3 rounded-sm overflow-hidden shaxow-xl sm:shadow-2xl shadow-zinc-400'>
                {!loading ? <><img 
                    className='absolute group-hover:min-w-[106%] group-hover:min-h-[106%] group-hover:left-[-3%] group-hover:top-[-3%] left-0 top-0 min-w-full min-h-full duration-500 overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                    src={"https://api.wrire.com" + articleData[0].thumbnail}
                />
                <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-0'></div>
                <h1 className='absolute bottom-4 xs:bottom-5 sm:bottom-6 left-5 xs:left-6 sm:left-8 text-xl xs:text-2xl md:text-3xl font-extrabold text-white max-w-[60%]'>{articleData[0].short_title}</h1> 
                </>
                :
                <div className='relative z-10 w-full h-full inline-block'>
                    <div className='bg-magenta opacity-20 h-full w-full z-10 '>    
                    </div>
                    <div className='w-full h-full top-0 left-0 absolute flex'>
                        <div className="loader z-20"></div>
                    </div>
                </div>
                
                }
                
            </Link>
            <Link to={"/neuigkeiten/" + articleData[1].id} className='relative my-4 sm:my-0 w-full sm:w-[49%] md:w-[32.5%] float-right group aspect-4/3 xs:aspect-video sm:aspect-4/3 rounded-sm overflow-hidden shaxow-xl sm:shadow-2xl shadow-zinc-400'>
                {!loading ? <><img 
                    className='absolute z-1 min-w-full min-h-full duration-500 group-hover:min-w-[106%] group-hover:min-h-[106%] group-hover:left-[-3%] group-hover:top-[-3%] left-0 top-0 overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                    src={"https://api.wrire.com" + articleData[1].thumbnail}
                />
                <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
                <h1 className='absolute bottom-4 xs:bottom-5 sm:bottom-3 m-l:bottom-4 left-5 xs:left-6 sm:left-4 m-l:left-5 text-xl xs:text-2xl sm:text-lg m-l:text-xl font-extrabold text-white max-w-[80%]'>{articleData[1].short_title}</h1>
                </> : 
                <div className='relative z-10 w-full h-full inline-block'>
                    <div className='bg-magenta opacity-20 h-full w-full z-10 '>    
                    </div>
                    <div className='w-full h-full top-0 left-0 absolute flex'>
                        <div className="loader z-20"></div>
                    </div>
                </div>
                }
            </Link>
            <Link to={"/neuigkeiten/" + articleData[2].id} className='relative overflow-hidden sm:absolute group w-full sm:w-[49%] md:w-[32.5%] bottom-0 right-0 float-right group aspect-4/3 xs:aspect-video sm:aspect-4/3 rounded-sm shaxow-xl sm:shadow-2xl shadow-zinc-400'>
                {!loading ? <>
                    <img 
                        className='absolute z-1 min-w-full min-h-full duration-500 group-hover:min-w-[106%] group-hover:min-h-[106%] group-hover:left-[-3%] group-hover:top-[-3%] left-0 top-0 overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                        src={"https://api.wrire.com" + articleData[2].thumbnail}
                    />
                    <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
                    <h1 className='absolute bottom-4 xs:bottom-5 sm:bottom-3 m-l:bottom-4 left-5 xs:left-6 sm:left-4 m-l:left-5 text-xl xs:text-2xl sm:text-lg m-l:text-xl font-extrabold text-white max-w-[80%]'>{articleData[2].short_title}</h1>
                </> : 
                <div className='relative z-10 w-full h-full inline-block'>
                    <div className='bg-magenta opacity-20 h-full w-full z-10 '>    
                    </div>
                    <div className='w-full h-full top-0 left-0 absolute flex'>
                        <div className="loader z-20">

                        </div>
                    </div>
                </div>
                }
            </Link>
        </div>
        <Link to="/news" className='default-text font-bold my-3 sm:my-4 flex justify-center bg-white z-3'><p>Alle Neuigkeiten</p> <ShowMoreCurves className='h-4 sm:h-[18px] w-4 sm:w-[18px] mt-1 sm:mt-[5px] ml-1 float-left' /> </Link>
    </>
  )
}

export default NewsPreview