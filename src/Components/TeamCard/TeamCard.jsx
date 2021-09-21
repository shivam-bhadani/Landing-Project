import React from 'react'
import './TeamCard.css'

export const TeamCard = () => {
    return (
        <div className="team-card-wrapper">
            <h1 className="team-h">Team</h1>
            <div className="team-card-div-wrapper">
                <div className="team-card-div">
                    <div className="team-img-div">
                        <img src="images/team1.jpg" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2>PixelNovat</h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
                <div className="team-card-div team-card-div2">
                    <div className="team-img-div team-img-div2">
                        <img src="images/team2.jpg" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2>PixelNaut</h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
                <div className="team-card-div">
                    <div className="team-img-div">
                        <img src="images/team3.jpg" alt="team" />
                    </div>
                    <div className="team-text-div">
                        <h2>PixelNeutron</h2>
                        <div className="twitter-logo-div"><a href=""><img src="images/twitterlogo.png" alt="twitter" className="twitter-logo" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
