import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

function NavLinks(props) {
    return (
        <NavItem>
            <NavLink to={props.link}>
                <NavContainer>
                    {props.icon === '' ? <p>{props.title}</p> : <img src={props.icon} alt={props.title}/>}
                </NavContainer>
            </NavLink>
        </NavItem>
    );
}

export default NavLinks;

const NavItem = styled.li`
  font-size: 12px;
  font-weight: 300;

  @media screen and (max-width: 52em) {
    &:not(:first-child) {
      display: none;
    }

    &:nth-child(2) {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }

    &:last-child {
      display: flex;
    }
  }
`;

const NavLink = styled(Link)`
  color: var(--color-nav);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  cursor: pointer;
  padding: 0 8px;

  &:hover {
    opacity: 1;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

