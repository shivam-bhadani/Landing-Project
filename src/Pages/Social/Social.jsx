import './Social.css';

export const Social = () => {
    return (
        <div>
            <div className="social-div-wrapper">
                <div className="social-div"><a href="https://discord.gg/qRVdMB5Fc7" target="_blank"><img src="images/discord.png" alt="discord" /></a></div>
                <div className="social-div"><a href=""><img src="images/facebook.png" alt="twitter" /></a></div>
                <div className="social-div"><a href=""><img src="images/instagram.png" alt="instagram" /></a></div>
                <div className="social-div"><a href=""><img src="images/medium.png" alt="medium" /></a></div>
                <div className="social-div"><a href=""><img src="images/opensea.png" alt="medium" /></a></div>
            </div>
            <div className="smart-div">
                <p><a href="">Smart Contract</a></p>
            </div>
        </div>
    )
}
