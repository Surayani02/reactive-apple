import React, {useState} from "react";
import styled from 'styled-components';

import NavLinks from "./NavLinks";

import {menuData} from "../../utility/menuData";
import {imageData} from "../../utility/imageData";

function Navigation() {
    const [isVisible, setIsVisible] = useState(false);
    const handleIcon = function () {
        setIsVisible(!isVisible);
    }

    return (
        <NavigationBar>
            <Wrapper>
                <NavList>
                    <NavItem>
                        <NavMobile>
                            {isVisible ? <Icon onClick={handleIcon} src={imageData.icon.cross} alt={"toggle menu"}/> :
                                <Icon onClick={handleIcon} src={imageData.icon.bar} alt={"toggle menu"}/>}
                        </NavMobile>
                    </NavItem>
                    {menuData.map((item) => (
                        <NavLinks
                            link={item.link}
                            title={item.title}
                            icon={item.icon}
                            key={item.id}
                        />
                    ))}
                </NavList>
            </Wrapper>
        </NavigationBar>
    );
}

export default Navigation;

const NavigationBar = styled.nav`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-black-opaque);
  padding: 12px 0;

  @media screen and (max-width: 52em) {
    position: relative;
  }
`

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`

const NavList = styled.ul`
  padding: 0 16px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavItem = styled.li`
  font-size: 12px;
  font-weight: 300;

  @media screen and (min-width: 52em) {
    &:first-child {
      display: none;
    }
  }
`

const NavMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Icon = styled.img`
  transition: all 0.3s ease;
`
