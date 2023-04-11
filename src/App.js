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
import PositionSide from './pages/position_side';
import ArticleSide from './pages/article_side';
import { EventContext, PositionContext, DataContext, VorstandContext } from './context';


function App() {
  const [data, setData] = useState(["", "", ""])
  const [eventData, setEventData] = useState([" "])
  const [positionData, setPositionData] = useState([" "])
  const [vorstandData, setVorstandData] = useState([" "])
  const [footer, setFooter] = useState(true)
  const [landscape, setLandscape] = useState(false)

  useEffect(() => {
    fetch('https://api.wrire.com/partner/ls-bawu?page=0', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data)=>{
        setData(response_data)
    })).catch(err => {console.log(err)})
    
    fetch('https://api.wrire.com/partner/ls-bawu/Events', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data) => {
        setEventData(response_data)
    })).catch(err => {console.log(err)})

    fetch('https://api.wrire.com/partner/ls-bawu/Positionen', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data) => {
        setPositionData(response_data)
    })).catch(err => {console.log(err)})

    fetch('https://api.wrire.com/partner/teamsmiley/Vorstand', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((response_data) => {
        setVorstandData(response_data)
    })).catch(err => {console.log(err)})
  }, [])
  

  return (
    <Router>
      <DataContext.Provider value={data}>
        <EventContext.Provider value={eventData} >
        <PositionContext.Provider value={positionData} >
        <VorstandContext.Provider value={vorstandData}>
          <>
          <Header />
          <div className='h-full min-h-[calc(100vh-200px)] font-["Montserrat"] bg-["#FDFDFD"] max-w-[60rem] w-[90%] z-1 mx-auto mt-[5.5rem] pb-4'>
            <div className='inline-block mt-[1.5rem] w-full h-auto float-left'>
              <Routes>
                <Route path="/home" element={<LandingPage  />} /> 
                <Route path="/mitglied-werden" element={<BecomeMember unmountFooter={() => setFooter(false)} mountFooter={() => setFooter(true)}  />} />
                <Route path="/events" element={<Events />}  />
                <Route path="/landesvorstand" element={<Landesvorstand />} />
                <Route path="/vorstand/">
                  <Route path=':vorstandID' element={<PersonIntroduction landscape={() => setLandscape(true)} NoLandscape={() => setLandscape(false)} />} />
                </Route>
                <Route path="/neuigkeiten/">
                  <Route path=':newsID' element={<ArticleSide unmountFooter={() => setFooter(false)} mountFooter={() => setFooter(true)} />} />
                </Route>
                <Route path="/positionen" element={<OurPositions  />} />
                <Route path="/position/">
                  <Route path=':positionID' element={<PositionSide unmountFooter={() => setFooter(false)} mountFooter={() => setFooter(true)} />} />
                </Route>
                <Route path="/news" element={<News />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
                <Route path="/kontakt" element={<Contact />}   />
              </Routes>
            </div>
          </div>
          {footer && <Footer landscape={landscape} />}
          </>
        </VorstandContext.Provider>
        </PositionContext.Provider>
        </EventContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
