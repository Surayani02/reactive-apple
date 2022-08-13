import React from 'react';
import {Link} from "react-router-dom";

import './NavLinks.css';

function NavLinks(props) {
    return (
        <li className={"navigation__item"}>
            <Link to={props.link} className="navigation__link">
                <div className="navigation__container">
                    {props.icon === '' ? <p>{props.title}</p> : <img src={props.icon} alt={props.title}/>}
                </div>
            </Link>
        </li>
    );
}

export default NavLinks;