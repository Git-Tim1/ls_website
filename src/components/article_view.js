import React from 'react'
import { Link } from 'react-router-dom'

const ArticleView = ({title, img, preview, link }) => {
  return (
    <Link to={link} className='bg-white drop-shadow w-full h-48 mb-5 inline-block'>
        <img src={img} className='h-full object-cover aspect-video float-left'/>
        <div className='w-[calc(100%-23rem)] float-right mr-3 mt-4'>
            <h1 className='float-left text-2xl font-extrabold'>{title}</h1>
            <p className='w-full max-h-[72px] text-base overflow-hidden'>{preview}</p>
        </div>
    </Link>
  )
}

export default ArticleView