import React from 'react'
import './TeamCard.css'

export const TeamCard = () => {
    return (
        <div className="team-card-wrapper" id="#teams">
            <div className="team"><h1>Team</h1></div>
            <div className="team-card-div-wrapper">
                <div className="team-card-div team1">
                    <div className="team-img-div">
                        <img src="images/team1.png" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2><a href="">PixelNova</a></h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
                <div className="team-card-div team-card-div2">
                    <div className="team-img-div team-img-div2">
                        <img src="images/team2.png" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2><a href="">PixelNaut</a></h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
                <div className="team-card-div team1">
                    <div className="team-img-div">
                        <img src="images/team3.png" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2><a href="">PixelNeutron</a></h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
