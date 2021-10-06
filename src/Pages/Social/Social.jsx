import './Social.css';

export const Social = () => {
    return (
        <div>
            <div className="social-div-wrapper" id="social">
                <div className="social-div"><a href="https://discord.gg/tSQQrHJST4" target="_blank"><img src="images/discord.png" alt="discord" /></a></div>
                <div className="social-div"><a href="https://twitter.com/pixelverse7" target="_blank"><img src="images/twitter.png" alt="twitter" /></a></div>
                <div className="social-div"><a href="https://www.instagram.com/pixelversenft/" target="_blank"><img src="images/instagram.png" alt="instagram" /></a></div>
                <div className="social-div"><a href="https://medium.com/@pixelversenft" target="_blank"><img src="images/medium.png" alt="medium" /></a></div>
                <div className="social-div"><a href=""><img src="images/opensea.png" alt="medium" /></a></div>
            </div>
            <div className="smart-div">
                <p><a href="">Smart Contract</a></p>
            </div>
        </div>
    )
}
