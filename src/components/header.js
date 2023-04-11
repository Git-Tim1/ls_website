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
                <Link to="/home"><img className='float-left h-[110%]' src={LS_Logo} /></Link>
                <ul className='float-left h-full hidden sm:flex ml-3 md:ml-5'>
                    <li className='mr-6 md:mr-8 my-auto group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta duration-200'>Inhalte</p>

                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm hidden group px-0.25 py-1.5
                                group-hover:block absolute top-16 border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/positionen"><li className='pl-5 pr-8 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Unsere Positionen</li></Link>
                                <Link to="/news"><li className='pl-5 pr-8 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Neuigkeiten</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className='mr-6 md:mr-8 ml-0 my-auto hover:text-accent-blue-2 group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta duration-200'>Über Uns</p>
                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm group hidden px-0.25 py-2
                                 duration-200 absolute group-hover:block border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/landesvorstand"><li className='pl-5 pr-8 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Landesvorstand</li></Link>
                                <Link to="/kreisverbaende"><li className='pl-5 pr-8 py-3 my-[2px] bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Kreisverbände</li></Link>
                                <Link to="/events"><li className='pl-5 pr-8 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white duration-150'>Veranstaltungen</li></Link>
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
        <MobileNavBar showNav={mobileNavBar} changeNavState={() => setMobileNavBar(false)} />
    </>
  )
}


export const MobileNavBar = ({showNav, changeNavState}) => {
    const [showMore, setShowMore] = useState(false)
    const [showMore1, setShowMore1] = useState(false)
    return(
        <nav className={`fixed w-full h-full text-black bg-white z-[100] top-0 ${showNav ? 'left-0 sm:left-[-120%]' : 'top-[-120%]'} duration-200`}>
            <div className='h-[5.5rem] w-full border-b-2 border-magenta'>
                <div className='w-[90%] h-full mx-auto overflow-hidden'>
                    <Link to="/home" onClick={() => changeNavState()}><img className='float-left h-[110%]' src={LS_Logo} /></Link>
                    <div className='flex items-center h-full float-right'>
                        
                        <a className='float-right my-auto w-auto flex' href="#" onClick={e => {e.preventDefault(); changeNavState()} }>
                            <p className='sm:hidden my-auto text-2xl text-black'>X</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-[85%] mt-8 text-2xl 4xs:text-3xl font-black mx-auto flex flex-col gap-4'>
                    <Link onClick={() => changeNavState()} className='hover-gradient hover:ml-2 inline-block w-full duration-200' to="/home">Startseite</Link>
                    <div>
                        <a className='hover-gradient hover:ml-2 duration-200 inline-block w-full' href="#" onClick={() => setShowMore(!showMore)}>Inhalte</a>
                        <div className={`text-base mt-1 4xs:text-xl border-y-2 border-magenta tracking-wide py-2 3xs:py-3 flex flex-col font-bold  gap-1 ${showMore ? 'block' : 'hidden'}`}>
                            <Link onClick={() => changeNavState()} to="/positionen" className='hover:text-magenta text px-8 hover:px-9 py-1 w-full inline-block duration-200'>Positionen</Link>
                            <Link onClick={() => changeNavState()} to="/news" className='hover:text-magenta  px-8 hover:px-9 py-1 inline-block duration-200'>Neuigkeiten</Link>
                        </div>
                    </div>
                    <div>
                        <a className='hover-gradient hover:ml-2 duration-200 inline-block w-full' href="#" onClick={() => setShowMore1(!showMore1)}>Über uns</a>
                        <div className={`text-base mt-1 4xs:text-xl border-y-2 border-magenta tracking-wide py-2 3xs:py-3 flex flex-col font-bold  gap-1 ${showMore1 ? 'block' : 'hidden'}`}>
                            <Link onClick={() => changeNavState()} to="/landesvorstand" className='hover:text-magenta text px-8 hover:px-9 py-1 w-full inline-block duration-200'>Landesvorstand</Link>
                            <Link onClick={() => changeNavState()} to="/events" className='hover:text-magenta  px-8 hover:px-9 py-1 inline-block duration-200'>Veranstaltungen</Link>
                        </div>
                    </div>
                    <Link onClick={() => changeNavState()} className='hover-gradient hover:ml-2 inline-block duration-200' to="/kontakt">Kontakt</Link>
                    <Link onClick={() => changeNavState()} className='hover-gradient hover:ml-2 inline-block duration-200' to="/mitglied-werden">Mitglied werden</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;