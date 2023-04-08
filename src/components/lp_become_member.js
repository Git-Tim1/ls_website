import React from 'react'

const LP_Input = ({inputData, type, placeholderValue}) => {
    return (
        <input type={type} /*onChange={inputDataValue => inputData(inputDataValue.target.value)}*/ 
        className='w-full mt-4 h-10 border border-gray-10 bg-[#F2F2F2] focus:bg-white px-3 focus:outline-none focus:border-magenta' 
        placeholder={placeholderValue}
        required 
        />
    )
}

const LP_BecomeMember = () => {
  return (
    <div className='block mt-2 md:mt-4'>
        <p className='inline-block w-full md:w-[55%] lg:w-3/5 default-text md:mt-2 pr-4'>
            Wir Liberalen Schüler wollen Politik und Zeitgeschehen
            mitgestalten. Dabei stehen für uns Freiheit, Individualität, 
            Eigenverantwortung und Toleranz im Mittelpunkt. 
            Wir wollen Entscheidungen nicht anderen überlassen, 
            sondern unsere Zukunft selbst in die Hand nehmen. <br /> <br />

            Du willst Dich für die weltbeste Bildung einsetzen? 
            Dem Fortschritt siehst Du optimistisch entgegen und 
            Digitalisierung und Bürgerrechte sind für Dich kein 
            Gegensatz? Für Dich gehören Globalisierung und 
            Menschenrechte einfach zusammen? 
            Generationengerechtigkeit und Respekt sind für Dich 
            Leitgedanken unserer Gesellschaft? 
            Dann komm zu uns und mach mit. 
            Werde liberaler Schüler – nicht irgendwann, sondern jetzt!
        </p>
        <div className='bg-white drop-shadow w-full xs:w-[80%] md:w-[45%] lg:w-2/5 md:float-right mx-auto px-6 md:px-4 pb-6 md:pb-4 pt-2 md:pt-0 mt-3 md:mt-0'>
            <LP_Input type="text" placeholderValue="Vor- und Nachname"/>
            <LP_Input type="text" placeholderValue="Straße, Nr."/>
            <LP_Input type="text" placeholderValue="PLZ, Ort"/>
            <LP_Input type="text" placeholderValue="E-Mail"/>
            <LP_Input type="text" placeholderValue="Geburtsdatum DD/MM/YYYY"/>
            <LP_Input type="number" placeholderValue="Telefonnummer"/>
            <div className='mt-3 text-sm xs:text-base md:text-sm'>
                <p className='ml-1 inline-block float-left'>Bereits JuLi-Mitglied? </p>
                <input className='ml-3 inline-block mt-1 xs:mt-[5px] md:mt-1 float-left' type="radio" value="Ja" name="JuLi" />
                <p className='ml-1 inline-block float-left'>Ja</p>
                <input className='ml-2 md:ml-1 inline-block mt-1 xs:mt-[5px] md:mt-1 float-left' type="radio" value="Ja" name="JuLi" />
                <p className='ml-1 inline-block'>Nein</p>
            </div>
            <div className='mt-1 ml-1'>
                <input type="checkbox" className='float-left mt-1 mr-2 w-4 h-4 md:w-3 md:h-3' />
                <p className='text-sm xs:text-base md:text-sm'>Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Webseite einverstanden.</p>
            </div>
            <div className='w-full flex justify-center mt-3 md:mt-2'>
                <input type="button" value="Absenden" href="#" className='inline-block bg-magenta text-white font-bold px-3 md:px-2 py-2 md:py-1' />
            </div>
        </div>
        
        
    </div>
  )
}

export default LP_BecomeMember