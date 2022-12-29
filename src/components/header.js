import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LS_Logo from '../images/Logo.jpeg';
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const Header = () => {
    const [mobileNavBar, setMobileNavBar] = useState(false)
    return (
    <>
        <header className='w-full h-[5.5rem] drop-shadow-sm bg-white fixed z-20 top-0'>
            <div className='h-full max-w-[60rem] w-[90%] m-auto font-bold text-[17px] overflow-hidden'>
                <Link to="/home"><img className='float-left h-[110%]' src={LS_Logo} alt="JU Kirchheim Logo" /></Link>
                <ul className='float-left h-full hidden sm:flex ml-5'>
                    <li className='mr-4 md:mr-5 my-auto group py-2'>
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
                    <li className='mx-4 my-auto hover:text-accent-blue-2 group py-2'>
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
                    <Link to="/kontakt" className='h-full flex'><li className='mx-4 my-auto cursor-pointer hover:text-magenta uppercase'><p className='mt-2'>Kontakt</p></li></Link>
                    <Link to="/mitglied-werden" className='h-full flex'><li className='ml-4 md:ml-4 my-auto cursor-pointer hover:text-magenta uppercase'><p className='mt-2'>Mitglied werden</p></li></Link>
                    
                </ul>
                    
                    
                <a className='float-left h-full w-auto flex' href="#" onClick={e => {e.preventDefault(); setMobileNavBar(!mobileNavBar)}} >
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
        {/*mobileNavBar && <SideBar />*/}
    </>
  )
}

export default Header