import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='inline-block w-full py-4 mt-8 bg-white shadow-3xl shadow-black'>
      <div className='max-w-[60rem] w-full m-auto font-bold text-magenta'>
        <Link className='mr-6' to="/impressum">Impressum</Link>
        <Link className='mr-6' to="/datenschutzerklärung">Datenschutzerklärung</Link>
        <a type="file" href='#' download="#">Satzung</a>
  </div>
    </div>
  )
}

export default Footer