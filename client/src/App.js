import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import PlayerProfiles from "./components/Profiles/PlayerProfiles/PlayerProfiles.jsx";
import Player from './components/Profiles/PlayerProfiles/PlayerProfile.jsx';
import Coach from './components/Profiles/CoachProfile/CoachProfile.jsx';
import CoachProfiles from './components/Profiles/CoachProfile/CoachProfiles.jsx';
import RefereeProfiles from "./components/Profiles/RefereeProfiles/RefereeProfiles.jsx";
import Referee from "./components/Profiles/RefereeProfiles/RefereeProfile.jsx";

import EventTable from "./components/EventTable/EvenTable.jsx"
import PointTable from "./components/PointTable/PointTable.jsx"
import EventOrganizerProfiles from './components/Profiles/EventOrganizerProfiles/EventOrganizerProfiles.jsx';
import EventOrganizerProfile from './components/Profiles/EventOrganizerProfiles/EventOrganizerProfile.jsx';
import About from './components/About/About.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/player-profiles" element={<PlayerProfiles />} />
      </Routes>
      <Routes>
        <Route path="/player-profile" element={<Player />} />
      </Routes>
      <Routes>
        <Route path="/coach-profile" element={<Coach />} />
      </Routes>
      <Routes>
        <Route path="/coach-profiles" element={<CoachProfiles />} />
      </Routes>
      <Routes>
        <Route path="/referee-profiles" element={<RefereeProfiles />} />
      </Routes>
      <Routes>
        <Route path="/referee-profile" element={<Referee />} />
      </Routes>
      <Routes>
        <Route path="/eventOrganizer-profiles" element={<EventOrganizerProfiles/>} />
      </Routes>
      <Routes>
        <Route path="/eventOrganizer-profile" element={<EventOrganizerProfile/>} />
      </Routes>

      <Routes>
        <Route path='/event-table' element={<EventTable/>}
        ></Route>
      </Routes>
      <Routes>
        <Route path='/point-table' element={<PointTable />}></Route>
      </Routes>
      <Routes>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
