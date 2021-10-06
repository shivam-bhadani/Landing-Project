import './Roadmap.css'

export const RoadmapPage = () => {
    return (
        <div id="roadmap">
            <div className="roadmap"><h1 className="roadmap-h">Roadmap</h1></div>
            <div className="roadmap-img-div desktop-roadmap">
                <img src="images/roadmap.png" alt="" />
            </div>
            <div className="roadmap-img-div mobile-roadmap">
                <img src="images/mobile-roadmap.png" alt="roadmap" />
            </div>
        </div>
    )
}
