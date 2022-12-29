import React from 'react'
import Heading from '../components/heading'
import NewsPreview from '../components/news_preview'
import Introduction from '../components/introduction'

const LandingPage = () => {
  return (
    <>
      <Heading text="Herzlich Wilkommen bei den Liberalen Schülern BaWü" centered={true} background={false} />
      <NewsPreview />
      <Heading text="Wer sind wir?" centered={true} background={false} />
      <Introduction />
    </>
  )
}

export default LandingPage