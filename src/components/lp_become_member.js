import React from 'react'

const LP_Input = ({inputData, type, placeholderValue}) => {
    return (
        <input type={type} /*onChange={inputDataValue => inputData(inputDataValue.target.value)}*/ 
        className='w-full mt-4 h-10 border border-gray-10 bg-[#F2F2F2] px-3 focus:outline-none focus:border-magenta' 
        placeholder={placeholderValue}
        required 
        />
    )
}

const LP_BecomeMember = () => {
  return (
    <div className='mt-4'>
        <div className='bg-white drop-shadow w-2/5 max-w-xs float-right px-4'>
            <LP_Input type="text" placeholderValue="Vor- und Nachname"/>
            <LP_Input type="text" placeholderValue="Straße, Nr."/>
            <LP_Input type="text" placeholderValue="PLZ, Ort"/>
            <LP_Input type="text" placeholderValue="E-Mail"/>
            <LP_Input type="text" placeholderValue="Geburtsdatum DD/MM/YYYY"/>
            <LP_Input type="number" placeholderValue="Telefonnummer"/>
            <div className='mt-3'>
                <p className='ml-1 inline-block float-left'>Bereits JuLi-Mitglied? </p>
                <input className='ml-3 inline-block mt-1 float-left' type="radio" value="Ja" name="JuLi" />
                <p className='ml-1 inline-block float-left'>Ja</p>
                <input className='ml-1 inline-block mt-1 float-left' type="radio" value="Ja" name="JuLi" />
                <p className='ml-1 inline-block'>Nein</p>
            </div>

        </div>
        <p className='w-auto mr-4'>
            Wir Liberalen Schüler wollen Politik und Zeitgeschehen
            mitgestalten. Dabei stehen für uns Freiheit, Individualität, 
            Eigenverantwortung und Toleranz im Mittelpunkt. 
            Wir wollen Entscheidungen nicht anderen überlassen, 
            sondern unsere Zukunft selbst in die Hand nehmen.

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
        
    </div>
  )
}

export default LP_BecomeMember