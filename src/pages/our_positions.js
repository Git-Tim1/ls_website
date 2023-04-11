import React, { useEffect, useContext } from 'react'
import PositionView from '../components/position_view'
import Heading from '../components/heading'
import { PositionContext } from '../context'

var Grundsatzprogramm = require('../files/Grundsatzprogrammls.pdf')



const OurPositions = () => {
  const position_data = useContext(PositionContext)

  useEffect(() => {
    document.title = "Landesvorstand - Liberale Schüler BaWü"
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    console.log(position_data)
  }, [position_data]);

  const LoadView = () => {
    return(
    <div className='relative flex w-auto bg-gray-100 h-auto group aspect-4/3 3xs:aspect-video xs:aspect-4/3 md:aspect-video rounded-sm shadow-md shadow-zinc-300'>
      <div className='loader'></div>
    </div>)
  }

  return (
    <>
    <Heading text="Unsere Positionen" centered={true} background={false} />
    <p className='default-text mt-4'>
      Wir Liberale Schüler Baden-Württemberg setzen uns für ein selbstbestimmtes Leben jedes Menschen ein. Bildung ist dabei die Grundvoraussetzung. Wissen ist Macht; Herausforderungen unserer Zeit lassen sich nur mit einer modernen und abgestimmten Bildung ermöglichen. Eine gesunde Gesellschaft benötigt kluge Köpfe, welche Zukunft gestalten, Wohlstand erhalten und Probleme lösen kann. In Zukunft wird der Mensch deutlich flexibler, digitaler und vielseitiger arbeiten. Dies erfordert ein Umdenken unseres Bildungssystems, damit die Generation von morgen weiterhin wettbewerbsfähig bleibt. Eine moderne Schule muss den Kindern und Jugendlichen bei der Persönlichkeitsentwicklung und den sozialen und körperlichen Fähigkeiten helfen und darin auch Zeit investieren. Die Kreativität, Eigenverantwortung und Selbstständigkeit des Kindes muss ein zentraler Bestandteil der Ausbildung an unseren Schulen werden. Wir Liberale Schüler möchten diese Diskussion anstoßen. Wir möchten dazu beitragen, dass neben der Industrie 4.0 und der Arbeitswelt 4.0 endlich ein Schulsystem 4.0 entwickelt wird. Für die Zukunft unserer Generation.
    </p>
    <div className='mt-6 grid grid-cols-1 xs:grid-cols-2 gap-3'>
      {(position_data[0] === " ") ?
        <>{position_data.map((data, index) => {
          return(<PositionView key={index} topic={data.topic} image={data.picture} link={"/position/" + data.topic.toLowerCase() + "&" + index} lp={false} />)
        })}</> :
        <><LoadView /><LoadView /><LoadView /><LoadView /></>
        
      }
    </div>
    <div className='w-full mt-6 flex'>
      <a href={Grundsatzprogramm} className="bg-gradient-to-r rounded from-magenta to-[#5800FF] text-white font-bold text-sm 3xs:text-base xs:text-lg md:text-xl px-2 py-1 mx-auto">Grundsatzprogramm herunterladen</a>
    </div>
    </>
  )
}

export default OurPositions