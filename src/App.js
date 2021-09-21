import './App.css';

import { AboutTimerPage } from './Pages/AboutTimerPage/AboutTimerPage';
import { PlanetPage } from './Pages/PlanetPage/PlanetPage';
import { TeamPage } from './Pages/TeamPage/TeamPage';
import { Social } from './Pages/Social/Social';
import { RoadmapPage } from './Pages/RoadmapPage/RoadmapPage';
import { Home } from './Pages/HomePage/Home';

function App() {
  return (
    <div>
      <Home />
      <AboutTimerPage />
      <PlanetPage />
      <RoadmapPage />
      <TeamPage />
      <Social />
    </div>
  );
}

export default App;
