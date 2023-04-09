import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoadingText } from '../pages/article_side'

const ArticleView = ({title = "lorem ipsum", img, preview, link="#" }) => {
  const [longTitle, setLongTitle] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(title.length > 60){setLongTitle(true)}
  }, [])

  useEffect(() => {
    if (title != "lorem ipsum"){setLoading(false)}
  }, [title])


  
  return (
    <Link to={link} className='bg-white drop-shadow w-full h-auto xs:h-36 sm:h-40 md:h-48 mb-5 inline-block overflow-hidden'>
        {!loading ? <><img src={img} className='h-40 3xs:h-44 xxs:h-52 xs:h-full w-full xs:w-2/5 sm:w-[38%] md:w-1/3 object-cover float-left duration-200'/>
        <div className='w-full xs:w-3/5 sm:w-[62%] md:w-2/3 float-left h-full px-4 xxs:px-5 xs:px-3 md:px-4 lg:px-5 py-5 xxs:py-6 xs:py-3 md:py-4 duration-200'>
            <h1 className='inline-block line-clamp-3 mb-1 w-full float-left text-lg xxs:text-xl xs:text-base sm:text-lg md:text-xl  lg:text-[22px] font-extrabold leading-6 xxs:leading-7 xs:leading-[22px] sm:leading-6 md:leading-7 duration-200'>{title}</h1>
            <p className={`inline-block w-full ${longTitle ? 'line-clamp-3 3xs:line-clamp-4 xs:line-clamp-2 md:line-clamp-3 lg:line-clamp-4' : 'line-clamp-4 3xs:line-clamp-5 xs:line-clamp-3 md:line-clamp-4'} text-sm 3xs:text-[15px] xs:text-sm sm:text-[15px] md:text-base overflow-hidden duration-200`}>{preview}</p>
        </div>
        </> :
        <>
          <div className='h-40 3xs:h-44 xxs:h-52 xs:h-full w-full xs:w-2/5 sm:w-[38%] md:w-1/3 flex justify-center float-left duration-200 bg-magenta opacity-20'>
            <div className='loader'></div>
          </div>
          <div className='w-full xs:w-3/5 sm:w-[62%] md:w-2/3 float-left h-full px-4 xxs:px-5 xs:px-3 md:px-4 lg:px-5 py-5 xxs:py-6 xs:py-3 md:py-4 duration-200'>
            <div className='animation w-3/5 h-6 md:h-7 rounded-sm'>
              <div className='background-masker btn-divide-left left-[40%]'></div>
            </div>
            <div className='w-full'>
              <LoadingText x="left-[15%]" y="left-[50%]" z="left-[90%]" h="h-4" />
              <LoadingText x="left-[20%]" y="left-[40%]" z="left-[80%]" h="h-4" />
              <LoadingText x="left-[8%]" y="left-[25%]" z="left-[75%]" h="h-4" />

            </div>
          </div>
        </>  
      }
    </Link>
  )
}

export default ArticleView