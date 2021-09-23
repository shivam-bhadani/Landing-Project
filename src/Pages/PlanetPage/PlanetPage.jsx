import "./PlanetPage.css";

export const PlanetPage = () => {
    return (
        <div className="planetPagediv">
            <div className="planet-div">
                <div className="planet-img-div">
                    <video autoPlay loop muted>
                        <source src="images/planet1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="planet-img-div">
                    <video autoPlay loop muted>
                        <source src="images/planet2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="planet-img-div">
                    <video autoPlay loop muted>
                        <source src="images/planet3.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="planet-img-div"><img src="images/planet4.gif" alt="planet" className="planet-img" /></div>
                <div className="planet-img-div"><img src="images/planet5.gif" alt="planet" className="planet-img" /></div>
                <div className="planet-img-div"><img src="images/planet6.gif" alt="planet" className="planet-img" /></div>
            </div>
        </div>
    )
}
