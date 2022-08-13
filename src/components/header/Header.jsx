import React from 'react';

import './Header.css';

function Header(props) {
    return (
        <header className={"header"}>
            <div className={"header__text-box"}>
                <h1 className={"heading__primary"}>Get <span className={"heading__primary--pink"}>supercharged</span> for university.</h1>
                <h3 className={"heading__secondary"}>Save on Mac or iPad. Plus get AirPods.<sup>1</sup></h3>
            </div>
        </header>
    );
}

export default Header;