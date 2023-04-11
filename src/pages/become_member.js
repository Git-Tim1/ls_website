import React, {useState, useEffect} from 'react'
import Footer from '../components/footer'
import Heading from '../components/heading'
import InputField from '../components/input_field'

const BecomeMember = ({ unmountFooter, mountFooter}) => {
  const [data, setData] = useState({sex: "male", name: "", e_mail: "", street_and_number: "", place_of_residence:"", zip:"", birth_date: "", bank_name: "",  iban: "", bic: "", checked: false})

  const handleSubmit = () => {
    console.log("submit")
  }

  useEffect(() => {
    document.title = "Mitmachen - Liberale Schüler BaWü"
    window.scrollTo(0, 0)

    unmountFooter()

    return () => {mountFooter()}
  }, []);
  
  
  return (
    <div>
      <img className='fixed w-full -z-20 left-0 top-[5.5rem] h-52 3xs:h-64 xs:h-80 md:h-96 object-cover duration-200 ' src="https://www.ls-bawu.de/Bilder/mitgliedwerden.jpeg" />
      
      <div className='absolute left-0 w-full bg-white z-10 mt-52 3xs:mt-64 xs:mt-80 md:mt-96'>
        <div className='mx-auto max-w-[60rem] w-[90%]'>
          <Heading text="Mitmachen" w='w-20' centered={true} background={false}/>
          <p className='mt-2 sm:mt-4 default-text'>
          Wir Liberalen Schüler wollen Politik und Zeitgeschehen mitgestalten. Dabei stehen für uns Freiheit, Individualität, Eigenverantwortung und Toleranz im Mittelpunkt. Wir wollen Entscheidungen nicht anderen überlassen, sondern unsere Zukunft selbst in die Hand nehmen.
          Du willst Dich für die beste Bildung einsetzen? Dem Fortschritt siehst Du optimistisch entgegen und Digitalisierung und Bürgerrechte sind für Dich kein Gegensatz? Für Dich gehören Globalisierung und Menschenrechte einfach zusammen? Generationengerechtigkeit und Respekt sind für Dich Leitgedanken unserer Gesellschaft? Dann komm zu uns und mach mit. Werde liberaler Schüler – nicht irgendwann, sondern jetzt!
          </p>
          <InputField datapoint={"Vor- und Nachname*"} type="text" inputData={i => setData({...data, vorname: i})} />
          <InputField datapoint={"E-Mail*"} type="E-Mail" inputData={i => setData({...data, e_mail: i})} />
          <InputField datapoint={"Straße, Hausnr.*"} type="text" inputData={i => setData({...data, street_and_number: i})} />
          <InputField datapoint={"Wohnort*"} type="text" inputData={i => setData({...data, place_of_residence: i})} />
          <InputField datapoint={"Postleitzahl*"} type="text" inputData={i => setData({...data, zip: i})} />
          <InputField datapoint={"Geburtsdatum*"} type="text" inputData={i => setData({...data, birth_date: i})} />
          <InputField datapoint={"Telefonnummer"} type="text" inputData={i => setData({...data, birth_date: i})} />
          <div className='w-full inline-block'>
              <input type='checkbox' className="float-left mt-5 w-[18px] h-[18px] outline-none border border-gray-200 rounded-none" onChange={e => {e.preventDefault(); setData({...data, checked: !data.checked})}} />
              <p className='w-[calc(100%-28px)] float-right mt-4 font-medium'>Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Webseite einverstanden.</p>
              
          </div>
          <input type="submit" onClick={e => {e.preventDefault(); handleSubmit()}} className='cursor-pointer mx-auto block bg-magenta text-white px-4 py-1.5 text-lg font-semibold mt-2 hover:drop-shadow-lg' value="Abschicken" />
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default BecomeMember