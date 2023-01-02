import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LS_Logo from '../images/Logo.jpeg';
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const Header = () => {
    const [mobileNavBar, setMobileNavBar] = useState(false)
    return (
    <>
        <header className='w-full h-[5.5rem] drop-shadow-sm bg-white fixed z-20 top-0'>
            <div className='h-full max-w-[60rem] w-[90%] sm:w-[95%] md:w-[90%] m-auto font-bold text-[17px] overflow-hidden'>
                <Link to="/home"><img className='float-left h-[110%]' src={LS_Logo} alt="JU Kirchheim Logo" /></Link>
                <ul className='float-left h-full hidden sm:flex ml-3 md:ml-5'>
                    <li className='mr-6 md:mr-8 my-auto group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta'>Inhalte</p>

                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm hidden group px-0.25 py-1.5
                                group-hover:block absolute top-16 border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/positionen"><li className='px-5 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white'>Unsere Positionen</li></Link>
                                <Link to="/pressemitteilungen"><li className='px-5 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white'>Pressemitteilungen</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className='mr-6 md:mr-8 ml-0 my-auto hover:text-accent-blue-2 group py-2'>
                        <p className='cursor-pointer uppercase mt-2 group-hover:text-magenta'>Über Uns</p>

                        <div className='w-auto h-auto font-medium  z-2 
                                bg-white drop-shadow-sm hidden group px-0.25 py-1.5
                                group-hover:block absolute top-16 border-t-2 border-magenta
                                text-accent-color-3'>
                            <ul className='text-black font-semibold'>
                                <Link to="/positionen"><li className='px-5 py-3 mb-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white'>Landesvorstand</li></Link>
                                <Link to="/events"><li className='px-5 py-3 my-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white'>Veranstaltungen</li></Link>
                                <Link to="/pressemitteilungen"><li className='px-5 py-3 mt-1 bg-decent-blue cursor-pointer hover:bg-magenta hover:text-white'>Arbeitsgruppen</li></Link>
                            </ul>
                        </div>
                    </li>
                    <Link to="/kontakt" className='h-full flex'><li className='mr-6 md:mr-8 my-auto cursor-pointer hover:text-magenta uppercase'><p className='mt-2'>Kontakt</p></li></Link>
                    <Link to="/mitglied-werden" className='h-full flex'><li className='my-auto cursor-pointer hover:text-magenta uppercase'><p className='mt-2'>Mitglied werden</p></li></Link>
                    
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
        {mobileNavBar && <MobileNavBar />}
    </>
  )
}


export const MobileNavBar = () => {
    const [showMore, setShowMore] = useState(false)
    const [showMore2, setShowMore2] = useState(false)
    return (
    <div className='z-30 w-full top-[5.5rem] fixed border-t bg-magenta border-white sm:hidden uppercase'>
        <ul className='m-auto py-2 font-bold text-lg text-white'>
            <li className='py-3 hover:bg-accent-blue-2'><Link to='/home'>
            <div className='w-[90%] mx-auto'>Startseite</div></Link></li>
            <a href="#" onClick={e => {e.preventDefault(); setShowMore(!showMore)}}>
                <li className='py-3 bg-accent-blue-3 hover:bg-accent-blue-2 border-t border-white'>
                    <div className='w-[90%] mx-auto'>
                        Inhalte
                        {!showMore ? 
                        <AiFillCaretRight className='float-right accent-blue-1 mt-1 mr-3' /> :
                        <AiFillCaretDown className='float-right accent-blue-1 mt-1 mr-3' />
                        }
                    </div>
                </li>
            </a>
            {showMore && <div className='border-t border-white bg-decent-blue font-medium bg-white text-black'>
                 <ul>
                    <li className='border-b border-gray-400'><Link to='/unsere-positionen'><div className='w-[85%] mx-auto pb-3 pt-4'>
                        Unsere Positionen
                    </div></Link></li>
                    <li><Link to='/pressemitteilungen'><div className='w-[85%] mx-auto pt-3 pb-4'>
                        Pressemitteilungen
                    </div></Link></li>
                </ul>
            </div>}
            <a href="#" onClick={e => {e.preventDefault(); setShowMore2(!showMore2)}}>
                <li className='py-3 bg-accent-blue-3 hover:bg-accent-blue-2 border-t border-white'>
                    <div className='w-[90%] mx-auto'>
                        Über uns 
                        {!showMore2 ? 
                        <AiFillCaretRight className='float-right accent-blue-1 mt-1 mr-3' /> :
                        <AiFillCaretDown className='float-right accent-blue-1 mt-1 mr-3' />
                        }
                    </div>
                </li>
            </a>
            {showMore2 && <div className='border-t border-white bg-white text-black font-medium'>
                 <ul>
                    <li className='border-b border-gray-400'><Link to='/landesvorstand'><div className='w-[85%] mx-auto pb-3 pt-4'>
                        Landesvorstand
                    </div></Link></li>
                    <li className='border-b border-gray-400'><Link to='/arbeitsgruppen'><div className='w-[85%] mx-auto pt-3 py-4'>
                        Arbeitsgruppen
                    </div></Link></li>
                    <li><Link to='/veranstaltungen'><div className='w-[85%] mx-auto pt-3 pb-4'>
                        Veranstaltungen
                    </div></Link></li>
                </ul>
            </div>}
            <li className='py-3 border-t border-white  hover:bg-accent-blue-2'>
                <Link to='/mitglied-werden'>
                    <div className='w-[90%] mx-auto'>Mitglied werden</div>
                </Link>
            </li>
            <li className='py-3 border-t border-white bg-accent-blue-3  hover:bg-accent-blue-2'><Link to='/kontakt'><div className='w-[90%] mx-auto'>Kontakt</div></Link></li>
        </ul>
    </div>
    )
}

export default Header