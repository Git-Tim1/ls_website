import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import BecomeMember from './pages/become_member';
import Events from './pages/events';
import Landesvorstand from './pages/landesvorstand';
import LandingPage from './pages/landing_page';
import OurPositions from './pages/our_positions';
import PressReleases from './pages/press_releases';
import PersonIntroduction from './pages/person_introduction';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Header />
      <div className='h-full min-h-full font-["Montserrat"] bg-["#FDFDFD"] max-w-[60rem] w-[90%] z-1 mx-auto mt-[4.5rem] pb-4'>
        <div className='mt-[1.5rem] block w-full h-auto float-left'>
          <Routes>
            <Route path="/home" element={<LandingPage />} /> 
            <Route path="/mitglied-werden" element={<BecomeMember />} />
            <Route path="/events" element={<Events />} />
            <Route path="/landesvorstand" element={<Landesvorstand />} />
            <Route path="/vorstand/">
              <Route path=':personID' element={<PersonIntroduction />} />
            </Route>
            <Route path="/positionen" element={<OurPositions />} />
            <Route path="/pressemitteilungen" element={<PressReleases />} />
            <Route path="/pressemitteilungen" element={<PressReleases />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
