import React from 'react'

const ArticleView = ({title, img, preview,  }) => {
  return (
    <div className='bg-white drop-shadow w-full h-48 mb-5'>
        <img src={img} className='h-full object-cover aspect-video float-left'/>
        <div className='w-[calc(100%-23rem)] float-right mr-3 mt-4'>
            <h1 className='float-left text-2xl font-extrabold'>{title}</h1>
            <p className='w-full max-h-[72px] text-base overflow-hidden'>{preview}</p>
        </div>
    </div>
  )
}

export default ArticleView