import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LS_Logo from '../files/Logo.jpeg';
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const Header = () => {
    const [mobileNavBar, setMobileNavBar] = useState(false)
    
    return (
    <>
        <header className='w-full h-[5.5rem] drop-shadow bg-white fixed z-20 top-0'>
            <div className='h-full max-w-[60rem] w-[90%] sm:w-[95%] md:w-[90%] m-auto font-bold text-[17px] overflow-hidden'>
                <Link to="/home"><img className='float-left h-[110%]' src={LS_Logo} alt="JU Kirchheim Logo" /></Link>
                <ul className='float-left h-full hidden sm:flex ml-3 md:ml-5'>
                    <li className='mr-6 md:mr-8 my-auto group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta duration-200'>Inhalte</p>

                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm hidden group px-0.25 py-1.5
                                group-hover:block absolute top-16 border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/positionen"><li className='px-5 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Unsere Positionen</li></Link>
                                <Link to="/news"><li className='px-5 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Neuigkeiten</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className='mr-6 md:mr-8 ml-0 my-auto hover:text-accent-blue-2 group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta duration-200'>Über Uns</p>
                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm group hidden px-0.25 py-1.5
                                 duration-200 absolute group-hover:block border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/landesvorstand"><li className='px-5 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Landesvorstand</li></Link>
                                <Link to="/events"><li className='px-5 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Veranstaltung</li></Link>
                            </ul>
                        </div>
                    </li>
                    <Link to="/kontakt" className='h-full flex'><li className='mr-6 md:mr-8 my-auto cursor-pointer hover:text-magenta uppercase duration-200'><p className='mt-2'>Kontakt</p></li></Link>
                    <Link to="/mitglied-werden" className='h-full flex'><li className='my-auto cursor-pointer hover:text-magenta uppercase duration-200'><p className='mt-2'>Mitglied werden</p></li></Link>
                    
                </ul>
                    
                    
                <a className='float-right h-full w-auto flex' href="#" onClick={e => {e.preventDefault(); setMobileNavBar(!mobileNavBar)}} >
                    {!mobileNavBar ? 
                    <AiOutlineMenu size={25} className='sm:hidden my-auto'/> 
                    : 
                    <AiOutlineClose size={25} className='sm:hidden my-auto'/>}
                </a>
                    
            </div>
        </header>
        <div onClick={() => setMobileNavBar(false)} onTouchStart={() => setMobileNavBar(false)}
            className={`${mobileNavBar ? 'block' : 'hidden'} bg-black fixed opacity-10 z-10 h-full w-full`}>
        </div>
        <MobileNavBar showNav={mobileNavBar} changeNavState={() => setMobileNavBar(false)} />
    </>
  )
}


export const MobileNavBar = ({showNav, changeNavState}) => {
    const [showMore, setShowMore] = useState(false)
    const [showMore1, setShowMore1] = useState(false)
    return(
        <div className={`absolute w-full h-full bg-gradient-to-tr from-magenta to-[#5800FF] z-[100] top-0 ${showNav ? 'left-0 sm:left-[-120%]' : 'left-[-120%]'} duration-200`}>
            <div className='h-[5.5rem] w-full border-b border-white'>
                <div className='w-[90%] h-full mx-auto'>
                    <div className='flex items-center h-full float-right'>
                        <a className='float-right my-auto w-auto flex' href="#" onClick={e => {e.preventDefault(); changeNavState()} }>
                            <AiOutlineClose size={25} className='sm:hidden my-auto text-white' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-[85%] mt-8 text-3xl font-black text-white mx-auto'>
                    <a className='hover:text-yellow-300 hover:ml-1 duration-200 inline-block w-full' href="#" onClick={() => setShowMore(!showMore)}>Inhalte</a>
                    <div className={`border bg-white text-lg text-black mt-1 py-3 rounded ${showMore ? 'hidden' : 'block'}`}>
                        <Link onClick={() => changeNavState()} to="/positionen" className='hover:text-magenta ml-6 hover:ml-7 mb-1 font-black w-full inline-block duration-200'>Positionen</Link>
                        <Link onClick={() => changeNavState()} to="/news" className='hover:text-magenta  ml-6 hover:ml-7 mt-1 font-black w-full inline-block duration-200'>Neuigkeiten</Link>
                    </div>
                    <a className='hover:text-yellow-300 hover:ml-1 duration-200 inline-block w-full mt-4' href="#" onClick={() => setShowMore1(!showMore1)}>Über uns</a>
                    <div className={`border bg-white text-lg text-black mt-1 py-3 rounded ${showMore1 ? 'hidden' : 'block'}`} >
                        <Link onClick={() => changeNavState()} to="/landesvorstand" className='hover:text-magenta ml-6 hover:ml-7 pb-1 font-black w-full inline-block duration-200'>Landesvorstand</Link>
                        <Link onClick={() => changeNavState()} to="/events" className='hover:text-magenta ml-6 hover:ml-7 pt-1 font-black w-full inline-block duration-200'>Events</Link>
                    </div>
                    <Link className='hover:text-yellow-300 hover:ml-1 inline-block w-full duration-200 mt-4' to="/kontakt">Kontakt</Link>
                    <Link className='hover:text-yellow-300 hover:ml-1 inline-block w-full duration-200 mt-4' to="/mitglied-werden">Mitglied werden</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;