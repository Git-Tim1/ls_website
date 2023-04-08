import React, { useEffect } from 'react'
import PositionView from '../components/position_view'
import Heading from '../components/heading'
var Grundsatzprogramm = require('../files/Grundsatzprogrammls.pdf')


const position_data = [{
  topic: 'Digitalisierung',
  title: 'Damit das digitalste in der Schule nicht mehr die Pausen sind',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
  {
  topic: 'Bildungsausgaben',
  title: 'Investitionen die sich lohnen!',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
  {
  topic: 'Projektbezogener Unterricht',
  title: 'Investitionen die sich lohnen!',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
  {
  topic: 'Schutz vor Diskiminierung',
  title: 'Investitionen die sich lohnen!',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
  {
  topic: 'Schulautonomie',
  title: 'Investitionen die sich lohnen!',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
  {
  topic: 'berufliche Bildung',
  title: 'Investitionen die sich lohnen!',
  picture: 'https://picsum.photos/1000/500',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
  },
]


const OurPositions = ({footer}) => {
  useEffect(() => {
    document.title = "Landesvorstand - Liberale Schüler BaWü"
    window.scrollTo(0, 0)

    footer()
  }, []);
  return (
    <>
    <Heading text="Unsere Positionen" centered={true} background={false} />
    <p className='default-text mt-4'>
      Wir Liberale Schüler Baden-Württemberg setzen uns für ein selbstbestimmtes Leben jedes Menschen ein. Bildung ist dabei die Grundvoraussetzung. Wissen ist Macht; Herausforderungen unserer Zeit lassen sich nur mit einer modernen und abgestimmten Bildung ermöglichen. Eine gesunde Gesellschaft benötigt kluge Köpfe, welche Zukunft gestalten, Wohlstand erhalten und Probleme lösen kann. In Zukunft wird der Mensch deutlich flexibler, digitaler und vielseitiger arbeiten. Dies erfordert ein Umdenken unseres Bildungssystems, damit die Generation von morgen weiterhin wettbewerbsfähig bleibt. Eine moderne Schule muss den Kindern und Jugendlichen bei der Persönlichkeitsentwicklung und den sozialen und körperlichen Fähigkeiten helfen und darin auch Zeit investieren. Die Kreativität, Eigenverantwortung und Selbstständigkeit des Kindes muss ein zentraler Bestandteil der Ausbildung an unseren Schulen werden. Wir Liberale Schüler möchten diese Diskussion anstoßen. Wir möchten dazu beitragen, dass neben der Industrie 4.0 und der Arbeitswelt 4.0 endlich ein Schulsystem 4.0 entwickelt wird. Für die Zukunft unserer Generation.

    </p>
    <div className='mt-6 hidden xs:grid grid-cols-2 gap-3'>
            {position_data.map((data, index) => {
                return((index<6) &&<PositionView topic={data.topic} image={data.picture} link="/test" />)
            })}
        </div>
        <div className='mt-5 grid xs:hidden grid-cols-1 gap-3'>
            {position_data.map((data, index) => {
                return((index<6) &&<PositionView topic={data.topic} image={data.picture} link="/test" />)
            })}
    </div>
    <div className='w-full mt-6 flex'>
      <a href={Grundsatzprogramm} className="bg-gradient-to-r rounded from-magenta to-[#5800FF] text-white font-bold text-xl px-2 py-1 mx-auto">Grundsatzprogramm herunterladen</a>
    </div>
    </>
  )
}

export default OurPositions