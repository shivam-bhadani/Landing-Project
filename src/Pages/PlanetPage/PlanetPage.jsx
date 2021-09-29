import "./PlanetPage.css";

export const PlanetPage = () => {
    return (
        <div className="planetPageWrapper">
            <div className="collection"><h1>COLLECTIONS</h1></div>
            <div className="planetPagediv">
                <div className="planet-div">
                    <div className="planet-img-div"><img src="images/planet1.gif" alt="planet" className="planet-img" /></div>
                    <div className="planet-img-div"><img src="images/planet2.gif" alt="planet" className="planet-img" /></div>
                    <div className="planet-img-div"><img src="images/planet3.gif" alt="planet" className="planet-img" /></div>
                    <div className="planet-img-div"><img src="images/planet4.gif" alt="planet" className="planet-img" /></div>
                    <div className="planet-img-div"><img src="images/planet5.gif" alt="planet" className="planet-img" /></div>
                    <div className="planet-img-div"><img src="images/planet6.gif" alt="planet" className="planet-img" /></div>
                </div>
            </div>
        </div>
    )
}
