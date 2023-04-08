import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from '../components/heading'
import InputField from '../components/input_field'
import swal from 'sweetalert';

const Contact = ({footer}) => {
    const [data, setData] = useState({name: "", e_mail: "", message: "", checked: false})
    const [completeData, setCompleteData] = useState(false)
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Kontakt - Liberale Schüler BaWü"
        window.scrollTo(0, 0)

        footer()
    }, []);

    useEffect(() => {
        if (completeData == true){
        swal({
            icon: "error",
            title: "Formular vollständig aufüllen"
        })
        }
    }, [completeData])
    


    const submitData = () => {
        console.log("submit")
    }


    const handleSubmit = () => {
        if (data.name !== "" && data.e_mail !== "" && data.message !== "" && data.checked !== false){
        submitData()
        } else {
        console.log("Date complete")
        setCompleteData(true)
        }
    }
  return (
    <div className=''>
        <Heading text="Kontakt" centered={true} background={false}/>
        <p className='mt-4 default-text'>
        Du interessierst Dich für die Liberalen Schüler? Du hast Fragen zu unserem Verband? Du möchtest wissen, wann und wo die nächste Veranstaltung in Deiner Nähe stattfindet? Bei all dem sind wir Dir gerne behilflich. Egal ob Du konkrete inhaltliche Fragen zu unseren Themen und Positionen hast oder einfach nur den Kontakt zu uns suchst: Schreibe uns über das unten stehende Kontaktformular eine kurze E-Mail und wir versuchen Dir so schnell wie möglich weiter zu helfen. Das mag vielleicht nicht immer auf Anhieb möglich sein, aber wir garantieren Dir, dass Du auf jede vernünftige Anfrage auch immer eine Rückmeldung erhältst. Also schieß los. Wir freuen uns von Dir zu hören.
        </p>
        <InputField datapoint='Name' type='text' inputData={inputData => {setData({...data, name: inputData})}} />
        <InputField datapoint='E-Mail' type='E-Mail' inputData={inputData => {setData({...data, e_mail: inputData})}} />
        <label className='font-semibold text-lg mt-3 inline-block'>Nachricht</label>
        <textarea className='
        w-full mt-1 border border-gray-100
        p-3 bg-gray-100 focus:bg-white
        focus:outline-none focus:border-magenta min-h-[150px] duration-200'
        onChange={inputDataValue => setData({...data, message: inputDataValue.target.value})}

        />
        <div className='w-full inline-block'>
          <input type='checkbox' className="float-left mt-3 w-[18px] h-[18px] outline-none border border-gray-200 rounded-none" onChange={(e) => {e.preventDefault(); setData({...data, checked: !data.checked})}} />
          <p className='w-[calc(100%-25px)] float-right mt-2 font-medium'>Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Webseite einverstanden.</p>
        </div>
        <input type="submit" onClick={e => {e.preventDefault(); handleSubmit()}} className='cursor-pointer bg-magenta text-white px-4 py-1.5 text-lg font-semibold mt-2' value="Abschicken" />
    </div>
  )
}

export default Contact