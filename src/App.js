import './App.css';

import { AboutTimerPage } from './Pages/AboutTimerPage/AboutTimerPage';
import { PlanetPage } from './Pages/PlanetPage/PlanetPage';
import { TeamPage } from './Pages/TeamPage/TeamPage';
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
    </div>
  );
}

export default App;
