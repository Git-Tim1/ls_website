import React, {useContext, useEffect} from 'react'
import Heading from '../components/heading'
import Event from '../components/event'

import { EventContext } from '../context'


const Events = () => {
  const eventData = useContext(EventContext)

  useEffect(() => {
    document.title = "Events - Liberale Schüler BaWü"
    window.scrollTo(0, 0)
}, []);
  

  return (
    <>
      <Heading w='w-12' text="Events" centered={true} background={false}/>
      <div className='w-full mt-10 md:mt-12 relative'>
        {eventData.map((data, index) => {
          return (<Event Day={data.day} Month={data.month} EventName={data.event_name} Description={data.description} />)})
        }
          
      </div>
    </>
  )
}

export default Events