import './index.css';
import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import BecomeMember from './pages/become_member';
import Events from './pages/events';
import Landesvorstand from './pages/landesvorstand';
import LandingPage from './pages/landing_page';
import OurPositions from './pages/our_positions';
import News from './pages/news';
import PersonIntroduction from './pages/person_introduction';
import Contact from './pages/contact';
import DataContext from './context'
import PositionSide from './pages/position_side';
import ArticleSide from './pages/article_side';
import { EventContext } from './context';
import { PositionContext } from './context';


function App() {
  const [data, setData] = useState(["", "", ""])
  const [eventData, setEventData] = useState([])
  const [positionData, setPositionData] = useState([])
  const [footer, setFooter] = useState(true)

  useEffect(() => {
    fetch('https://api.wrire.com/partner/ls-bawu?page=0', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data)=>{
        setData(response_data)
    }))
    
    fetch('https://api.wrire.com/partner/ls-bawu/Events', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data) => {
        setEventData(response_data)
    }))

    fetch('https://api.wrire.com/partner/ls-bawu/Positionen', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data) => {
        setPositionData(response_data); console.log(response_data)
    }))
  }, [])
  

  return (
    <Router>
      <DataContext.Provider value={data}>
        <EventContext.Provider value={eventData} >
        <PositionContext.Provider value={positionData} >
          <>
          <Header />
          <div className='h-full min-h-[calc(100vh-200px)] font-["Montserrat"] bg-["#FDFDFD"] max-w-[60rem] w-[90%] z-1 mx-auto mt-[4.5rem] pb-4'>
            <div className='inline-bloxk mt-[1.5rem] w-full h-auto float-left'>
              <Routes>
                <Route path="/home" element={<LandingPage footer={() => setFooter(true)}  />} /> 
                <Route path="/mitglied-werden" element={<BecomeMember footer={() => setFooter(false)}  />} />
                <Route path="/events" element={<Events footer={() => setFooter(true)} />}  />
                <Route path="/landesvorstand" element={<Landesvorstand footer={() => setFooter(true)} />} />
                <Route path="/vorstand/">
                  <Route path=':personID' element={<PersonIntroduction footer={() => setFooter(true)} />} />
                </Route>
                <Route path="/neuigkeiten/">
                  <Route path=':newsID' element={<ArticleSide footer={() => setFooter(false)} />} />
                </Route>
                <Route path="/positionen" element={<OurPositions footer={() => setFooter(true)}  />} />
                <Route path="/position/">
                  <Route path=':positionID' element={<PositionSide footer={() => setFooter(false)} />} />
                </Route>
                <Route path="/news" element={<News footer={() => setFooter(true)}  />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
                <Route path="/kontakt" element={<Contact footer={() => setFooter(true)} />}   />
              </Routes>
            </div>
          </div>
          {footer && <Footer />}
          </>
        </PositionContext.Provider>
        </EventContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
