import { About } from "../../Components/About/About";
import { Timer } from "../../Components/Timer/Timer";
import './AboutTimerPage.css';

export const AboutTimerPage = () => {
    return (
        <div className="about-timer-page">
            <Timer />
            <About />
        </div>
    )
}
