import React from 'react'
import {AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const PersonView = ({name, role, img, email, twitter, instagram, link}) => {
  return (
        <div className='mx-auto h-36 3xs:h-40 xs:h-36 sm:h-40 left-0 duration-500 flex justify-center  bg-gradient-to-r from-magenta to-[#5800FF] w-[96%] xs:w-11/12 md:w-4/5 mt-10 skew-y-2 overflow-hidden xs:overflow-visible group'> 
        <div className='float-left w-[36%] sm:w-[35%] m-l:w-1/3  lg:w-[30%] flex justify-center overflwo-hidden'>
          <img src={img} className='absolute opacity-70 xxs:opacity-100 h-[105%] xs:h-[115%] left-0 sm:left-2 float-left bottom-0 duration-200' />
        </div>
        <div className='float-right absolute xs:relative w-[90%] xs:w-[64%] sm:w-[65%] m-l:w-2/3 lg:w-[70%] flex justify-center h-full duration-200 z-20 right-0'>
          <div className='h-auto my-auto pb-2 pr-4 w-full xxs:w-full'>
            <div className='font-extrabold w-full leading-5 3xs:leading-6 text-xl 3xs:text-2xl md:text-3xl md:leading-7 text-white block duration-200'>
              <p className='float-right xs:float-left text-right xs:text-left'>{name}</p>
            </div>
            <div className=' 3xs:font-extrabold font-semibold w-full text-sm 3xs:text-lg text-white block leading-4 3xs:leading-5'>
              <p className='float-right xs:float-left text-right xs:text-left 4xs:mt-1'>{role}</p>
            </div>
            <div className='inline-block w-full 3xs:mt-1 xs:float-left float-right'>
              {email != null && <a href={`mailto:${email}`}><AiOutlineMail size={28} className='float-right xs:float-left text-white ml-2 xs:ml-0 xs:mr-2' /></a>}
              {twitter != null &&<a href={twitter}><AiOutlineTwitter className='float-right xs:float-left text-white ml-2 xs:mr-2 xs:ml-0' size={28} /></a>}
              {instagram != null && <a href={instagram}><AiOutlineInstagram className='float-right xs:float-none text-white ml-2 xs:ml-0' size={28} /></a>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default PersonView