import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const Event = ({Day, Month, EventName, Description}) => {
    const [showMore, setShowMore] = useState(false)
    return (
    <a onClick={e => {e.preventDefault(); setShowMore(!showMore)}} href="#">
    <div className='min-h-[calc(100vh-)] mb-5 w-full xs:w-11/12 sm:w-9/10 md:w-[85%] mx-auto cursor-pointer  skew-y-2 bg-gradient-to-r from-magenta to-[#5800FF] text-white duration-200'>
        <div className='w-full h-32 xs:h-36 md:h-40' >
            <div className='w-[100px] 3xs:w-[105px] xs:w-[120px] sm:w-[140px] h-full float-left flex justify-center items-center duration-200'>
                <div className='h-auto inline-block'>
                    <h1 className='text-[32px] leading-8 xxs:text-3xl xs:text-4xl font-extrabold text-accent-blue-2 w-full text-center inline-block '>{Day}.</h1>
                    <h2 className='text-base xs:text-lg font-medium text-center w-full inline-block'>{Month}</h2>
                </div>
            </div>
            <div className='float-left w-[calc(100%-100px)]  3xs:w-[calc(100%-105px)] xs:w-[calc(100%-120px)] sm:w-[calc(100%-140px)] h-full flex items-center justify-between duration-200'>
                <h1 className='text-[15px] 4xs:text-base 3xs:text-lg xxs:text-xl md:text-2xl font-bold md:font-extrabold ml-2 max-w-[80%] duration-200'>{EventName}</h1>
                <AiOutlinePlus  size={30} className={`mr-4 xs:mr-6 sm:mr-8 ${showMore && 'hidden'}`} />
                <AiOutlineMinus size={30} className={`mr-4 xs:mr-6 sm:mr-8 ${!showMore && 'hidden'}`} />
            </div>
        </div>
        <div className={`text-[15px] border-t-4 border-white xs:text-base p-5 xs:px-8 xs:py-6 ${!showMore && 'hidden'}`}>
            {Description}
        </div>
    </div>
    </a>)
}


export default Event