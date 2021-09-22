import { TeamCard } from "../../Components/TeamCard/TeamCard";
import "./TeamPage.css";
import { Social } from "../Social/Social";

export const TeamPage = () => {
    return (
        <div className="team-page-div">
            <TeamCard />
            <Social />
        </div>
    )
}
