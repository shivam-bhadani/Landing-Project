import './Home.css';

export const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="content-container">
                    <div className="title-img"><img src="images/title.png" alt="" /></div>
                    <div className="content">
                        <p>PixelVerse is a mystical unexplored cosmic universe consisting of 7,777 pixelated extraterrestrial bodies including planets, asteroids, stars and black holes; each with distinct characteristics and interesting.</p>
                        <p>Each NFT is priced at ETH 0.07777. Stay on the lookout for owning your own unique PixelVerse and impress your peers. Your unique NFT is also your ticket to The Elysian, a members exclusive social platform.</p>
                    </div>
                </div>
                <div className="gif-div">
                    <img src="images/content.gif" alt="planet-gif" />
                </div>
            </div>
        </div>
    )
}
