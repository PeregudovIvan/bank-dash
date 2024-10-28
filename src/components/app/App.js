import { useState } from "react";

import "./app.scss";

import Menu from "../menu/Menu";
import Header from "../header/Header";
import Profile from "../profile/Profile";

const App = () => {
    const [active, setActive] = useState(false);

    const onActive = () => {
        setActive((active) => !active);
    };

    return (
        <div className="container">
            <div className="app">
                <Menu onActive={onActive} active={active} />
                <div className="wrapper">
                    <Header onActive={onActive} />
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default App;
