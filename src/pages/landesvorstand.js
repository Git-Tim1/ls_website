import React from 'react'
import Header from '../components/header'
import Heading from '../components/heading'
import PersonView from '../components/person_view'
import {Link} from 'react-router-dom'

const Vorstand_Data = [{


}]


const Landesvorstand = () => {
  return (
    <div>
      <Heading text="Landesvorstand" centered={true} background={false}/>
      <p className='mt-6'>
        Der Landesvorstand leitet den Verband der Liberalen Schüler Baden-Württemberg. Er wird jährlich von unserem Landeskongress gewählt und besteht aus fünf Personen. Der Landesvorsitzende und seine Stellvertreter bilden den geschäftsführenden Vorstand. Darüber hinaus gibt es zwei Schatzmeister und vier Arbeitsgruppen Leiter. Alle Landesvorstandsmitglieder arbeiten ehrenamtlich.
      </p>
      <div className='w-full mt-16 relative'>
        <Link to="/vorstand/jan"><PersonView name="Jan-Philipp Lenhardt"  twitter="https://twitter.com/jan" email="janphilipp@gmail.com" instagram="instagram.com/" role="Landesvorsitzender" img={"https://media.discordapp.net/attachments/1084451122296664075/1084451524509442159/image-removebg-preview_5_1.png?width=816&height=810"} /></Link>
        <Link to="/ferdiant"><PersonView name="Ferdinand v. Podewils" role="Presse und Öffentlichkeitsarbeit" img="https://media.discordapp.net/attachments/1084451122296664075/1092416416709353543/image-removebg-preview_7_1.png?width=780&height=782" /></Link>
        <PersonView />
        <PersonView />
      </div>
    </div>
  )
}

export default Landesvorstand