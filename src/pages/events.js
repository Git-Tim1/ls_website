import React from 'react'
import Heading from '../components/heading'
import Event from '../components/event'


const Events = () => {
  return (
    <div className='min-h-[calc(100vh-208px)] block'>
      <Heading text="Events" centered={true} background={false}/>
      <div className='w-full mt-16 relative'>
        <Event Day="04" Month="Juni" EventName="Lorem ipsum dolur set amet" Description="Lorem ipsum dolur set amet ....." />
      </div>
    </div>
  )
}

export default Events