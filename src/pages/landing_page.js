import React, { useEffect } from 'react'
import Heading from '../components/heading'
import NewsPreview from '../components/news_preview'
import Introduction from '../components/introduction'
import LP_OurPositions from '../components/lp_our_positions'
import LP_BecomeMember from '../components/lp_become_member'

const LandingPage = ({ footer }) => {
  useEffect(() => {
    document.title = "Landesvorstand - Liberale Schüler BaWü"
    window.scrollTo(0, 0)

    footer()
  }, []);
  return (
    <>
      <Heading text="Herzlich Wilkommen bei den Liberalen Schülern BaWü" centered={true} background={false} />
      <NewsPreview />
      <Heading text="Wer sind wir?" centered={true} background={false} />
      <Introduction />
      <Heading text="Unsere Positionen" centered={true} background={false} />
      <LP_OurPositions />
      <Heading text="Jetzt Mitglied werden" centered={true} background={false} />
      <LP_BecomeMember />

    </>
  )
}

export default LandingPage