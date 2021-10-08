import './App.css';

import { AboutTimerPage } from './Pages/AboutTimerPage/AboutTimerPage';
import { PlanetPage } from './Pages/PlanetPage/PlanetPage';
import { TeamPage } from './Pages/TeamPage/TeamPage';
import { RoadmapPage } from './Pages/RoadmapPage/RoadmapPage';
import { Home } from './Pages/HomePage/Home';
import { Navbar } from './Components/Navbar/Navbar';
import Particles from "react-particles-js";
import ParticleConfig from './config/Particle-config';

function App() {
  return (
    <div>
      <Particles params={ParticleConfig} className="particleStyle" />
      <Navbar />
      <Home />
      <AboutTimerPage />
      <PlanetPage />
      <RoadmapPage />
      <TeamPage />
    </div>
  );
}

export default App;
