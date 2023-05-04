import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//ROUTES (Input routes from App.jsx here)
const route1 = "home";
const route2 = "page1";

//STYLING
const Nav =  styled.nav`
  color: rgb(157, 255, 148);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  padding: 5px;
  text-decoration: ${(active) => (active.isActive ? 'underline' : 'none')}
  text-decoration: none !important;
  color: white;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 5px;
`;
const I = styled.i`
  font-size: 2.5rem;
  padding: 5px;
`;
const AnchorTag = styled(NavLink)`
  color: rgb(157, 255, 148);
  text-decoration: none;
`;

//CONPONMENT
export function NavBar() {
    return(
        <Nav>
          <I className="icon fa-brands fa-react"></I>
            <Ul>
                <Li isActive = {false}>
                  <AnchorTag to={route1}>Home</AnchorTag>
                </Li>
                <Li isActive = {false}>
                  <AnchorTag to={route2}>Page 1</AnchorTag>
                </Li>
                <Li isActive = {false}>Page 2</Li>
                <Li isActive = {false}>Page 3</Li>
            </Ul>
        </Nav>
    )
};