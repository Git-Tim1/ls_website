import React from 'react'
import { Link } from 'react-router-dom'
import ShowMoreCurves from '../files/showMoreCurves'

const Introduction = () => {
  return (
    <div className='w-full mt-5 default-text'>
        Wir sind liberale Schüler und sehen uns als eine Vorfeldorganisation der Freien Demokraten und Jungen Liberalen mit programmatischen Schwerpunkt auf Umwelt- und Bildungspolitik.
  
        Unser Ziel ist weltbeste Bildung in Baden-Würtemberg, um sozialen Aufstieg für jeden zu ermöglichen und das Aufstiegsversprechen zu erneuern.
        <div className='font-bold my-3 flex justify-center bg-white z-3'><Link to="/landesvorstand" ><p className='float-left'>Landesvorstand</p> <ShowMoreCurves className='h-4 sm:h-[18px] w-4 sm:w-[18px] mt-1 sm:mt-[5px] ml-1 float-left' /></Link></div>
    </div>
  )
}

export default Introduction