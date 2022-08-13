import React from "react";

import "./Navigation.css";

import NavLinks from "./NavLinks";
import { menuData } from "../../utility/menuData";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <div className="navigation__mobile">
              <span className="line line-top"></span>
              <span className="line line-bottom"></span>
            </div>
          </li>
          {menuData.map((item) => (
            <NavLinks
              link={item.link}
              title={item.title}
              icon={item.icon}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
