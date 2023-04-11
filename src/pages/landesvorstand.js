import React, { useEffect, useContext } from 'react'
import Heading from '../components/heading'
import PersonView from '../components/person_view'
import {Link} from 'react-router-dom'
import { VorstandContext } from '../context'


const Landesvorstand = () => {
  const vorstandData = useContext(VorstandContext)

  useEffect(() => {
    document.title = "Landesvorstand - Liberale Schüler BaWü"
    window.scrollTo(0, 0)

    console.log(vorstandData)
  }, []);
  
  return (
    <div>
      <Heading text="Landesvorstand" centered={true} background={false}/>
      <p className='mt-6 default-text'>
        Der Landesvorstand leitet den Verband der Liberalen Schüler Baden-Württemberg. Er wird jährlich von unserem Landeskongress gewählt und besteht aus fünf Personen. Der Landesvorsitzende und seine Stellvertreter bilden den geschäftsführenden Vorstand. Darüber hinaus gibt es zwei Schatzmeister und vier Arbeitsgruppen Leiter. Alle Landesvorstandsmitglieder arbeiten ehrenamtlich.
      </p>
      <div className='w-full mt-16 relative'>
        {(vorstandData[0] !== " ") ? 
        <>
          {
            vorstandData.map((data, index) => {
              return <PersonView name={data.name} role={data.role} img={data.image_transparent} content={data.content} link={"/vorstand/" + data.name.toLowerCase() + '&' + index}  />
            })
          }
        </> : 
        <>
          <div className='mx-auto h-36 3xs:h-40 xs:h-36 sm:h-40 left-0 duration-500 flex bg-gradient-to-r from-magenta to-[#5800FF] w-[96%] xs:w-11/12 md:w-4/5 mt-10 skew-y-2 overflow-hidden xs:overflow-visible group'>
            <div className='loader'></div>
          </div>
          <div className='mx-auto h-36 3xs:h-40 xs:h-36 sm:h-40 left-0 duration-500 flex bg-gradient-to-r from-magenta to-[#5800FF] w-[96%] xs:w-11/12 md:w-4/5 mt-10 skew-y-2 overflow-hidden xs:overflow-visible group'>
            <div className='loader'></div>
          </div>
          <div className='mx-auto h-36 3xs:h-40 xs:h-36 sm:h-40 left-0 duration-500 flex bg-gradient-to-r from-magenta to-[#5800FF] w-[96%] xs:w-11/12 md:w-4/5 mt-10 skew-y-2 overflow-hidden xs:overflow-visible group'>
            <div className='loader'></div>
          </div>
          
        </>}
      </div>
    </div>
  )
}

export default Landesvorstand