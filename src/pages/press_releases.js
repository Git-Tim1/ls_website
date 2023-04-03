import React from 'react'
import ArticleView from '../components/article_view'
import Heading from '../components/heading'

const article_data = [{
  "title": "Liberale Schüler kritisieren Werbekampagne „The Länd“",
  "preview": "„Die Kosten in Höhe von 21 Millionen Euro wären im Bildungssystem viel besser investiert gewesen“, erklärte der Landesvorsitzende Paul Jenisch nach Kampagnenvorstellung des Ministerpräsidenten Winfried Kretschmann. „Baden-Württembergs Schulen brauchen hinsichtlich des großen Investitionsstau in der Bildung jeden Cent. Die extrem hohen Kosten der missratenen Werbekampagne hätte man beispielsweise besser in Luftfilteranlagen, funktionierende IT-Systeme und Lehrpersonal investieren können“.",
  "image": "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/11/willkommen-in-the-leand.jpg",
},
{
  "title": "Offener Brief an das Kultusministerium",
  "preview": "Sehr geehrte Frau Ministerin, seit etwas mehr als drei Wochen sind die Schulen in Baden-Württemberg geschlossen. Die Covid-19 Pandemie und die außergewöhnlichen Umstände haben uns alle überrascht und getroffen. In diesen schwierigen Zeiten belastet uns auch die Ungewissheit über den weiteren Verlauf des Schuljahres und das Stattfinden der diesjährigen Abiturprüfungen. Wir haben im vergangenen Jahr erlebt, wie Schülerinnen und Schüler freitags für ihre Anliegen demonstriert haben und mit einem offenen Ohr empfangen wurden. Wir wünschen uns, dass Sie sich unsere Anliegen genauso zu Herzen nehmen.",
  "image": "https://www.baden-wuerttemberg.de/fileadmin/_processed_/5/b/csm_Susanne-Eisenmann_c-KM_2434x1310_8a168fcf0e.jpg"
}
]


const PressReleases = () => {
  return (
    <div>
      <Heading text="Neuigkeiten" centered={true} background={false} />
      <div className='mt-6'>
        {
          article_data.map((data, index) => {
            return(<ArticleView title={data.title} preview={data.preview} img={data.image}  />)
          })
        }
      </div>
    </div>
  )
}

export default PressReleases