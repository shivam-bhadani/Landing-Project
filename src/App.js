import './App.css';

import { AboutTimerPage } from './Pages/AboutTimerPage/AboutTimerPage';
import { PlanetPage } from './Pages/PlanetPage/PlanetPage';
import { TeamPage } from './Pages/TeamPage/TeamPage';
import { Social } from './Pages/Social/Social';
import { RoadmapPage } from './Pages/RoadmapPage/RoadmapPage';

function App() {
  return (
    <div>
      <AboutTimerPage />
      <PlanetPage />
      <RoadmapPage />
      <TeamPage />
      <Social />
    </div>
  );
}

export default App;
