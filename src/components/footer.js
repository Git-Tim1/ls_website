import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'


var Instagram = require('../files/LS-Satzung.pdf')
var LS_Satzung = require('../files/LS-Satzung.pdf')



const Footer = ({ absolute = false }) => {
  return(
    <footer className={`inline-block ${absolute && 'absolute'} w-full h-28 mt-8 pt-5 bg-white shadow-3xl shadow-black`}>
      <div className='max-w-[60rem] w-[90%] sm:w-[95%] md:w-[90%] pl-5 xxs:pl-0 text-base xxs:text-sm xs:text-base font-bold text-magenta'>
        <div className='w-full flex flex-col 3xs:flex-row xxs:justify-center gap-1 3xs:gap-3 sm:gap-5'>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
          <a type="file" href={LS_Satzung} download>Satzung</a>
        </div>
        <div className='float-right w-full h-[29px] mt-2 hidden 3xs:flex justify-end 3xs:justify-center gap-3'>
          <a href="https://instagram.com/ls_bawue/"><img className='h-full mt-[3px] w-auto bg-white' src="https://allfacebook.de/wp-content/uploads/2020/08/glyph-logo_May2016.png" /></a>
          <a href="kontakt@ls-bawu.de" type='e_mail'><AiOutlineMail className='h-9 w-9 float-right text-black' /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer