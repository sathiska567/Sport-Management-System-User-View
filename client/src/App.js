import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import PlayerProfiles from './components/Profiles/PlayerProfiles/PlayerProfiles.jsx'
import Player from './components/Profiles/PlayerProfiles/PlayerProfile.jsx';
import Coach from './components/Profiles/CoachProfiles/CoachProfiles.jsx';
import Referee from "./components/Profiles/RefereeProfiles/RefereeProfiles.jsx";
import TeamManager from "./components/Profiles/TeamManagerProfiles/TeamManagerProfiles.jsx";
import PointTable from './components/PointTable/PointTable.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/profiles" element={<PlayerProfiles />} />
      </Routes>
      <Routes>
        <Route path="/player-profiles" element={<Player />} />
      </Routes>
      <Routes>
        <Route path="/coach-profiles" element={<Coach />} />
      </Routes>
      <Routes>
        <Route path="/referee-profiles" element={<Referee />} />
      </Routes>
      <Routes>
        <Route path="/team-manager-profiles" element={<TeamManager />} />
      </Routes>
      <Routes>
        <Route path="/PointTable" element={<PointTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
