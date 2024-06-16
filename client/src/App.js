import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import PlayerProfiles from "./components/Profiles/PlayerProfiles/PlayerProfiles.jsx";
import Player from './components/Profiles/PlayerProfiles/PlayerProfile.jsx';
import Coach from './components/Profiles/CoachProfile/CoachProfile.jsx';
import CoachProfiles from './components/Profiles/CoachProfile/CoachProfiles.jsx';
import RefereeProfiles from "./components/Profiles/RefereeProfiles/RefereeProfiles.jsx";
import Referee from "./components/Profiles/RefereeProfiles/RefereeProfile.jsx";
import TeamManagerProfiles from "./components/Profiles/TeamManagerProfiles/TeamManagerProfiles.jsx";
import TeamManager from "./components/Profiles/TeamManagerProfiles/TeamManagerProfile.jsx";
import EventTable from "./components/EventTable/EvenTable.jsx"
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
        <Route path="/team-manager-profiles" element={<TeamManagerProfiles />} />
      </Routes>
      <Routes>
        <Route path="/team-manager-profile" element={<TeamManager />} />
      </Routes>

      <Routes>
        <Route path='/EventTable' element={<EventTable/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
