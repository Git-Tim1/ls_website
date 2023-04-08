import React from 'react'
import { Link } from 'react-router-dom'

var LS_Satzung = require('../files/LS-Satzung.pdf')

const Footer = () => {
  return (
    <div className='inline-block w-full py-4 mt-8 bg-white shadow-3xl shadow-black'>
      <div className='max-w-[60rem] w-[90%] sm:w-[95%] md:w-[90%] m-auto text-sm sm:text-base font-bold text-magenta'>
        <Link  to="/impressum">Impressum</Link>
        <Link className='mx-4 md:mx-6' to="/datenschutzerklaerung">Datenschutzerklärung</Link>
        <a type="file" href={LS_Satzung} download>Satzung</a>
      </div>
    </div>
  )
}

export default Footer