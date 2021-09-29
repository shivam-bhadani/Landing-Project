import { useState } from 'react';
import './Navbar.css'

export const Navbar = () => {
    let [navUlDivClass, setNavUlDivClass] = useState("nav-ul-div");
    let [hamburgerClass, setHamburgerClass] = useState("hamburger");
    let [crossClass, setCrossClass] = useState("cross")

    function hamburgerClick() {

        setNavUlDivClass("nav-ul-div display");
        setHamburgerClass("hamburger hide");
        setCrossClass("cross display");
    }

    function crossClick() {
        setCrossClass("cross");
        setNavUlDivClass("nav-ul-div");
        setHamburgerClass("hamburger");
    }

    return (
        <div>
            <div className="nav-wrapper">
                <div className="nav-div">
                    <div className="logo-div">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    <div className={hamburgerClass} onClick={hamburgerClick}>
                        &#x2630;
                    </div>
                    <div className={crossClass} onClick={crossClick}>
                        &#x2716;
                    </div>
                    <div className={navUlDivClass}>
                        <ul className="nav-ul">
                            <li className="nav-li"><a href="">Home</a></li>
                            <li className="nav-li"><a href="">Presale</a></li>
                            <li className="nav-li"><a href="">Collection</a></li>
                            <li className="nav-li"><a href="">Roadmap</a></li>
                            <li className="nav-li"><a href="">Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
