import React from 'react'

const NewsPreview = () => {
  return (
    <>
        <div className='relative mt-5 inline-block w-full'>
            <div className='relative cursor-pointer w-[66.5%] float-left group aspect-4/3 rounded-sm overflow-hidden shadow-2xl shadow-zinc-400'>
                <img 
                    className='z-1 w-full h-full duration-500 group-hover:w-[105%] group-hover:h-[105%] overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                    src="https://www.ls-bawu.de/Bilder/landtag2.jpg"
                />
                <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
                <h1 className='absolute bottom-6 left-8 text-3xl font-extrabold text-white max-w-[60%]'>Liberaler Zukunftstag</h1>
            </div>
            <div className='relative cursor-pointer w-[32.5%] float-right group aspect-4/3 rounded-sm overflow-hidden shadow-2xl shadow-zinc-400'>
                <img 
                    className='z-1 w-full h-full duration-500 group-hover:w-[105%] group-hover:h-[105%] overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                    src="https://www.ls-bawu.de/Bilder/LaKo3.1.jpg"
                />
                <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
                <h1 className='absolute bottom-4 left-5 text-xl font-extrabold text-white max-w-[80%]'>4. LaKo in Stuttgart</h1>
            </div>
            <div className='absolute cursor-pointer w-[32.5%] bottom-0 right-0 float-right group aspect-4/3 rounded-sm overflow-hidden shadow-2xl shadow-zinc-400'>
                <img 
                    className='z-1 w-full h-full duration-500 group-hover:w-[105%] group-hover:h-[105%] overflow-hidden object-cover brightness-90 group-hover:brightness-110' 
                    src="https://www.ls-bawu.de/Bilder/MYPJB4.jpeg"
                />
                <div className='absolute bg-gradient-to-b from-transparent to-magenta w-full h-full top-0 z-2'></div>
                <h1 className='absolute bottom-4 left-5 text-xl font-extrabold text-white max-w-[80%]'>Diskussionrunde mit Jens Brandenburg (MdB)</h1>
            </div>
        </div>
        <div className='text-xl font-bold my-3 flex justify-center bg-white z-3'><a href="#" >Alle Veranstaltungen</a></div>
    </>
  )
}

export default NewsPreview