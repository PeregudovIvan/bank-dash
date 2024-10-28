import "./header.scss";

import settings from "../../resources/header/settings.svg";
import ring from "../../resources/header/ring.svg";
import magnifier from "../../resources/header/magnifier.svg";
import face from "../../resources/header/face.png";

const Header = ({ onActive }) => {
    return (
        <header className="header">
            <div className="header__items">
                <div class="hamburger" onClick={onActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header__items__setting">
                    <a href="#">Setting</a>
                </div>
                <div className="header__items__input">
                    <img src={magnifier} alt="magnifier" />
                    <input type="text" placeholder="Search for something" />
                </div>
                <div className="header__items__settings">
                    <a href="#">
                        <img src={settings} alt="settingImg" />
                    </a>
                </div>
                <div className="header__items__ring">
                    <a href="#">
                        <img src={ring} alt="ring" />
                    </a>
                </div>
                <div className="header__items__face">
                    <a href="#">
                        <img src={face} alt="face" />
                    </a>
                </div>
                <div className="header__divider"></div>
            </div>
        </header>
    );
};

export default Header;
